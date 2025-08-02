'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    const path = usePathname();
    // const path = ''

    return (
        <>
            <Link className={`hover:text-blue-800 ${path.startsWith(href) ? 'text-blue-600' : ''}`} href={href}>{children}</Link>
        </>
    )
}