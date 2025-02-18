"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "@/lib/firebase/clientApp";
export default function GoogleLoginButton() {
  const auth = useAuth();
  const router = useRouter();
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={async () => {
          // const provider = new GoogleAuthProvider();
          // await signInWithPopup(auth, provider);
          await auth?.loginWithGoogle();
          router.push("/");
        }}
      >
        Google Login Button
      </button>
    </div>
  );
}
