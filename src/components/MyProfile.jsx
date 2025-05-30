import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import { useAuth } from "../context/authContext";
import { notifySuccess } from "../utils/toast";
import { useRouter } from "next/router";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const MyProfile = () => {
  const { user , setUser } = useAuth();
  const { register, handleSubmit, setValue } = useForm();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const imageUrl = user?.image ? BASE_URL + user.image : "/assets/images/user.png";
  const [loading , setLoading] = useState(false);

  const router = useRouter();

  // Pre-fill form with user data
  useEffect(() => {
    if (user) {
      Object.keys(user).forEach((key) => {
        setValue(key, user[key]);
      });
    }
  }, [user]);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  // Upload image
  const uploadImage = async () => {
    if (!file) return null;
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post(`${BASE_URL}/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data.imageUrl;
    } catch (error) {
      setMessage("Image upload failed." + error);
      return null;
    }
  };

  // Update profile
  const onSubmit = async (data) => {
    setLoading(true)
    const uploadedImageUrl = await uploadImage();
    const updatedData = { ...data, image: uploadedImageUrl || imageUrl };
    try {
      const res = await axios.put(`${BASE_URL}/users/update-profile/${user?.id}`, updatedData);
      if (res.status === 200) {
        const updatedUser = res.data.updatedUser;
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser); // if you're using context
        notifySuccess("Profile updated successfully!");
        router.push("/dashboard");
      }
    } catch (error) {
      setMessage("Profile update failed." + error);
    }finally {
      setLoading(false)
    }
  };
  if(loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-3">
      <div className="w-full mx-auto rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
          <div className="lg:col-span-4 space-y-2">
            <form onSubmit={handleSubmit(onSubmit)} className="text-white space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1 text-[#ee2e2e]">First Name</label>
                  <input {...register("name")} className="w-full p-1.5 rounded-md bg-[#444444] text-white border-gray-600 focus:border-[#ee2e2e] focus:outline-none" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-[#ee2e2e]">Contact Number</label>
                  <input {...register("phone")} className="w-full p-1.5 rounded-md bg-[#444444] text-white border-gray-600 focus:border-[#ee2e2e] focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#ee2e2e]">Address</label>
                <input {...register("address")} className="w-full p-1.5 rounded-md bg-[#444444] text-white border-gray-600 focus:border-[#ee2e2e] focus:outline-none" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#ee2e2e]">Email</label>
                <input {...register("email")} className="w-full p-1.5 rounded-md bg-[#444444] text-white border-gray-600 focus:border-[#ee2e2e] focus:outline-none" disabled />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#ee2e2e]">Profile Image</label>
                <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-1.5 rounded-md bg-[#444444] text-white border-gray-600" />
                {preview && <Image className="h-[200px] w-[200px] mt-2" height={1000} src={preview} alt="Preview" width={1000} />}
              </div>
              <button type="submit" className="px-4 py-1 rounded-md bg-[#ee2e2e] text-white hover:bg-red-700 transition">
                Update Profile
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center text-white space-y-2">
            <div className="w-[200px] h-[200px] overflow-hidden rounded-xl">
              <Image height={1000} width={1000} src={preview || imageUrl} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-white">{message}</p>
    </div>
  );
};

export default MyProfile;
