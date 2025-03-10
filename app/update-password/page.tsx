"use client";

import { Suspense } from "react";
import { updatePassword } from "@/app/auth/actions";
import { useSearchParams } from "next/navigation";

function UpdatePasswordForm() {
  const searchParams = useSearchParams();

  return (
    <main className="grow flex justify-center items-center">
      <form>
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box shadow-xl">
          <legend className="fieldset-legend">Update Password</legend>
          <label htmlFor="password" className="fieldset-label">
            New Password
          </label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <input type="hidden" name="code" value={searchParams.get("code") ?? ""} />
          <button formAction={updatePassword} className="btn btn-primary mt-4">
            Update password
          </button>
        </fieldset>
      </form>
    </main>
  );
}

export default function UpdatePassword() {
  return (
    <Suspense fallback="Loading...">
      <UpdatePasswordForm />
    </Suspense>
  );
}
