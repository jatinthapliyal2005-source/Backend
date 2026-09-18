import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submitHandler = async (data) => {
    try {
      const formData = new FormData();

      formData.append("username", data.username);
      formData.append("email", data.email);
    for(let i=0;i<data.files.length;i++){
      formData.append("files",data.files[i])
    }
  
    await axios.post(
        "http://localhost:3000/user/create",
        formData
      );

      

    
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6">
          Upload File
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Username
          </label>

          <input
            {...register("username", {
              required: "Name is required",
              minLength: {
                value: 6,
                message: "Name should be at least 6 characters",
              },
            })}
            type="text"
            placeholder="Enter username"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
          />

          {errors.username && (
            <p className="text-red-600 font-semibold">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            {...register("email", {
              required: "Invalid Email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Wrong email",
              },
            })}
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
          />

          {errors.email && (
            <p className="text-red-600 font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* File */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Upload File
          </label>

          <input
            {...register("files", {
              required: "Invalid File",
            })}
            multiple
            type="file"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />

          {errors.files && (
            <p className="text-red-600 font-semibold">
              {errors.files.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;