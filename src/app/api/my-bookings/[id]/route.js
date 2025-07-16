"use server";
import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  //user validation
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const singleBooking = await bookingCollection.findOne(query);
  const isOwnerOk = email === singleBooking?.email;
  if (isOwnerOk) {
    return NextResponse.json(singleBooking);
  } else {
    return NextResponse.json(
      { message: "forbidden update action" },
      { status: 401 }
    );
  }
};

export const PATCH = async (req, { params }) => {
  const p = await params;
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const body = await req.json();

  //user validation
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const currentBookingData = await bookingCollection.findOne(query);
  const isOwnerOk = email === currentBookingData?.email;

  if (isOwnerOk) {
    const filter = {
      $set: {
        ...body,
      },
    };
    const option = {
      upsert: true,
    };
    const updateBooking = await bookingCollection.updateOne(
      query,
      filter,
      option
    );
    revalidatePath("/my-bookings");
    return NextResponse.json(updateBooking);
  } else {
    return NextResponse.json(
      { message: "forbidden update action" },
      { status: 401 }
    );
  }
};
