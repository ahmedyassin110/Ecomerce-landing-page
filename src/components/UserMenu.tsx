import React, { useEffect, useRef, useState } from "react";

interface UserMenuProps {
  name: string;
  onProfile?: () => void;
  onLogout?: () => void;
}

export default function UserMenu({ name, onProfile, onLogout }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return;
      if (e.target instanceof Node && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleLogout = () => {
    setOpen(false);
    if (onLogout) {
      onLogout();
      return;
    }

    // Default logout behavior: clear auth localStorage and reload
    localStorage.setItem("isAuth", "false");
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  const handleProfile = () => {
    setOpen(false);
    if (onProfile) onProfile();
  };

  const openMenu = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const closeMenu = () => {
    // small delay so hover -> click transitions feel natural
    timeoutRef.current = window.setTimeout(() => setOpen(false), 150);
  };

  const initials = (name || "")
    .split(" ")
    .map((p) => p[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase() || "U";

  const ariaExpanded: "true" | "false" = open ? "true" : "false";
  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="menu"
        aria-expanded={ariaExpanded}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
          }
        }}
        className="px-2 py-1 rounded-md border border-border bg-card text-sm font-medium text-foreground hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
          {initials}
        </div>
        <span className="truncate">{name}</span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="User menu"
          className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-card shadow-lg animate-slide-up z-50"
        >
          <div className="py-1">
            <button
              type="button"
              onClick={handleProfile}
              className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-muted-foreground"
              role="menuitem"
            >
              Profile
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-muted-foreground"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
