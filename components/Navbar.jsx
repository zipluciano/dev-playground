"use client";

import { logout } from "@/app/auth/actions";

export default function NavBar() {
  return (
    <nav className="navbar shadow-xl">
      <div className="navbar-start gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-test-tube-diagonal"
        >
          <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
          <path d="m16 2 6 6" />
          <path d="M12 16H4" />
        </svg>
        <p className="uppercase">Dev Playground</p>
      </div>
      <div className="navbar-end">
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
