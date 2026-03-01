import { AuthProvider } from "@/lib/auth-context";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const route = useRouter();
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      route.replace("/auth");
    }
  });
  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RouteGuard>
    </AuthProvider>
  );
}
