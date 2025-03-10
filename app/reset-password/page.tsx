import { resetPassword } from "@/app/auth/actions";

export default function ResetPassword() {
  return (
    <main className="grow flex justify-center items-center">
      <form>
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box shadow-xl">
          <legend className="fieldset-legend">Reset Password</legend>
          <label htmlFor="email" className="fieldset-label">
            Email
          </label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <button formAction={resetPassword} className="btn btn-primary mt-4">
            Send reset password email
          </button>
        </fieldset>
      </form>
    </main>
  );
}
