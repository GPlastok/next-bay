"use server";

import { login, createUser } from "@/app/lib/services/authService";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";

export async function userLogin(formData: FormData) {
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();

  if (username && password) {
    const isLogin = await login(username, password);
    if (isLogin) {
      redirect("/auctions");
    } else {
      throw Error("Username or password isn't correct");
    }
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session_token");
  if (cookieStore.get("session_token")) {
    console.log(" logout succussfully");
    redirect("/auctions");
  } else {
    console.log(" hasn't been logout ");
  }
}

export async function userRegister(formData: FormData) {
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();
  if (!username || !password) {
    throw Error("You need to fill all the fields");
  }
  const user = await createUser(username, password);
  if (user) {
    redirect("/Auth/login");
  } else {
    throw Error("User hasn't been created");
  }
}
