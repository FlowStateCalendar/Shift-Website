"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const COOKIE_NAME = "shiftHabitsConsent";

type ConsentType = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [consent, setConsent] = useState<ConsentType>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  // Check if user has already given consent
  useEffect(() => {
    const savedConsent = Cookies.get(COOKIE_NAME);
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  // Listen for "openCookieDialog" event from footer button
  useEffect(() => {
    const handleOpenDialog = () => {
      // Load existing consent preferences if available
      const savedConsent = Cookies.get(COOKIE_NAME);
      if (savedConsent) {
        try {
          const parsedConsent = JSON.parse(savedConsent) as ConsentType;
          setConsent(parsedConsent);
        } catch (error) {
          console.error("Failed to parse saved consent:", error);
          // Keep default consent values if parsing fails
        }
      }
      // Open the dialog
      setShowDialog(true);
    };

    window.addEventListener("openCookieDialog", handleOpenDialog);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("openCookieDialog", handleOpenDialog);
    };
  }, []);

  const saveConsent = (values: ConsentType) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(values), { expires: 365 });
    setShowBanner(false);
    setShowDialog(false);
    window.location.reload(); // reload so analytics scripts can load if accepted
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const handleRejectAll = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const handleCustomize = () => {
    setShowDialog(true);
  };

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between z-50 shadow-lg">
          <p className="text-sm mb-2 sm:mb-0">
            We use cookies to enhance your experience and analyze usage. You can choose which cookies we use.
          </p>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={handleRejectAll}>Reject</Button>
            <Button variant="outline" size="sm" onClick={handleCustomize}>Customize</Button>
            <Button variant="default" size="sm" onClick={handleAcceptAll}>Accept</Button>
          </div>
        </div>
      )}

      {/* Preferences Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Select which types of cookies you want to allow. You can change these later in your settings.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mt-3">
            <div className="flex justify-between items-center">
              <span>Essential cookies (required)</span>
              <input type="checkbox" checked disabled />
            </div>
            <div className="flex justify-between items-center">
              <span>Analytics cookies</span>
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Marketing cookies</span>
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
              />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setShowDialog(false)}>Cancel</Button>
            <Button onClick={() => saveConsent(consent)}>Save Preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
