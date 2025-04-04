"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="relative mt-4" style={{ backgroundColor: "transparent" }}>
            <nav
                className={`mx-4 ${isMenuOpen ? "rounded-t-3xl" : "rounded-3xl"} transition-all relative`}
                style={{ backgroundColor: "black" }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center h-14">
                        <div className="flex-1" style={{ backgroundColor: "transparent" }}>
                            <Image
                                src="/images/main.svg"
                                alt="Left group"
                                width={160}
                                height={160}
                                priority
                                className="object-cover rounded-3xl"
                            />
                        </div>

                        <div
                            className="hidden md:flex flex-1 justify-center items-center space-x-6"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <Link
                                href="/host"
                                className="text-white hover:text-gray-300 text-sm whitespace-nowrap"
                                style={{ backgroundColor: "transparent" }}
                            >
                                Post a Job
                            </Link>
                            <Link
                                href="/jobs"
                                className="text-white hover:text-gray-300 text-sm whitespace-nowrap"
                                style={{ backgroundColor: "transparent" }}
                            >
                                Explore Jobs
                            </Link>
                            <Link
                                href="/how-it-works"
                                className="text-white hover:text-gray-300 text-sm whitespace-nowrap"
                                style={{ backgroundColor: "transparent" }}
                            >
                                How It Works
                            </Link>
                        </div>

                        <div
                            className="hidden md:flex flex-1 justify-end items-center space-x-4"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <Link
                                href="/"
                                className="flex items-center text-white hover:text-gray-300 px-4 py-1.5 border border-white rounded-full"
                                style={{ backgroundColor: "black" }}
                            >
                                <Image
                                    src="/images/uk.svg"
                                    alt="Left group"
                                    width={150}
                                    height={150}
                                    priority
                                    className="object-cover rounded-2xl w-full max-w-[150px]"
                                />
                                <span style={{ backgroundColor: "transparent" }}>EN</span>
                            </Link>
                            <Link
                                href="/signin"
                                className="text-white hover:text-gray-300 text-sm px-4 py-1.5 border border-white rounded-full"
                                style={{ backgroundColor: "black" }}
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="px-4 py-1.5 text-black rounded-full text-sm hover:bg-gray-100 transition"
                                style={{ backgroundColor: "white" }}
                            >
                                Sign Up
                            </Link>
                        </div>

                        <div className="md:hidden flex items-center space-x-2" style={{ backgroundColor: "transparent" }}>
                            <Link
                                href="/signup"
                                className="absolute right-14 px-4 py-1.5 text-black rounded-full text-sm hover:bg-gray-100 transition"
                                style={{ backgroundColor: "white" }}
                            >
                                Sign Up
                            </Link>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-1.5 rounded-md text-black"
                                style={{ backgroundColor: "white" }}
                            >
                                <span className="sr-only">Open menu</span>
                                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div
                    className="rounded-b-3xl px-6 py-3 shadow-lg border-t border-gray-800 mx-4 -mt-1"
                    style={{ backgroundColor: "black" }}
                >
                    <div className="flex flex-col space-y-4" style={{ backgroundColor: "transparent" }}>
                        <Link
                            href="/host"
                            className="text-white hover:text-gray-300 whitespace-nowrap"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ backgroundColor: "transparent" }}
                        >
                            Post a Job
                        </Link>
                        <Link
                            href="/jobs"
                            className="text-white hover:text-gray-300 whitespace-nowrap"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ backgroundColor: "transparent" }}
                        >
                            Explore Jobs
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="text-white hover:text-gray-300 whitespace-nowrap"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ backgroundColor: "transparent" }}
                        >
                            How It Works
                        </Link>
                        <Link
                            href="/language"
                            className="flex items-center justify-center text-white hover:text-gray-300 px-4 py-1.5 border border-white rounded-full"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ backgroundColor: "black" }}
                        >
                            <Globe className="h-4 w-4 mr-1" style={{ backgroundColor: "transparent" }} />
                            <span style={{ backgroundColor: "transparent" }}>EN</span>
                        </Link>
                        <Link
                            href="/signin"
                            className="text-white hover:text-gray-300 text-sm px-4 py-1.5 border border-white rounded-full"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ backgroundColor: "black" }}
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

