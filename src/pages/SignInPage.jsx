import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { Home, ChevronRight, Eye, EyeOff } from "lucide-react";

// import your banner image
// import Banner from "../assets/breadcrumb.jpg";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { login, logout } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const result = await login(email, password);

      // Check email verification
      if (!result.user.emailVerified) {
        await logout();

        setError(
          "Please verify your email before signing in. Check your inbox or spam folder.",
        );

        return;
      }

      navigate(from, { replace: true });
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;

        case "auth/user-not-found":
          setError("No account found with this email.");
          break;

        case "auth/wrong-password":
          setError("Incorrect password.");
          break;

        case "auth/too-many-requests":
          setError("Too many login attempts. Please try again later.");
          break;

        default:
          setError("Something went wrong. Please try again.");
      }
    }
  };

  const from = location.state?.from?.pathname || "/";

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
        <div className="bg-black/40 h-full">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="flex items-center gap-2 text-sm">
              <Home size={15} className="text-white" />

              <ChevronRight size={14} className="text-gray-300" />

              <span className="text-gray-200">Account</span>

              <ChevronRight size={14} className="text-gray-300" />

              <span className="text-green-500 font-medium">Login</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Login ================= */}

      <section className="py-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="rounded-lg bg-white shadow-xl p-10">
            <h2 className="text-4xl font-bold text-center mb-8">Sign In</h2>

            <form onSubmit={handleLogin} className="space-y-5">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-4 py-3 outline-none focus:border-green-500"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-md px-4 py-3 pr-12 outline-none focus:border-green-500"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input type="checkbox" className="accent-green-600" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-gray-500 hover:text-green-600"
                >
                  Forgot Password?
                </button>
              </div>
              {error && (
                <div className="rounded-md border border-red-200 bg-red-50 p-3">
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}
              <button
                type="submit"
                className="w-full rounded-full bg-green-600 py-3 font-semibold text-white hover:bg-green-700 duration-300"
              >
                Login
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?
              <Link
                to="/create-account"
                className="ml-1 font-semibold hover:text-green-600"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ================= Newsletter ================= */}

      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">Subscribe our Newsletter</h2>

              <p className="text-gray-500 mt-3 max-w-md">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex flex-1 w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 rounded-l-full px-6 py-4 border outline-none"
                />

                <button className="bg-green-600 text-white px-10 rounded-r-full font-semibold hover:bg-green-700">
                  Subscribe
                </button>
              </div>

              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center"></button>

                <button className="hover:text-green-600"></button>

                <button className="hover:text-green-600"></button>

                <button className="hover:text-green-600"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
