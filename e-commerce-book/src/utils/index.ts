import axios from "axios";
// import usePostStore from "@/store/usePostStore";

const API_URL = "http://localhost:8800";

export const API = axios.create({
  baseURL: API_URL,
  responseType: "json",
});

export const apiRequest = async ({ url, token, data, method }:{url:string, token?:string, data:Record<string, any>, method:"GET" | "POST" | "PUT" | "DELETE"}) => {
  try {
    const result = await API(url, {
      method: method || "GET",
      data: data,
      headers: {
        "content-type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return result?.data;
  } catch (error:any) {
    const err = error.response.data;
    console.log(err);
    return { status: err.success, message: err.message };
  }
};


export const handleFileUpload = async (uploadFile: File): Promise<string | null> => {
  if (!uploadFile || uploadFile.type !== "application/pdf") {
    console.log("Only PDF files are allowed.");
    return null;
  }

  const formData = new FormData();
  formData.append("file", uploadFile);
  formData.append("upload_preset", "bookstore");

  try {
    const response = await axios.post<{ secure_url: string }>(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_ID}/auto/upload/`,
      formData
    );
    return response.data.secure_url;
  } catch (error: any) {
    console.error("Error uploading PDF:", error?.response?.data || error.message);
    return null;
  }
};



export const handleImageUpload = async (uploadFile: File): Promise<string | null> => {
  if (!uploadFile || !uploadFile.type.startsWith('image/')) {
    console.log('Only image files are allowed.');
    return null;
  }

  const formData = new FormData();
  formData.append('file', uploadFile);
  formData.append('upload_preset', 'bookstore'); // Replace with your actual upload preset

  try {
    const response = await axios.post<{ secure_url: string }>(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_ID}/image/upload`,
      formData
    );
    return response.data.secure_url;
  } catch (error: any) {
    console.error('Error uploading image:', error?.response?.data || error.message);
    return null;
  }
};


