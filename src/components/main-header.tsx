'use client'

import Link from "next/link";
import logoImage from '../../public/assets/logo.png'
import Image from "next/image"
import NavLink from "./nav-link";

export default function Header() {

    return (
        <>
            <div className="flex items-center justify-center gap-300">
                <Link className="flex gap-5 items-center" href="/">
                    <Image className="object-contain" src={logoImage} alt="A food plate" width="80" height="80"></Image>
                    <span className="text-2xl font-semibold text-shadow-md">Next Level Food</span>
                </Link>

                <nav>
                    <ul className="flex gap-4">
                        <li >
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

//logoImage.src while using <img>- here imported logoImage is an object & path to that image is stored in src property