"use client";
import { useState, useEffect } from "react";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@acme.com",
    company: "Acme Corp",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-heading font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and theme.</p>
      </div>

      <div className="space-y-8">
        {/* Profile Settings */}
        <div className="glass-card p-8 border-white/10">
          <h2 className="text-xl font-heading font-bold mb-6">Profile Details</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
              <input 
                type="email" 
                value={formData.email}
                disabled
                className="w-full bg-black/30 border border-white/5 rounded-xl px-4 py-3 text-muted-foreground cursor-not-allowed" 
              />
              <p className="text-xs text-muted-foreground mt-2">Email address cannot be changed directly. Contact support if needed.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Company Name</label>
              <input 
                type="text" 
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" 
              />
            </div>
          </div>
          <div className="mt-8">
            <button onClick={handleSave} className="btn-primary px-8 py-3 flex items-center gap-2">
              <Save size={18} /> {saved ? "Saved!" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
