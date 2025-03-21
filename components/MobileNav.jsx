"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

const links = [
    {
        name: 'About',
        path: '/',

    },
    {
        name: 'Location',
        path: '/location',
    },
    {
        name: 'Events',
        path: '/events',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
        <SheetTrigger className='flex items-center justify-center'>
            <FaBarsStaggered className="text-[32px] text-black" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-20 text-2xl text-center">
                <Link href="/">
                    <h1 className='text-4xl font-bold'>Icon CrossFit<span className='text-black'>.</span></h1>
                </Link>
            </div>
            {/* nav */}
            <nav className='flex flex-col items-center justify-center gap-8'>
                {links.map((link, index)=> {
                    return ( <Link href={link.path} key={index} className={`${link. path === pathname && "text-black border-b-2 border-white"}text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                    );
                })}
            </nav>
        </SheetContent>
        </Sheet>
    );
};

export default MobileNav;