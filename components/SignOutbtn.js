'use-client';


import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function SignOutbtn() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });

    router.push("/login");
  };
  return (
    <button
      onClick={handleLogout}
      className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0"
    >
      Logout
    </button>
  );
}
