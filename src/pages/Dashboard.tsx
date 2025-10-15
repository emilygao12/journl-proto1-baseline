import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-12 animate-fade-in">
          <h1 className="text-4xl font-semibold text-foreground tracking-tight">
            Journl
          </h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground"
          >
            Logout
          </Button>
        </header>

        <div className="space-y-6">
          <Card className="p-8 bg-card shadow-[var(--shadow-soft)] border-border">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Welcome to your journal
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This is your private space for reflection. Start writing your thoughts,
              dreams, and experiences. Each entry is a step in your journey.
            </p>
          </Card>

          <Card className="p-8 bg-card shadow-[var(--shadow-soft)] border-border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  Today's Entry
                </h3>
                <p className="text-sm text-muted-foreground">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="min-h-[200px] p-4 bg-background/50 rounded-lg border border-border/50">
              <p className="text-muted-foreground italic text-sm">
                Begin writing...
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
