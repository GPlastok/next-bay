import { cookies } from "next/headers";

// COMMENT, NOTE TODO: we could find the user name from the token --> decode base64
export async function fetchAPI(url: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;
  const headers = new Headers(options.headers);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return fetch(url, {
    ...options,
    headers,
  });
}
