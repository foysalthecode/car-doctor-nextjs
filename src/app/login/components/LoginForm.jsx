"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
const LoginForm = () => {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        router.push("/");
        form.reset();
        toast.success("Logged In successfully");
      } else {
        toast.error("Authentication failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Authentication failed");
    }
    // console.log({ email, password });
  };
  return (
    <form
      onSubmit={handleLogin}
      className="border border-gray-300 rounded-sm p-9"
    >
      <div className="text-center">
        <h1 className="font-bold text-3xl">Login</h1>
      </div>
      <div className="flex flex-col w-full space-y-2">
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
          Sign in
        </button>
      </div>
      <p className="text-center my-4 font-semibold">or login with</p>
      <SocialLogin></SocialLogin>
    </form>
  );
};

export default LoginForm;
