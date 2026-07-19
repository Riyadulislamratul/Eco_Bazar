import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

const EditProfileModal = ({
  open,
  onClose,
}) => {
  const {
    user,
    updateUserProfile,
  } = useAuth();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });

      await user.reload();

      toast.success(
        "Profile updated successfully!"
      );

      onClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">
            Edit Profile
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >
          <div>
            <label className="mb-2 block font-medium">
              Display Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Photo URL
            </label>

            <input
              type="text"
              value={photo}
              onChange={(e) =>
                setPhoto(e.target.value)
              }
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          <button
            disabled={loading}
            className="w-full rounded-full bg-green-600 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-60"
          >
            {loading
              ? "Saving..."
              : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;