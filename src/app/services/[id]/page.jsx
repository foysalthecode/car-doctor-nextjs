import ServiceSectionReuse from "@/app/reuseComponents/ServiceSectionReuse";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params;
  const serviceCollection = dbConnect(collectionNameObj.services);
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
  const buttons = [
    { name: "Full Car Repair" },
    { name: "Engine Repair" },
    { name: "Automatic Services" },
    { name: "Engine oil change" },
    { name: "Battery Change" },
  ];
  return (
    <div className="w-10/12 mx-auto my-3">
      <ServiceSectionReuse heading={"Service Details"}></ServiceSectionReuse>
      <section className="flex space-x-8">
        <div className="w-2/3">
          <Image
            src={data.img}
            alt={data.title}
            className="rounded-lg"
            width={700}
            height={50}
          />
          <h1 className="font-bold text-4xl my-2">{data.title}</h1>
        </div>
        <div className="rounded-lg w-1/3 p-9 bg-gray-100">
          <p className="font-bold text-2xl my-1.5">Service</p>
          <div className="flex flex-col space-y-4">
            {buttons.map((button, idx) => {
              return (
                <div key={idx}>
                  <button
                    className="group p-2 bg-white rounded-xs w-full flex items-center font-semibold
                    justify-between hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    {button.name}
                    <IoMdArrowRoundForward className="group-hover:translate-x-1.5 group-hover:text-white transition-transform duration-300 text-xl text-orange-400" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
