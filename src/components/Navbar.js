import React from 'react';
export default function Navbar() {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Nick's Portfolio</span>
            </div>
            <div className="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a
                        href="#about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                        About
                    </a>
                    <a
                        href="#projects"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                        Skills
                    </a>
                    <a
                        href="#testimonials"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                        Testimonials
                    </a>
                    <a
                        href="#contact"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
                        Contact
                    </a>
                </div>
            </div>
        </nav>

    )
}