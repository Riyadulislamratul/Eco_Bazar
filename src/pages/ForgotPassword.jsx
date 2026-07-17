import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

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

              <ChevronRight
                size={14}
                className="text-gray-300"
              />

              <span className="text-gray-200">
                Account
              </span>

              <ChevronRight
                size={14}
                className="text-gray-300"
              />

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
            Enter your email address and we'll send
            you a password reset link.
          </p>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="w-full rounded-md border px-4 py-3 outline-none focus:border-green-500"
            />

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