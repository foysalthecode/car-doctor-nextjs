"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);
  const { email, password } = payload;
  if (!email || !password) {
    return null;
  }
  const user = await userCollection.findOne({ email: payload.email });
  if (user) {
    console.log("user exist");
    return null;
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();
    console.log('posted user successfully');
    return result;
    // console.log(user);
  }
};
