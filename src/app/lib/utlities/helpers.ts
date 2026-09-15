import { cookies } from "next/headers";

export async function fetchAPI(url: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;
  const headers = new Headers();
  if (token) headers.set("Authorization", `Bearer${token}`);
  return fetch(`${url}`, {
    ...options,
    headers,
  });
}