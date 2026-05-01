import { useState, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Navigate } from "react-router-dom";
import { useSiteContent, useUpdateSiteContent, uploadSiteImage } from "@/hooks/useSiteContent";
import { toast } from "sonner";
import { LogOut, Save, Upload, Image } from "lucide-react";
import VideoManager from "@/components/admin/VideoManager";

const SECTIONS = [
  {
    key: "branding",
    label: "Branding / Logo",
    fields: [],
    images: [{ name: "logo", label: "Site Logo" }],
  },
  {
    key: "hero",
    label: "Hero Section",
    fields: [
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "heading", label: "Heading", type: "text" },
      { name: "headingSub", label: "Sub Heading", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "cta1", label: "CTA Button 1 Text", type: "text" },
      { name: "cta2", label: "CTA Button 2 Text", type: "text" },
    ],
    images: [{ name: "heroImage", label: "Hero Background Image" }],
  },
  {
    key: "about",
    label: "About Section",
    fields: [
      { name: "tagline", label: "Tagline", type: "text" },
      { name: "heading", label: "Heading", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "stat1Value", label: "Stat 1 Value", type: "text" },
      { name: "stat1Label", label: "Stat 1 Label", type: "text" },
      { name: "stat2Value", label: "Stat 2 Value", type: "text" },
      { name: "stat2Label", label: "Stat 2 Label", type: "text" },
      { name: "stat3Value", label: "Stat 3 Value", type: "text" },
      { name: "stat3Label", label: "Stat 3 Label", type: "text" },
      { name: "stat4Value", label: "Stat 4 Value", type: "text" },
      { name: "stat4Label", label: "Stat 4 Label", type: "text" },
    ],
  },
  {
    key: "venues",
    label: "Venues Section",
    fields: [
      { name: "tagline", label: "Tagline", type: "text" },
      { name: "heading", label: "Heading", type: "text" },
      { name: "venue1Name", label: "Venue 1 Name", type: "text" },
      { name: "venue1Desc", label: "Venue 1 Description", type: "textarea" },
      { name: "venue2Name", label: "Venue 2 Name", type: "text" },
      { name: "venue2Desc", label: "Venue 2 Description", type: "textarea" },
    ],
    images: [
      { name: "venue1Image", label: "Venue 1 Image" },
      { name: "venue2Image", label: "Venue 2 Image" },
    ],
  },
  {
    key: "videos",
    label: "Videos",
    fields: [],
  },
  {
    key: "contact",
    label: "Contact Section",
    fields: [
      { name: "tagline", label: "Tagline", type: "text" },
      { name: "heading", label: "Heading", type: "text" },
      { name: "subheading", label: "Subheading", type: "text" },
      { name: "address", label: "Address", type: "textarea" },
      { name: "phone", label: "Phone Numbers", type: "textarea" },
      { name: "email", label: "Email", type: "text" },
      { name: "hours", label: "Hours", type: "text" },
    ],
  },
  {
    key: "social",
    label: "Social Media Links",
    fields: [
      { name: "instagramUrl", label: "Instagram URL", type: "text" },
      { name: "facebookUrl", label: "Facebook URL", type: "text" },
    ],
  },
];

const SectionEditor = ({ section }: { section: typeof SECTIONS[0] }) => {
  const { data: content, isLoading } = useSiteContent(section.key);
  const updateContent = useUpdateSiteContent();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [initialized, setInitialized] = useState(false);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Initialize form when content loads
  if (content && !initialized) {
    const initial: Record<string, string> = {};
    section.fields.forEach((f) => {
      initial[f.name] = (content[f.name] as string) ?? "";
    });
    section.images?.forEach((img) => {
      initial[img.name] = (content[img.name] as string) ?? "";
    });
    setFormData(initial);
    setInitialized(true);
  }

  const handleSave = async () => {
    try {
      await updateContent.mutateAsync({
        sectionKey: section.key,
        content: formData,
      });
      toast.success(`${section.label} saved!`);
    } catch {
      toast.error("Failed to save");
    }
  };

  const handleImageUpload = async (fieldName: string, file: File) => {
    try {
      const path = `${section.key}/${fieldName}-${Date.now()}.${file.name.split(".").pop()}`;
      const url = await uploadSiteImage(file, path);
      setFormData((prev) => ({ ...prev, [fieldName]: url }));
      toast.success("Image uploaded!");
    } catch {
      toast.error("Upload failed");
    }
  };

  if (isLoading) return <p className="text-cream/40 text-sm">Loading...</p>;

  return (
    <div className="space-y-4">
      {section.fields.map((field) => (
        <div key={field.name}>
          <label className="block text-cream/70 font-body text-xs mb-1 uppercase tracking-wider">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              value={formData[field.name] ?? ""}
              onChange={(e) => setFormData((p) => ({ ...p, [field.name]: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 rounded bg-navy border border-gold/20 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
            />
          ) : (
            <input
              type="text"
              value={formData[field.name] ?? ""}
              onChange={(e) => setFormData((p) => ({ ...p, [field.name]: e.target.value }))}
              className="w-full px-3 py-2 rounded bg-navy border border-gold/20 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          )}
        </div>
      ))}

      {section.images?.map((img) => (
        <div key={img.name}>
          <label className="block text-cream/70 font-body text-xs mb-1 uppercase tracking-wider">
            {img.label}
          </label>
          <div className="flex items-center gap-3">
            {formData[img.name] && (
              <img
                src={formData[img.name]}
                alt={img.label}
                className="w-20 h-14 object-cover rounded border border-gold/20"
              />
            )}
            <input
              ref={(el) => { fileInputRefs.current[img.name] = el; }}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(img.name, file);
              }}
            />
            <button
              type="button"
              onClick={() => fileInputRefs.current[img.name]?.click()}
              className="flex items-center gap-2 px-3 py-2 rounded bg-navy border border-gold/20 text-cream/60 font-body text-xs hover:border-gold/50 transition-colors"
            >
              <Upload className="w-3 h-3" />
              Upload
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={handleSave}
        disabled={updateContent.isPending}
        className="flex items-center gap-2 px-6 py-2 bg-gold text-primary-foreground font-body font-semibold text-xs tracking-wider uppercase rounded hover:bg-gold-dark transition-colors disabled:opacity-50"
      >
        <Save className="w-3 h-3" />
        {updateContent.isPending ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(SECTIONS[0].key);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <p className="text-cream/60 font-body">Loading...</p>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-gold mb-2">Access Denied</h1>
          <p className="text-cream/60 font-body text-sm mb-4">You don't have admin privileges.</p>
          <button onClick={() => { signOut(); navigate("/"); }} className="text-gold font-body text-sm underline">
            Sign out & go home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="bg-navy-light border-b border-gold/10 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-xl text-gold">LIWA Admin</h1>
          <p className="text-cream/40 font-body text-xs">Content Management</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-cream/40 font-body text-xs hover:text-gold transition-colors">
            View Site
          </a>
          <button
            onClick={() => { signOut(); navigate("/"); }}
            className="flex items-center gap-1 text-cream/40 font-body text-xs hover:text-gold transition-colors"
          >
            <LogOut className="w-3 h-3" /> Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 bg-navy-light min-h-[calc(100vh-60px)] border-r border-gold/10 p-4">
          <nav className="space-y-1">
            {SECTIONS.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`w-full text-left px-3 py-2 rounded font-body text-sm transition-colors ${
                  activeSection === s.key
                    ? "bg-gold/10 text-gold"
                    : "text-cream/50 hover:text-cream/80 hover:bg-cream/5"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8 max-w-3xl">
          {activeSection === "videos" ? (
            <div>
              <h2 className="font-heading text-2xl text-cream mb-6">Videos</h2>
              <VideoManager />
            </div>
          ) : (
            SECTIONS.filter((s) => s.key === activeSection).map((s) => (
              <div key={s.key}>
                <h2 className="font-heading text-2xl text-cream mb-6">{s.label}</h2>
                <SectionEditor section={s} />
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
