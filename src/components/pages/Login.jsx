import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/dashbourd")
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="h-auto w-[85%] lg:w-[20%] bg-white rounded-2xl shadow-lg py-12 px-6">
        <div className="mb-8 text-3xl font-bold text-center text-gray-800">
          Welcome Back!
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* User Name Field */}
          <div>
            <TextField
              fullWidth
              id="userName"
              size="small"
              label="User Name"
              placeholder="Enter your username"
              variant="outlined"
              className="bg-gray-50"
              {...register("userName", { required: "User Name is required" })}
            />
            {errors.userName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userName.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <TextField
              fullWidth
              size="small"
              label="Password"
              placeholder="Enter your password"
              variant="outlined"
              type="password"
              className="bg-gray-50"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            className="w-full bg-black hover:bg-slate-500 text-white font-semibold py-2 rounded-lg"
            type="submit"
          >
            LOG IN
          </Button>
        </form>

        <div className="text-sm mt-8 text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 underline">
            Contact Admin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
