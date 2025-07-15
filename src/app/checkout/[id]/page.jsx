import CheckOutForm from "@/components/Form/CheckOutForm";
import React from "react";

const CheckOutPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
  return (
    <div>
      <CheckOutForm data={data}></CheckOutForm>
    </div>
  );
};

export default CheckOutPage;
