import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";
import { Suspense } from "react"; //only works if its a Server component/ React.lazy component
import axios from "axios";

async function Meals() {
    const meals = await axios.get("http://localhost:3000/api/meals");
    return <MealsGrid meals={meals.data} />
}

export default function MealsPage() {

    return (
        <>
            <header className="m-10 p-10 flex flex-col gap-5">
                <h1 className="text-5xl font-semibold w-[60%]">Delicious meals, created{''} by you</h1>
                <p className="text-3xl">Choose your favorite recipe and cook by yourself. It is easy and fun</p>
                <span className="bg-gray-300 hover:bg-gray-400 rounded-lg w-fit p-2">
                    <Link href='/meals/share'>Share your favorite recipe</Link>
                </span>
            </header>
            <main>
                <Suspense fallback={<span>Meals loading....</span>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}