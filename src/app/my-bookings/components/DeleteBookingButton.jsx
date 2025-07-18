"use client";
import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";

const DeleteBookingButton = ({ id }) => {
  const router = useRouter();
  const handleDeletefunction = async (id) => {
    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeletefunction(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <p onClick={() => handleDelete(id)} className="text-2xl cursor-pointer">
        <TiDelete />
      </p>
    </>
  );
};

export default DeleteBookingButton;
