import { User } from "@/types/store";

export function useAuth() {
  const demoUser: User = {
    name: "Demo User",
    email: "demo@example.com",
  };

  return {
    isAuth: true,
    currentUser: demoUser,
    signUp: () => ({ success: true }),
    login: () => ({ success: true }),
    logout: () => {},
  } as const;
}
