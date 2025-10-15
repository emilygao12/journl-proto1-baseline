import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Download } from "lucide-react";
import { useEffect, useState } from "react";

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-breathe">
      <Card className="w-full max-w-md p-8 space-y-6 bg-card/80 backdrop-blur-sm border-border shadow-[var(--shadow-soft)]">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/10 animate-gentle-float">
              <Smartphone className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-foreground">
              Install Journl
            </h1>
            <p className="text-muted-foreground">
              Add Journl to your home screen for quick access
            </p>
          </div>
        </div>

        {isInstallable ? (
          <Button 
            onClick={handleInstall}
            className="w-full"
            size="lg"
          >
            <Download className="w-4 h-4 mr-2" />
            Install App
          </Button>
        ) : (
          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">To install on your device:</p>
            
            <div className="space-y-3 pl-4">
              <div>
                <p className="font-medium text-foreground">iPhone/iPad:</p>
                <p>Tap the Share button, then "Add to Home Screen"</p>
              </div>
              
              <div>
                <p className="font-medium text-foreground">Android:</p>
                <p>Tap the menu (⋮), then "Add to Home screen" or "Install app"</p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-border">
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={() => window.location.href = '/'}
          >
            Back to Login
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Install;
