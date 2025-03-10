import { signup } from "@/app/auth/actions";

export default function SignUp() {
  return (
    <main className="grow flex justify-center items-center">
      <form>
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box shadow-xl">
          <legend className="fieldset-legend">Sign Up</legend>
          <label htmlFor="email" className="fieldset-label">
            Email
          </label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label htmlFor="password" className="fieldset-label">
            Password
          </label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <button formAction={signup} className="btn btn-primary mt-4">
            Sign Up
          </button>
        </fieldset>
      </form>
    </main>
  );
}
