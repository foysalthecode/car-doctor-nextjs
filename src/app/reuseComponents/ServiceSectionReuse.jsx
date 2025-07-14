import Image from "next/image";
import React from "react";

const ServiceSectionReuse = ({ heading }) => {
  return (
    <section className="flex justify-center my-3">
      <figure className="relative">
        <Image
          src={"/assets/images/checkout/checkout.png"}
          alt="banner"
          width={1137}
          height={300}
          className=""
        />
        <div className="transparent-laye overlay-bg absolute w-full h-full top-0">
          <div className="w-full h-full flex items-center ps-16">
            <div>
              <h1 className="text-5xl font-bold text-white">{heading}</h1>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default ServiceSectionReuse;
