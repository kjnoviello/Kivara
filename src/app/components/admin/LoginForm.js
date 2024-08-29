"use client";
import { useState } from "react";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "@/app/context/AuthContext";

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center backdrop-blur-xl px-3">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-900 py-4 px-6 rounded-xl max-w-md w-full space-y-4"
      >
        <div className="flex justify-center items-center ">
          <IoPersonOutline className="text-9xl text-white border-2 rounded-full border-white p-4" />
        </div>

        <div className="flex space-x-2 items-center">
          <IoPerson className="text-3xl text-white" />
          <input
            type="email"
            value={values.email}
            required
            placeholder="Email"
            className="p-2 rounded-e-lg w-full block"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex space-x-2 items-center">
          <RiLockPasswordFill className="text-3xl text-white" />
          <input
            type="password"
            value={values.password}
            required
            placeholder="Password"
            className="p-2 rounded-e-lg w-full block"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <button
              className="bg-white py-3 px-6 sm:px-10 text-blue-900 rounded-full"
              onClick={() => loginUser(values)}
            >
              Login
            </button>
            <button
              className="flex items-center bg-white py-3 px-6 text-blue-900 rounded-full"
              onClick={() => googleLogin()}
            >
              <FcGoogle className="text-3xl" />
              Login with Google
            </button>
          </div>
          <button
            className="bg-white py-3 px-6  text-blue-900 rounded-full"
            onClick={() => registerUser(values)}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;