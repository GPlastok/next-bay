"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userRegister } from "@/app/auth/login/actions";

//TODO: using react hook form to display error
export default function LoginPage() {
  async function createUSer(formData: FormData) {
    await userRegister(formData);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        className="max-w-md w-full mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 space-y-4"
        action={createUSer}
      >
        <Label htmlFor="username">User Name</Label>
        <Input id="username" name="username" required />
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required />
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
}
