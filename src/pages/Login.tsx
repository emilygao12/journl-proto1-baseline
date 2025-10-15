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
    <div className="min-h-screen flex items-center justify-center px-4 animate-breathe">
      <div className="w-full max-w-md">
        <div className="text-center mb-12 animate-fade-in animate-gentle-float">
          <h1 className="text-5xl font-semibold text-foreground mb-2 tracking-tight transition-all duration-500 hover:text-primary">
            Journl
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium transition-all duration-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border focus:ring-primary shadow-[var(--shadow-soft)] transition-all duration-300 focus:scale-[1.01] focus:shadow-[var(--shadow-warm)]"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium transition-all duration-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-card border-border focus:ring-primary shadow-[var(--shadow-soft)] transition-all duration-300 focus:scale-[1.01] focus:shadow-[var(--shadow-warm)]"
                disabled={isLoading}
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="journal"
            size="lg"
            className="w-full rounded-full shadow-[var(--shadow-soft)] animate-fade-in"
            disabled={isLoading}
          >
            {isLoading ? "Opening your journal..." : "Continue"}
          </Button>

          <div className="text-center animate-fade-in">
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 underline-offset-2 hover:underline hover:scale-105 inline-block"
              onClick={() => toast.info("Password reset coming soon")}
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
