import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { resetPassword } = useAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      await resetPassword(email);

      setSuccess(
        "Password reset email sent successfully. Please check your inbox or spam folder.",
      );

      setEmail("");
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;

        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        default:
          setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="bg-white">
      {/* ================= Banner ================= */}

      <section
        className="h-44 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600')",
        }}
      >
        <div className="h-full bg-black/40">
          <div className="mx-auto flex h-full max-w-7xl items-center px-6">
            <div className="flex items-center gap-2 text-sm">
              <Home size={15} className="text-white" />

              <ChevronRight size={14} className="text-gray-300" />

              <span className="text-gray-200">Account</span>

              <ChevronRight size={14} className="text-gray-300" />

              <span className="font-medium text-green-500">
                Forgot Password
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Form ================= */}

      <section className="px-4 py-20">
        <div className="mx-auto max-w-md rounded-lg bg-white p-10 shadow-xl">
          <h2 className="mb-3 text-center text-4xl font-bold">
            Forgot Password
          </h2>

          <p className="mb-8 text-center text-gray-500">
            Enter your email address and we'll send you a password reset link.
          </p>

          <form onSubmit={handleResetPassword} className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border px-4 py-3 outline-none focus:border-green-500"
            />
            {error && (
              <div className="rounded-md border border-red-200 bg-red-50 p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {success && (
              <div className="rounded-md border border-green-200 bg-green-50 p-3">
                <p className="text-sm text-green-600">{success}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Send Reset Link
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Remember your password?
            <Link
              to="/signin"
              className="ml-1 font-semibold hover:text-green-600"
            >
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
