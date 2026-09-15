import { logout } from "@/app/lib/actions/authActions";

export default function LogoutLink() {
  return (
    <form action={logout} className="inline">
      <button
        type="submit"
        className="text-sm text-black-600 hover:underline cursor-pointer bg-transparent border-0 p-0"
      >
        Logout{" "}
      </button>
    </form>
  );
}
