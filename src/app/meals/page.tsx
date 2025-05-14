'use client'

import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Meals() {
    const [meals, setMeals] = useState<[]>([])

    const fetchMeals = async () => {
        try {
          const response = await axios.get("/api/meals");
          console.log('-----', response)
          setMeals(response.data)
        } catch (err) {
          console.error("Error fetching meals:", err);
        }
    };
      
    useEffect(() => {
        fetchMeals();
    },[])

    return(
        <>
            <header className="m-10 p-10 flex flex-col gap-5">
                <h1 className="text-5xl font-semibold w-[60%]">Delicious meals, created{''} by you</h1>
                <p className="text-3xl">Choose your favorite recipe and cook by yourself. It is easy and fun</p>
                <span className="bg-gray-300 hover:bg-gray-400 rounded-lg w-fit p-2">
                    <Link href='/meals/share'>Share your favorite recipe</Link>
                </span>
            </header>
            <main>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}