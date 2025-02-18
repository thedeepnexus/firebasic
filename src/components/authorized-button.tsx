import { useAuth } from "@/hooks/useAuth";

export default function AuthorizedButton() {
  const auth = useAuth();
  const currentUser = auth.currentUser;
  return (
    <div className="flex flex-1 items-center justify-end gap-x-6">
      <a
        href="/login"
        // onClick={() => {}}
        type="button"
        className="hidden text-sm/6 font-semibold text-gray-900 lg:block"
      >
        {currentUser?.displayName}
        {/* uid, email, ... */}
      </a>
      <a
        href="/register"
        onClick={() => {
          auth.logout();
        }}
        type="button"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign out
      </a>
    </div>
  );
}
