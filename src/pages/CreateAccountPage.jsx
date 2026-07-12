import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Eye, EyeOff } from "lucide-react";
import useAuth from "../hooks/useAuth";

import { useNavigate } from "react-router-dom";

// import Banner from "../assets/banner/account-banner.png";

const CreateAccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const { createUser, updateUserProfile, verifyEmail } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [acceptTerms, setAcceptTerms] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim()) {
      return setError("Please enter your full name.");
    }

    if (!email.trim()) {
      return setError("Please enter your email.");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    if (!acceptTerms) {
      return setError("Please accept the Terms & Conditions.");
    }

    try {
      try {
        const result = await createUser(email, password);

        console.log(result.user);

        await updateUserProfile({
          displayName: name,
        });

        await verifyEmail();

        console.log("Verification email sent!");

        navigate("/signin");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-white">
      {/* ================= Banner ================= */}

      <section
        className="h-44 bg-cover bg-center"
        style={{
          backgroundImage:
            // `url(${Banner})`
            "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600')",
        }}
      >
        <div className="h-full bg-black/40">
          <div className="container mx-auto flex h-full items-center px-6">
            <div className="flex items-center gap-2 text-sm">
              <Home size={15} className="text-white" />

              <ChevronRight size={14} className="text-gray-300" />

              <span className="text-gray-200">Account</span>

              <ChevronRight size={14} className="text-gray-300" />

              <span className="font-medium text-green-500">Create Account</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Create Account ================= */}

      <section className="px-4 py-20">
        <div className="mx-auto max-w-md">
          <div className="rounded-lg bg-white p-10 shadow-xl">
            <h2 className="mb-8 text-center text-4xl font-bold">
              Create Account
            </h2>

            <form onSubmit={handleCreateAccount} className="space-y-5">
              {/* Full Name */}

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border px-4 py-3 outline-none transition focus:border-green-500"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border px-4 py-3 outline-none transition focus:border-green-500"
              />

              {/* Password */}

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border px-4 py-3 pr-12 outline-none transition focus:border-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Confirm Password */}

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-md border px-4 py-3 pr-12 outline-none transition focus:border-green-500"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {/* Terms */}

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="accent-green-600"
                />

                <span>I accept all Terms & Conditions</span>
              </label>

              {/* Button */}
              {error && <p className="text-sm text-red-500">{error}</p>}

              {success && <p className="text-sm text-green-600">{success}</p>}

              <button
                type="submit"
                className="w-full rounded-full bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Create Account
              </button>
            </form>

            {/* Footer */}

            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?
              <Link
                to="/signin"
                className="ml-1 font-semibold hover:text-green-600"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateAccountPage;
