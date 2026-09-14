import { cookies } from "next/headers";
import { json } from "stream/consumers";
const api_url = process.env.API_URL;

export default async function Login(username: string, password: string) {
    const response = (await fetch(`${api_url}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        }),
    }));

    const data = await response.json();

    if (response.status == 201) {
        const cookieStore = await cookies();
        cookieStore.set("session_token", data.access_token, {
            httpOnly: true,
            /*
             secure: process.env.NODE_ENV === "production",  // Requires HTTPS in production
            sameSite: "lax", // Protects against CSRF attacks path: '/', // Available across all routes 
            maxAge: 60  60  24 * 7, // Cookie lifespan (e.g., 7 days in seconds*/
        });
        return true;
    }
    return false;
}