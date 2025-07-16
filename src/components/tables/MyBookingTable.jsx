import DeleteBookingButton from "@/app/my-bookings/components/DeleteBookingButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbEdit } from "react-icons/tb";

const MyBookingTable = ({ data }) => {
  //   console.log(data);
  return (
    <div className="my-5">
      <h1 className="text-center text-4xl font-bold my-4">My All Bookings</h1>
      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>service Price</th>
              <th>Phone</th>
              <th>Address</th>
              <th>edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <Image
                      src={item.service_img}
                      width={90}
                      height={50}
                      className="rounded-lg"
                      alt="service img"
                    />
                  </td>
                  <td>
                    <p>{item.service_name}</p>
                  </td>
                  <td>
                    <p>{item.date}</p>
                  </td>
                  <th>
                    <p>${item.service_price}</p>
                  </th>
                  <th>
                    <p>{item.phone}</p>
                  </th>
                  <th>
                    <p>{item.address}</p>
                  </th>
                  <th>
                    <Link
                      href={`/my-bookings/${item._id}`}
                      className="text-2xl tooltip"
                      data-tip="update"
                    >
                      <TbEdit />
                    </Link>
                  </th>
                  <th>
                    <DeleteBookingButton id={item._id}></DeleteBookingButton>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingTable;
