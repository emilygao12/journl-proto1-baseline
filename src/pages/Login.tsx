import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    
    // Mock authentication - simulate network delay
    setTimeout(() => {
      // Simple mock auth: any email with password length > 6 succeeds
      if (password.length >= 6) {
        toast.success("Welcome back to Journl");
        navigate("/dashboard");
      } else {
        toast.error("Password must be at least 6 characters");
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-semibold text-foreground mb-2 tracking-tight">
            Journl
          </h1>
          <p className="text-muted-foreground text-sm">
            Your thoughts are safe here.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border focus:ring-primary shadow-[var(--shadow-soft)] transition-all"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-card border-border focus:ring-primary shadow-[var(--shadow-soft)] transition-all"
                disabled={isLoading}
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="journal"
            size="lg"
            className="w-full rounded-full shadow-[var(--shadow-soft)]"
            disabled={isLoading}
          >
            {isLoading ? "Opening your journal..." : "Continue"}
          </Button>

          <div className="text-center">
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline"
              onClick={() => toast.info("Password reset coming soon")}
            >
              Forgot password?
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-12 italic">
          Your thoughts are safe here.
        </p>
      </div>
    </div>
  );
};

export default Login;
