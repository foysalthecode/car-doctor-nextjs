import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGOURI;

export const collectionNameObj = {
  services: "services",
  userCollection: "users",
  bookingCollection: "mybooking",
};

const dbConnect = (collectionName) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
};

export default dbConnect;
