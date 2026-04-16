import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/types/auth/auth.types";

const baseUrl = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

function encodeMockJwt(payload: Record<string, unknown>): string {
  const header = btoa(JSON.stringify({ alg: "none", typ: "JWT" }));
  const body = btoa(JSON.stringify(payload));
  return `${header}.${body}.signature`;
}

export async function loginWithCredentials(
  body: LoginRequest,
): Promise<LoginResponse> {
  if (!baseUrl && import.meta.env.DEV) {
    await new Promise((r) => setTimeout(r, 300));
    return {
      token: encodeMockJwt({
        sub: body.email,
        iat: Math.floor(Date.now() / 1000),
      }),
    };
  }

  const url = `${baseUrl}/auth/login`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Login failed");
  }

  return (await response.json()) as LoginResponse;
}

export async function registerWithCredentials(
  body: RegisterRequest,
): Promise<RegisterResponse> {
  if (!baseUrl && import.meta.env.DEV) {
    await new Promise((r) => setTimeout(r, 300));
    return {
      token: encodeMockJwt({
        sub: body.email,
        iat: Math.floor(Date.now() / 1000),
      }),
    };
  }

  const url = `${baseUrl}/auth/register`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Registration failed");
  }

  return (await response.json()) as RegisterResponse;
}
