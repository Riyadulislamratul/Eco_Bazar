import { useState } from "react";
import {
  Lock,
  MailCheck,
  Trash2,
  ShieldCheck,
  AlertTriangle,
  X,
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
    reauthenticateUser,
    reauthenticateGoogle,
  } = useAuth();
  const [sendingVerification, setSendingVerification] = useState(false);

  const [sendingReset, setSendingReset] = useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [deletePassword, setDeletePassword] = useState("");

  const [deleting, setDeleting] = useState(false);

  // -----------------------------
  // Resend verification email
  // -----------------------------

  const handleVerification = async () => {
    if (!user?.email) return;

    try {
      setSendingVerification(true);

      await verifyEmail();

      toast.success(
        "Verification email sent. Please check your inbox or spam folder.",
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

      toast.success("Password reset email sent. Check your inbox.");
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
    if (!user) return;

    try {
      setDeleting(true);

      const isGoogleUser = user.providerData.some(
        (provider) => provider.providerId === "google.com",
      );

      if (isGoogleUser) {
        await reauthenticateGoogle();
      } else {
        await reauthenticateUser(deletePassword);
      }

      await user.delete();

      toast.success("Your account has been deleted.");

      setShowDeleteModal(false);

      await logout();
    } catch (error) {
      console.error(error);

      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        toast.error("Incorrect password.");
      } else if (error.code === "auth/popup-closed-by-user") {
        toast.error("Google verification was cancelled.");
      } else if (error.code === "auth/requires-recent-login") {
        toast.error("Please sign in again and try again.");
      } else {
        toast.error(error.message);
      }
    } finally {
      setDeleting(false);
    }
  };
  const isGoogleUser = user?.providerData?.some(
    (provider) => provider.providerId === "google.com",
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Heading */}

        <div>
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>

          <p className="mt-2 text-gray-500">
            Manage your account and security settings.
          </p>
        </div>

        {/* Account Information */}

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={24} />

            <div>
              <h2 className="text-xl font-bold">Account Information</h2>

              <p className="text-sm text-gray-500">
                Your Firebase account information
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Email */}

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Email Address</p>

              <p className="mt-1 font-medium text-gray-900">{user?.email}</p>
            </div>

            {/* Verification */}

            <div className="flex flex-col justify-between gap-4 rounded-lg bg-gray-50 p-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-gray-500">Email Verification</p>

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
                  {sendingVerification ? "Sending..." : "Verify Email"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Password */}

        {isGoogleUser ? (
          <div className="rounded-lg bg-blue-50 p-4">
            <p className="text-sm text-blue-700">
              You signed in with Google. Click "Delete Account" to verify your
              Google account before deleting your EcoBazar account.
            </p>
          </div>
        ) : (
          <div>
            <label className="mb-2 block text-sm font-medium">
              Confirm your password
            </label>

            <input
              type="password"
              value={deletePassword}
              onChange={(e) => setDeletePassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-red-500"
            />
          </div>
        )}

        {/* Danger Zone */}

        <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <Trash2 className="text-red-600" size={24} />

            <div>
              <h2 className="text-xl font-bold text-red-600">Danger Zone</h2>

              <p className="text-sm text-gray-500">
                Permanently delete your EcoBazar account.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-red-50 p-4">
            <p className="font-medium text-gray-900">Delete Account</p>

            <p className="mt-1 text-sm text-gray-600">
              This action cannot be undone. Your Firebase account will be
              permanently deleted.
            </p>

            {!showDeleteConfirm ? (
              <button
                onClick={() => setShowDeleteModal(true)}
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
                  onClick={() => setShowDeleteConfirm(false)}
                  className="rounded-full border border-gray-300 bg-white px-5 py-2.5 font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
            {/* Header */}

            <div className="flex items-center justify-between border-b p-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Delete Account
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  This action cannot be undone.
                </p>
              </div>

              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeletePassword("");
                }}
                className="rounded-full p-2 transition hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}

            <div className="space-y-5 p-6">
              <div className="rounded-lg bg-red-50 p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="shrink-0 text-red-600" size={20} />

                  <p className="text-sm text-red-700">
                    Your EcoBazar account will be permanently deleted. This
                    cannot be undone.
                  </p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Confirm your password
                </label>

                <input
                  type="password"
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              {/* Buttons */}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowDeleteModal(false);
                    setDeletePassword("");
                  }}
                  className="flex-1 rounded-full border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleDeleteAccount}
                  disabled={deleting || (!isGoogleUser && !deletePassword)}
                  className="flex-1 rounded-full bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {deleting ? "Deleting..." : "Delete Account"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Settings;
