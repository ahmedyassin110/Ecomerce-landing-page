import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Page } from "@/types/store";

interface SignUpPageProps {
  onNavigate: (page: Page) => void;
  onSignUp: (name: string, email: string, password: string) => boolean;
}

export function SignUpPage({ onNavigate, onSignUp }: SignUpPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    setError(null);
    return true;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ok = onSignUp(name, email, password);
    if (!ok) {
      setError("Unable to create account. Email may already be used.");
      toast.error("Unable to create account");
    } else {
      toast.success("Account created");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-6 animate-slide-up">Create an account</h2>

      <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Full name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Password</label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="flex items-center justify-between gap-4">
            <Button type="submit" className="w-full">
              Create account
            </Button>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            Already have an account?{' '}
            <button type="button" onClick={() => onNavigate('login')} className="text-primary underline-offset-4 hover:underline">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
