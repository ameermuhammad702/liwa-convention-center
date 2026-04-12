import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="font-heading text-3xl font-bold text-gold text-center mb-2">Admin Login</h1>
        <p className="text-cream/60 font-body text-sm text-center mb-8">LIWA Convention Centre</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded bg-navy-light border border-gold/20 font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded bg-navy-light border border-gold/20 font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-3 bg-gold text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-gold-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <a href="/" className="block text-center mt-6 text-cream/40 font-body text-xs hover:text-gold transition-colors">
          ← Back to website
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;
