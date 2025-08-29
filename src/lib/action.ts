'use server'
import axios from "axios";
import xss from "xss";
import fs from 'node:fs'
import { redirect } from "next/navigation";

export default async function shareMeal(formdata: any) {
    const slug = createSlug(formdata.get('title'));
    const imageData = formdata.get('image')
    const fileName = await getFileName(imageData.name, slug);
    console.log(imageData, fileName)
    const mealData = {
        creator: formdata.get('name'),
        creator_email: formdata.get('email'),
        title: formdata.get('title'),
        summary: formdata.get('summary'),
        instructions: xss(formdata.get('instructions')),
        image: `/assets/${fileName}`,
        slug: slug
    }
    try {
        const response = await axios.post("http://localhost:3000/api/meals", mealData);
        console.log("Meal created:", response.data);
        await storeImage(imageData, fileName)
        redirect('/meals')
    } catch (error: any) {
        console.error("Error creating meal:", error.response?.data || error.message);
    }
}

function createSlug(title: string,) {
    return title.toLocaleLowerCase().split(' ').join('_');
}

async function getFileName(name: string, slug: string) {
    const extension = name.split('.').pop();
    return `${slug}.${extension}`
}

async function storeImage(imageData: any, fileName: string) {
    const stream = fs.createWriteStream(`public/assets/${fileName}`)
    const bufferImage = await imageData.arrayBuffer();
    stream.write(Buffer.from(bufferImage), (error) => {
        if (error) {
            throw new Error('Failed saving image')
        }
    });
}