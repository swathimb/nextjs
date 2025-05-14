export default function MealsSlug({ params }: { params: { mealSlug: string } }) {
    return(
        <>
            <p>Meals Slug {params.mealSlug}</p>
        </>
    )
}