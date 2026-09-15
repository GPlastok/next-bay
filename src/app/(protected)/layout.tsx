import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function ProtectedLayout({ children }: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    console.log(cookieStore);
    const sessionToken = cookieStore.get('session_token');
    if (!sessionToken)
        redirect("/Auth/login");
    return <>{children}</>;
}