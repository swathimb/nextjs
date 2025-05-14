import { clientPromise } from "@/lib/mongodb";
import { NextResponse } from "next/server";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB);

export async function GET() {
    const meals = await db.collection("meals").find().toArray();
    return NextResponse.json(meals);
  }