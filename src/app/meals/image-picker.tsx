'use client'

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }: { label: string, name: string }) {

    const imageInput = useRef<HTMLInputElement>(null);
    const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>();

    function handleClick() {
        imageInput?.current?.click();
    }

    function handleImageChange(event: any) {
        const fileSelected = event.target.files[0] // array of file that is picked, this exists ininput tag
        if (!fileSelected) return;

        const fileReader = new FileReader();
        if (!fileReader) return;

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(fileSelected)

    }

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div>
                <div className="relative w-50 h-50">
                    {!pickedImage && <p>No Image picked</p>}
                    {pickedImage && <Image src={pickedImage} alt="No image picked" fill></Image>}
                </div>
                <input ref={imageInput} onChange={handleImageChange}
                    className="hidden" type="file" id={name} accept="image/png image/jpeg" name={name} required></input>
                <button onClick={handleClick} className="bg-cyan-500" type="button">Pick an Image</button>
            </div>
        </div>
    )
}