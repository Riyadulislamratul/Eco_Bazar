import { Mail, BadgeCheck, ShieldAlert } from "lucide-react";

import { useState } from "react";
import EditProfileModal from "./EditProfileModal";

import useAuth from "../../hooks/useAuth";

const ProfileCard = () => {
  const { user } = useAuth();
  const [openModal, setOpenModal] =
  useState(false);

  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm transition hover:shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={
            user?.photoURL ||
            "https://ui-avatars.com/api/?name=User&background=16a34a&color=fff"
          }
          alt="Profile"
          className="h-28 w-28 rounded-full border-4 border-green-500 object-cover"
        />

        <h2 className="mt-5 text-2xl font-bold">
          {user?.displayName || "User"}
        </h2>

        <div className="mt-2 flex items-center gap-2 text-gray-500">
          <Mail size={16} />

          <span>{user?.email}</span>
        </div>

        {user?.emailVerified ? (
          <div className="mt-4 flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
            <BadgeCheck size={18} />

            Email Verified
          </div>
        ) : (
          <div className="mt-4 flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-600">
            <ShieldAlert size={18} />

            Email Not Verified
          </div>
        )}

        <button
  onClick={() => setOpenModal(true)}
  className="mt-8 rounded-full bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
>
  Edit Profile
</button>
      </div>
      <EditProfileModal
  open={openModal}
  onClose={() => setOpenModal(false)}
/>
    </div>
  );
};

export default ProfileCard;