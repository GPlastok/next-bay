import { cookies } from "next/headers";
import Link from "next/link";
import LogoutLink from "./Logout";

export default async function LoginLogout() {
  const cookie = await cookies();
  const isAuthenticated = cookie.get("session_token");

  return (
    <>
      {!isAuthenticated ? (
        <div className="flex gap-5">
          <Link href={"/Auth/login"}>login</Link>
          <Link href={"/register"}>register</Link>
        </div>
      ) : (
        <div className="flex gap-5">
          <LogoutLink />
        </div>
      )}
    </>
  );
}
