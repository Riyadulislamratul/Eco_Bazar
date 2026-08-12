import { useState } from "react";
import {
  Lock,
  MailCheck,
  Trash2,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import toast from "react-hot-toast";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import useAuth from "../hooks/useAuth";

const Settings = () => {
  const {
    user,
    resetPassword,
    verifyEmail,
    logout,
  } = useAuth();

  const [sendingVerification, setSendingVerification] =
    useState(false);

  const [sendingReset, setSendingReset] =
    useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] =
    useState(false);

  // -----------------------------
  // Resend verification email
  // -----------------------------

  const handleVerification = async () => {
    if (!user?.email) return;

    try {
      setSendingVerification(true);

      await verifyEmail();

      toast.success(
        "Verification email sent. Please check your inbox or spam folder."
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSendingVerification(false);
    }
  };

  // -----------------------------
  // Reset password
  // -----------------------------

  const handlePasswordReset = async () => {
    if (!user?.email) return;

    try {
      setSendingReset(true);

      await resetPassword(user.email);

      toast.success(
        "Password reset email sent. Check your inbox."
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSendingReset(false);
    }
  };

  // -----------------------------
  // Delete account
  // -----------------------------

  const handleDeleteAccount = async () => {
    /*
      Firebase may require recent authentication
      before deleting an account.

      We'll add proper re-authentication in the
      next step if Firebase asks for it.
    */

    try {
      if (!user) return;

      await user.delete();

      toast.success("Your account has been deleted.");

      await logout();
    } catch (error) {
      if (
        error.code ===
        "auth/requires-recent-login"
      ) {
        toast.error(
          "Please sign in again before deleting your account."
        );
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Heading */}

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Account Settings
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your account and security settings.
          </p>
        </div>

        {/* Account Information */}

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck
              className="text-green-600"
              size={24}
            />

            <div>
              <h2 className="text-xl font-bold">
                Account Information
              </h2>

              <p className="text-sm text-gray-500">
                Your Firebase account information
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Email */}

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">
                Email Address
              </p>

              <p className="mt-1 font-medium text-gray-900">
                {user?.email}
              </p>
            </div>

            {/* Verification */}

            <div className="flex flex-col justify-between gap-4 rounded-lg bg-gray-50 p-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-gray-500">
                  Email Verification
                </p>

                {user?.emailVerified ? (
                  <p className="mt-1 flex items-center gap-2 font-medium text-green-600">
                    <MailCheck size={18} />
                    Email Verified
                  </p>
                ) : (
                  <p className="mt-1 flex items-center gap-2 font-medium text-orange-600">
                    <AlertTriangle size={18} />
                    Email Not Verified
                  </p>
                )}
              </div>

              {!user?.emailVerified && (
                <button
                  onClick={handleVerification}
                  disabled={sendingVerification}
                  className="rounded-full bg-green-600 px-5 py-2.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sendingVerification
                    ? "Sending..."
                    : "Verify Email"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Password */}

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Lock
              className="text-green-600"
              size={24}
            />

            <div>
              <h2 className="text-xl font-bold">
                Password
              </h2>

              <p className="text-sm text-gray-500">
                Keep your account secure.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-lg bg-gray-50 p-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-medium">
                Reset your password
              </p>

              <p className="mt-1 text-sm text-gray-500">
                We'll send a password reset link to{" "}
                {user?.email}.
              </p>
            </div>

            <button
              onClick={handlePasswordReset}
              disabled={sendingReset}
              className="flex items-center justify-center gap-2 rounded-full border border-green-600 px-5 py-2.5 font-semibold text-green-600 transition hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Lock size={17} />

              {sendingReset
                ? "Sending..."
                : "Reset Password"}
            </button>
          </div>
        </div>

        {/* Danger Zone */}

        <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Trash2
              className="text-red-600"
              size={24}
            />

            <div>
              <h2 className="text-xl font-bold text-red-600">
                Danger Zone
              </h2>

              <p className="text-sm text-gray-500">
                Permanently delete your EcoBazar account.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-red-50 p-4">
            <p className="font-medium text-gray-900">
              Delete Account
            </p>

            <p className="mt-1 text-sm text-gray-600">
              This action cannot be undone. Your Firebase
              account will be permanently deleted.
            </p>

            {!showDeleteConfirm ? (
              <button
                onClick={() =>
                  setShowDeleteConfirm(true)
                }
                className="mt-4 rounded-full bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700"
              >
                Delete My Account
              </button>
            ) : (
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={handleDeleteAccount}
                  className="rounded-full bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700"
                >
                  Yes, Delete Account
                </button>

                <button
                  onClick={() =>
                    setShowDeleteConfirm(false)
                  }
                  className="rounded-full border border-gray-300 bg-white px-5 py-2.5 font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;