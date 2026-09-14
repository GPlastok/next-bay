"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userLogin } from "./actions";

export default function LoginPage() {
    function submitLogin(formData: FormData) {
        userLogin(formData);
    }

    return (<>
        <form action={submitLogin}>
            <Label htmlFor="username">User Name</Label>
            <Input id="username" name="username" required />
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" required />
            <Button type="submit">Login</Button>

        </form>
        <span></span></>
    )
}