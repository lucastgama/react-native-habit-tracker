import { AuthProvider } from "@/lib/auth-context";
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth-context";

function RouteGuard() {
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoadingUser) return;

    const inAuthGroup = segments[0] === "auth";

    if (!user && !inAuthGroup && !isLoadingUser) {
      router.replace("/auth");
    } else if (user && inAuthGroup && !isLoadingUser) {
      router.replace("/");
    }
  }, [user, isLoadingUser, segments]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard />
    </AuthProvider>
  );
}
