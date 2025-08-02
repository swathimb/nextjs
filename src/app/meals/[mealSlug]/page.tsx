import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MealsSlug({ params }: { params: { mealSlug: string } }) {
    // mealSlug is a placeholder slug
    const mealsParam = await params;
    let mealsData = null
    try {
        const res = await axios.get(`http://localhost:3000/api/meals/${mealsParam.mealSlug}`);
        mealsData = res.data
    } catch (error: any) {
        if (error.response?.status === 404) {
            console.log("Meal not found");
            notFound(); //built-in function for notfound
        } else {
            console.error("API error:", error);
        }
    }
    console.log(mealsData)
    return (
        <>
            <header>
                <div className="relative h-50 w-50 rounded overflow-hidden">
                    <Image src={mealsData.image} alt={mealsData.title} fill className="object-cover" />
                </div>
                <div>
                    <h1>Title: {mealsData.title}</h1>
                    <p>email: {mealsData.creator_email}</p>
                    <p>Summary: {mealsData.summary}</p>
                </div>
            </header>
            <main>
                <p dangerouslySetInnerHTML={{
                    __html: mealsData.instructions
                }}></p>
            </main>
        </>
    )
}