import { clientPromise } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB);

export async function GET(req, { params }) {
    // await new Promise((resolve, reject) => setTimeout(reject, 3000))
    const mealsParams = await params;

    try {
        const meal = await db.collection("meals").findOne({ slug: mealsParams.mealSlug });
        if (!meal) {
            return NextResponse.json({ message: "Meal not found" }, { status: 404 });
        }
        return NextResponse.json(meal);
    } catch (error) {
        console.error("GET meal by ID error:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}