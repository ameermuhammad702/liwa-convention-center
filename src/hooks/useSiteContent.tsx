import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";

export interface SectionContent {
  [key: string]: string | undefined;
}

export const useSiteContent = (sectionKey: string) => {
  return useQuery({
    queryKey: ["site-content", sectionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("content")
        .eq("section_key", sectionKey)
        .maybeSingle();
      if (error) throw error;
      return (data?.content as SectionContent) ?? null;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useUpdateSiteContent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ sectionKey, content }: { sectionKey: string; content: SectionContent }) => {
      const { data: existing } = await supabase
        .from("site_content")
        .select("id")
        .eq("section_key", sectionKey)
        .maybeSingle();

      if (existing) {
        const { error } = await supabase
          .from("site_content")
          .update({ content: content as unknown as Json })
          .eq("section_key", sectionKey);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("site_content")
          .insert({ section_key: sectionKey, content: content as unknown as Json });
        if (error) throw error;
      }
    },
    onSuccess: (_, { sectionKey }) => {
      queryClient.invalidateQueries({ queryKey: ["site-content", sectionKey] });
    },
  });
};

export const uploadSiteImage = async (file: File, path: string) => {
  const { data, error } = await supabase.storage
    .from("site-images")
    .upload(path, file, { upsert: true });
  if (error) throw error;
  const { data: urlData } = supabase.storage.from("site-images").getPublicUrl(data.path);
  return urlData.publicUrl;
};
