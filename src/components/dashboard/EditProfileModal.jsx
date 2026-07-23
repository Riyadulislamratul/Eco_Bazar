import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";
import imageUpload from "../../utils/uploadImage";

const EditProfileModal = ({ open, onClose }) => {
  const { user, updateUserProfile, refreshUser } = useAuth();

  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPreview(user?.photoURL || "");
    }
  }, [user]);

  if (!open) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let photoURL = user.photoURL;

      if (selectedImage) {
        photoURL = await imageUpload(selectedImage);
      }

      await updateUserProfile({
        displayName: name,
        photoURL,
      });
      await refreshUser();

      toast.success("Profile updated successfully!");

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
          <h2 className="text-xl font-bold">Edit Profile</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label className="mb-2 block font-medium">Display Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          <div className="space-y-4">
            <label className="font-medium">Profile Picture</label>

            <div className="flex flex-col items-center gap-4">
              <img
                src={preview || "https://ui-avatars.com/api/?name=User"}
                alt="Preview"
                className="h-28 w-28 rounded-full border-4 border-green-500 object-cover"
              />

              <label className="cursor-pointer rounded-full bg-green-600 px-6 py-2 text-white transition hover:bg-green-700">
                Choose Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full rounded-full bg-green-600 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
