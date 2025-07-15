import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ServicesSection = async () => {
  // const res = await fetch('/public/services.json');
  const serviceCollection = dbConnect(collectionNameObj.services);
  const data = await serviceCollection.find().toArray();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-9/12 mx-auto my-3">
      {data.map((item) => {
        return (
          // <div
          //   key={item._id}
          //   // className="border border-black gap-3 col-span-12 md:col-span-6 lg:col-span-4"
          // >
          //   <Image src={item.img} alt="car parts" width={314} height={208} />
          // </div>
          <div
            key={item._id}
            className="items-center justify-center overflow-hidden space-y-1"
          >
            <BoxReveal boxColor={"#ef8a6a"} duration={0.5}>
              <div className="relative w-72 h-44 overflow-hidden rounded-md">
                <Image
                  src={item.img}
                  alt={item.title}
                  // layout="responsive"
                  // width={400}
                  // height={300}
                  // className="rounded-lg object-cover"
                  fill
                  className="object-cover"
                  sizes="100%"
                  priority
                />
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#ef8a6a"} duration={0.5}>
              <h2 className="font-semibold">{item.title}</h2>
            </BoxReveal>

            <BoxReveal boxColor={"#ef8a6a"} duration={0.5}>
              <p className="font-bold text-orange-600">Price : ${item.price}</p>
            </BoxReveal>
            <BoxReveal boxColor={"#ef8a6a"} duration={0.5}>
              <Link
                href={`/services/${item._id}`}
                className="border border-orange-500 font-bold rounded-xl p-1 px-2 text-xs flex justify-center items-center gap-2"
              >
                Explore{" "}
                <span className="text-orange-500">
                  <FaArrowRight />
                </span>
              </Link>
            </BoxReveal>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
