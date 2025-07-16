// "use client";
import MyBookingTable from "@/components/tables/MyBookingTable";
import { headers } from "next/headers";
const FetchMyBookings = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: await headers(),
  });
  const bookingData = await res.json();
  // setData(bookingData);
  return bookingData;
};

const MyBookingsPage = async () => {
  // const [data, setData] = useState([]);
  const data = await FetchMyBookings();
  return (
    <div>
      <MyBookingTable data={data}></MyBookingTable>
    </div>
  );
};

export default MyBookingsPage;
