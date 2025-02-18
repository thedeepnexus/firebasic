import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    // align children components to the center
  return <div
  className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >{children}</div>;
}
