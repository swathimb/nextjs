import { clientPromise } from "@/lib/mongodb";
import { NextResponse } from "next/server";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB);

export async function GET() {
  // await new Promise((resolve, reject) => setTimeout(reject, 3000))
  await new Promise((resolve, reject) => setTimeout(resolve, 3000))

  const meals = await db.collection("meals").find().toArray();
  return NextResponse.json(meals);
}