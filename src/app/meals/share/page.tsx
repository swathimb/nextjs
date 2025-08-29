import shareMeal from "@/lib/action";
import ImagePicker from "../image-picker";
import MealSubmit from "@/components/meals/meals-form-submit";

export default function ShareMeals() {

    return (
        <>
            <header className="">
                <h1>
                    Share your <span className="">favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className="">
                <form className="" action={shareMeal}>
                    <div className="m-2">
                        <p className="m-1">
                            <label htmlFor="name">Your name: </label>
                            <input className="border" type="text" id="name" name="name" required />
                        </p>
                        <p className="m-1">
                            <label htmlFor="email">Your email: </label>
                            <input className="border" type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p className="m-1">
                        <label htmlFor="title">Title: </label>
                        <input className="border" type="text" id="title" name="title" required />
                    </p>
                    <p className="m-1">
                        <label htmlFor="summary">Short Summary: </label>
                        <input className="border" type="text" id="summary" name="summary" required />
                    </p>
                    <p className="m-1">
                        <label htmlFor="instructions">Instructions: </label>
                        <textarea className="border"
                            id="instructions"
                            name="instructions"
                            rows={10}
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label="Your Image" name="image" />
                    <p className="m-1">
                        <MealSubmit />
                    </p>
                </form>
            </main>
        </>
    )
}