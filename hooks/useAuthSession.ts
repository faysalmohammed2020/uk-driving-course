// hooks/useAuthSession.ts
import { useState, useEffect } from "react";

export const useAuthSession = () => {
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    // Retrieve session data from localStorage or cookies (as per your app's logic)
    const sessionData = localStorage.getItem("authSession"); // Replace with BetterAuth's session retrieval
    if (sessionData) {
      setSession(JSON.parse(sessionData));
    }
  }, []);

  const signOut = () => {
    // Handle sign out logic
    localStorage.removeItem("authSession"); // Adjust based on your auth method
    setSession(null);
  };

  return {
    session,
    status: session ? "authenticated" : "unauthenticated",
    signOut,
  };
};
