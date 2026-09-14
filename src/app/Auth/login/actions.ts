"use server";

import Login from "@/app/lib/services/authService";
import { redirect } from "next/navigation";

export async function userLogin(formData: FormData) {
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();

    if (username && password) {
        const isLogin = await Login(username, password);
        if (isLogin) {
            redirect('/auctions');
        }


    }
}