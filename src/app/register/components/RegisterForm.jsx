"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
const RegisterForm = () => {
  const router = useRouter();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await registerUser({ name, email, password });
      toast.success("register successull");
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSignUp}
      className="border border-gray-300 rounded-sm p-9"
    >
      <div className="text-center">
        <h1 className="font-bold text-3xl">Sign Up</h1>
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="border border-gray-300 rounded-sm p-2"
          placeholder="your name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="border border-gray-300 rounded-sm p-2"
          placeholder="Enter Your Email"
        />
        <label htmlFor="password">Confirm password</label>
        <input
          type="password"
          name="password"
          className="border border-gray-300 rounded-sm p-2"
          placeholder="Enter Your Password"
        />
        <button
          type="submit"
          className="border border-gray-300 p-2 rounded-sm font-semibold bg-orange-600 text-white"
        >
          Sign up
        </button>
      </div>
      <p className="text-center my-4 font-semibold">or signup with</p>
      <div className="flex justify-center space-x-4">
        <p className="border p-2 rounded-full">
          <FaFacebookF />
        </p>
        <p className="border p-2 rounded-full">
          <FaLinkedinIn />
        </p>
        <p className="border p-2 rounded-full">
          <FaGoogle />
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
