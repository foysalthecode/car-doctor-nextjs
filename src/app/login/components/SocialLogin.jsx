"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();
  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };
  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      toast.success("Successfully logged In");
    }
  }, [session?.status]);
  return (
    <div className="flex justify-center space-x-4">
      <p
        onClick={() => handleSocialLogin("google")}
        className="border p-2 rounded-full"
      >
        <FaGoogle type="button" />
      </p>
      <p
        onClick={() => handleSocialLogin("github")}
        className="border p-2 rounded-full"
      >
        <FiGithub type="button" />
      </p>
    </div>
  );
};

export default SocialLogin;
