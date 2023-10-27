import React from 'react'
import Header from '../components/header';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <Header />
            <div className="bg-gray-100 p-4 md:p-8 lg:h-screen">
                <h2 className="text-2xl font-semibold text-center mb-10 lg:mt-72">Contact Me</h2>
                <div className="flex flex-col items-center md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
                    {/* Email */}
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        <a href="mailto:youremail@example.com" className="text-blue-500">
                            chillaxservice@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2 3a1 1 0 011-1h4a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M22 10l-4-4m0 0L12 10m4-4v11a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v7h2a1 1 0 011-1V5a1 1 0 011-1h2a1 1 0 011 1v5z"
                            />
                        </svg>
                        <a href="tel:+1234567890" className="text-blue-500">
                            +62 (234) 567-890
                        </a>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 5H8a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V8a3 3 0 00-3-3z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <a
                            href="https://www.instagram.com/ChillAx"
                            className="text-purple-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @ChillAx
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

