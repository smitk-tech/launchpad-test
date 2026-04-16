import { useAuthStore } from "@/store/auth.store";

export function HomePage() {
  const token = useAuthStore((s) => s.token);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8">
      <p className="text-lg text-foreground">Signed in</p>
      <p className="max-w-xl break-all text-center text-sm text-muted-foreground">
        JWT stored: {token ? `${token.slice(0, 48)}…` : "none"}
      </p>
    </div>
  );
}
