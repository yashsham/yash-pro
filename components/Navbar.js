import React from 'react'
import { Button } from "@/components/ui/button"
import { HamIcon } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from './components/theme-btn';

// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="p-4 bg-background/50 sticky top-0 border-b backdrop-blur z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className=" text-2xl font-bold">
                    Sharma&apos;sWEB
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="hover:font-bold">
                        Home
                    </Link>
                    <Link href="/Portfolio" className="hover:font-bold">
                        Portfolio
                    </Link>
                    <Link href="/about" className="hover:font-bold">
                        About
                    </Link>
                    <Link href="/contact" className="hover:font-bold">
                        Contact
                    </Link>
                    <div className='flex item-center'>
                        <Button className="mx-1 text-xs" variant="outline">Login</Button>
                        <Button className="mx-1 text-xs" variant="outline">Signup</Button>
                        <ModeToggle />
                    </div>
                </div>
                <div className="md:hidden">
                <span className='mx-2'><ModeToggle/></span>
                    <Sheet>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        
                        
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">Sharma&apos;sWEB</SheetTitle>
                                <SheetDescription>
                                    <div className="flix flex-col gap-5">
                                        <Link href="/">Home
                                        </Link>
                                        <Link href="/Portfolio">
                                            Portfolio
                                        </Link>
                                        <Link href="/about">
                                            About
                                        </Link>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                        <div>
                                            <Button className="mx-1" variant="outline">Login</Button>
                                            <Button className="mx-1" variant="outline">Signup</Button>

                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;