import { login } from "@/app/auth/actions";
import Link from "next/link";

export default function Login() {
  return (
    <main className="grow flex justify-center items-center">
      <form>
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box shadow-xl">
          <legend className="fieldset-legend">Login</legend>
          <label htmlFor="email" className="fieldset-label">
            Email
          </label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label htmlFor="password" className="fieldset-label">
            Password
          </label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <Link href="/reset-password" className="link">
            Forgot my password
          </Link>
          <button formAction={login} className="btn btn-primary mt-4">
            Login
          </button>
          <Link href="/signup" className="link">
            Create an account
          </Link>
        </fieldset>
      </form>
    </main>
  );
}
