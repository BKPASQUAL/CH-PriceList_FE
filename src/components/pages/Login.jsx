import { TextField } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-96 w-[80%] lg:w-[20%] lg:h-[50%] bg-slate-200 rounded-2xl py-8 px-4">
        <div className="mb-4 text-3xl font-bold flex justify-center ">LogIn</div>
        <div className="space-y-4">
          <TextField
            fullWidth
            size="small"
            label="User Name"
          />
          <TextField
            fullWidth
            size="small"
            label="Password"
          />
          <Button className="w-full">LOG IN</Button>
        </div>
        <div className="text-sm mt-8 flex justify-center">
            Dont Have an account?contact admin
        </div>
      </div>
    </div>
  );
}

export default Login;
