import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const p = await params;
  const query = { _id: new ObjectId(p.id) };
  //validation
  const session = await getServerSession(authOptions);
  const currentlyBooking = await bookingCollection.findOne(query);

  const isOwnerOk = session?.user?.email === currentlyBooking.email;
  if (isOwnerOk) {
    //delete data if current user email and data base email are same
    const deleteResponse = await bookingCollection.deleteOne(query);
    revalidatePath("/my-bookings");
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json(
      { success: false, message: "Forbidden action" },
      { status: 401 }
    );
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const serviceCollection = dbConnect(collectionNameObj.services);
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
  return NextResponse.json(data);
};
