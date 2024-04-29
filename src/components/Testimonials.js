import { TerminalIcon, UsersIcon } from '@heroicons/react/solid';
import React from 'react';
import { testimonials } from '../data';
export default function Testimonials() {

    return (
        <section id="testimonials">
            <div className="container px-5 py-24 mx-auto">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="text-3xl font-bold mb-12 text-center">Testimonials</h1>
                <div className="flex flex-wrap -m-4">
                    {testimonials.map((test) => (
                        <div className="p-4 lg:w-1/2" key={test.name}>
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                                <p className="leading-relaxed mb-6">{test.quote}</p>
                                <div className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src={test.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">{test.name}</span>
                                        <span className="text-gray-500 text-sm">{test.company}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}