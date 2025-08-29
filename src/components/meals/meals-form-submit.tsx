'use client'

import { useFormStatus } from "react-dom";

export default function MealSubmit() {
    const formStatus = useFormStatus();
    console.log(formStatus)
    return <button className="bg-cyan-500" type="submit">{formStatus.pending ? 'Submitting..' : 'Share Meal'}</button>
}