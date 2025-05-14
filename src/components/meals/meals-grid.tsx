import MealItem from "./meal-item";

export default function MealsGrid({meals}: {meals: []}) {
    return(
        <>
            <ul  className="m-10 p-10 flex gap-20 flex-wrap">
                {meals.map((meal: any) => 
                    <li key={meal._id} className="w-80 h-100 shadow-xl bg-gray-300">
                        <MealItem {...meal}></MealItem>
                    </li>
                )}
            </ul>
        </>
    )
}