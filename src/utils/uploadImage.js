import axios from "axios";

const imageUpload = async (image) => {
  const formData = new FormData();

  formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_API_KEY
  }`;

  const { data } = await axios.post(
    url,
    formData
  );

  return data.data.display_url;
};

export default imageUpload;