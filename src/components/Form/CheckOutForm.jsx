"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const CheckOutForm = ({ data }) => {
  //   console.log(data);
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const handleBookService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const bookingPayload = {
      customerName: name,
      date,
      email,
      phone,
      address,
      service_name: data?.title,
      service_id: data?._id,
      service_img: data?.img,
      service_price: data?.price,
    };
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/service", {
        method: "POST",
        body: JSON.stringify(bookingPayload),
      });
      const postedData = await res.json();
      setLoading(false);
      form.reset();
      Swal.fire({
        title: "Order Confirmed",
        text: "checkout your booking?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "My Bookings",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/my-bookings");
        }
      });
      // console.log(postedData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-10/12 mx-auto border p-5 my-5">
      <h1 className="text-center text-4xl font-bold my-4">
        Book Service : {data?.title}
      </h1>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* name */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border p-2 rounded-lg"
              name="name"
              required
              readOnly
              defaultValue={session?.user?.name}
            />
          </div>
          {/* due amount */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="due money">Due amount</label>
            <input
              type="number"
              className="border p-2 rounded-lg"
              name="dueamount"
              defaultValue={data?.price}
              readOnly
            />
          </div>
          {/* email */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border p-2 rounded-lg"
              name="email"
              required
              defaultValue={session?.user?.email}
              readOnly
            />
          </div>
          {/* date */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="border p-2 rounded-lg"
              name="date"
              required
            />
          </div>
          {/* phone */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="phone number">Phone</label>
            <input
              type="number"
              className="border p-2 rounded-lg"
              name="phone"
              required
            />
          </div>
          {/* present address */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="border p-2 rounded-lg"
              name="address"
              required
            />
          </div>
        </div>
        {loading ? (
          <>
            <button className="w-full border border-orange-500 p-2 rounded-lg my-4 font-bold bg-white cursor-pointer">
              <span className="loading loading-spinner text-error"></span>
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="w-full border p-2 rounded-lg my-4 font-bold bg-orange-400 text-white cursor-pointer hover:bg-orange-600 transition-all duration-300"
            >
              Confirm Order
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
