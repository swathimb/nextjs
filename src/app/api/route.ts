import { clientPromise } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const collections = await db.listCollections().toArray();
    return NextResponse.json({ collections });
  } catch (e) {
    return NextResponse.json({ errMsg: "Connection failed", err: e }, { status: 500 });
  }
}
