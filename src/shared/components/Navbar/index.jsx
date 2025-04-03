"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="relative mt-4 ">
            <nav className={`bg-black mx-4 ${isMenuOpen ? "rounded-t-3xl" : "rounded-3xl"} transition-all relative`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center h-14">
                        <div className="flex-1">
                           <Image
                                        src="/images/main.svg"
                                        alt="Left group"
                                        width={160}
                                        height={160}
                                        priority
                                        className="object-cover rounded-3xl"
                                      />
                        </div>

                        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
                            <Link href="/host" className="text-white hover:text-gray-300 text-sm whitespace-nowrap">
                                Post a Job
                            </Link>
                            <Link href="/jobs" className="text-white hover:text-gray-300 text-sm whitespace-nowrap">
                                Explore Jobs
                            </Link>
                            <Link href="/how-it-works" className="text-white hover:text-gray-300 text-sm whitespace-nowrap">
                                How It Works
                            </Link>
                        </div>

                        <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
                            <Link
                               href='/'
                                className="flex items-center text-white hover:text-gray-300 px-4 py-1.5 border border-white rounded-full bg-black"
                            >
                                <Image
                                             src="/images/uk.svg"
                                             alt="Left group"
                                             width={150}
                                             height={150}
                                             priority
                                             className="object-cover rounded-2xl w-full max-w-[150px]"
                                           />
                                <span>EN</span>
                            </Link>
                            <Link
                                href="/signin"
                                className="text-white hover:text-gray-300 text-sm px-4 py-1.5 border border-white rounded-full bg-black"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="px-4 py-1.5 bg-white text-black rounded-full text-sm hover:bg-gray-100 transition"
                            >
                                Sign Up
                            </Link>
                        </div>


                        <div className="md:hidden flex items-center space-x-2">
                            <Link
                                href="/signup"
                                className="absolute right-14 px-4 py-1.5 bg-white text-black rounded-full text-sm hover:bg-gray-100 transition"
                            >
                                Sign Up
                            </Link>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-1.5 rounded-md bg-white text-black"
                            >
                                <span className="sr-only">Open menu</span>
                                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="bg-black rounded-b-3xl px-6 py-3 shadow-lg border-t border-gray-800 mx-4 -mt-1">
                    <div className="flex flex-col space-y-4">
                        <Link href="/host" className="text-white hover:text-gray-300 whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
                            Post a Job
                        </Link>
                        <Link href="/jobs" className="text-white hover:text-gray-300 whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
                            Explore Jobs
                        </Link>
                        <Link href="/how-it-works" className="text-white hover:text-gray-300 whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
                            How It Works
                        </Link>
                        <Link
                            href="/language"
                            className="flex items-center justify-center text-white hover:text-gray-300 px-4 py-1.5 border border-white rounded-full bg-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Globe className="h-4 w-4 mr-1" />
                            <span>EN</span>
                        </Link>
                        <Link
                            href="/signin"
                            className="text-white hover:text-gray-300 text-sm px-4 py-1.5 border border-white rounded-full bg-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
