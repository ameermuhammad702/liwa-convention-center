import { useSiteContent } from "./useSiteContent";

const DEFAULT_LOGO = "";

export const useLogo = () => {
  const { data: content, isLoading } = useSiteContent("branding");
  const rawLogo = content?.logo || DEFAULT_LOGO;
  const logoUrl =
    rawLogo && typeof rawLogo === "string" && rawLogo.includes("/storage/v1/object/public/")
      ? `${rawLogo.replace("/storage/v1/object/public/", "/storage/v1/render/image/public/")}?width=240&quality=80`
      : rawLogo;
  return { logoUrl, isLoading };
};
