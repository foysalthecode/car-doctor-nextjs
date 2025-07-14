import Image from "next/image";
import React from "react";
import RegisterForm from "./components/RegisterForm";
const RegisterPage = () => {
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
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default RegisterPage;
