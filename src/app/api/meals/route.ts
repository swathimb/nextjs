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

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const body = await req.json();
    console.log('***', body)
    let { title, slug, image, summary, instructions, creator, creator_email } = body;

    console.log(title, slug, image, summary, instructions, creator, creator_email)
    const result = await db.collection("meals").insertOne({
      title,
      slug,
      image,
      summary,
      instructions,
      creator,
      creator_email,
    });

    return NextResponse.json({ message: "Meal created", data: result }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}


