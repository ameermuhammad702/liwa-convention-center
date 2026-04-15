import { useSiteContent } from "./useSiteContent";

const DEFAULT_LOGO = "";

export const useLogo = () => {
  const { data: content, isLoading } = useSiteContent("branding");
  const logoUrl = content?.logo || DEFAULT_LOGO;
  return { logoUrl, isLoading };
};
