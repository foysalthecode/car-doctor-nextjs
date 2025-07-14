import React from "react";
import LoginForm from "./components/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-evenly my-9">
      <div>
        <Image
          src={"/assets/images/login/login.svg"}
          width={300}
          height={200}
          alt="register image"
        />
      </div>
      <div className="mx-3 w-2/3">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default LoginPage;
