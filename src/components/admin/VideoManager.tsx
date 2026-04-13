import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Upload, Trash2 } from "lucide-react";

const VideoManager = () => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ["admin-videos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("videos").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-videos"] });
      toast.success("Video deleted");
    },
    onError: () => toast.error("Failed to delete video"),
  });

  const handleUpload = async (file: File) => {
    if (!file) return;
    setUploading(true);
    try {
      const path = `videos/${Date.now()}-${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("site-videos")
        .upload(path, file, { upsert: true });
      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("site-videos")
        .getPublicUrl(uploadData.path);

      const { error: insertError } = await supabase.from("videos").insert({
        title: title || file.name.replace(/\.[^.]+$/, ""),
        description: description || null,
        video_url: urlData.publicUrl,
        display_order: videos.length,
      });
      if (insertError) throw insertError;

      setTitle("");
      setDescription("");
      queryClient.invalidateQueries({ queryKey: ["admin-videos"] });
      toast.success("Video uploaded!");
    } catch (e: any) {
      toast.error(e.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  if (isLoading) return <p className="text-cream/40 text-sm">Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="space-y-4 p-4 rounded bg-navy border border-gold/20">
        <h3 className="font-heading text-lg text-cream">Upload New Video</h3>
        <div>
          <label className="block text-cream/70 font-body text-xs mb-1 uppercase tracking-wider">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event title"
            className="w-full px-3 py-2 rounded bg-navy border border-gold/20 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
        </div>
        <div>
          <label className="block text-cream/70 font-body text-xs mb-1 uppercase tracking-wider">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description"
            rows={2}
            className="w-full px-3 py-2 rounded bg-navy border border-gold/20 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
          />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleUpload(file);
          }}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 px-6 py-2 bg-gold text-primary-foreground font-body font-semibold text-xs tracking-wider uppercase rounded hover:bg-gold-dark transition-colors disabled:opacity-50"
        >
          <Upload className="w-3 h-3" />
          {uploading ? "Uploading..." : "Select & Upload Video"}
        </button>
      </div>

      {videos.length === 0 ? (
        <p className="text-cream/40 font-body text-sm">No videos uploaded yet.</p>
      ) : (
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex items-center gap-4 p-3 rounded bg-navy border border-gold/20"
            >
              <video
                src={video.video_url}
                muted
                className="w-28 h-20 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="font-heading text-sm text-cream truncate">{video.title}</p>
                {video.description && (
                  <p className="font-body text-xs text-cream/50 truncate">{video.description}</p>
                )}
              </div>
              <button
                onClick={() => deleteMutation.mutate(video.id)}
                className="p-2 text-cream/40 hover:text-red-400 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoManager;
