import React from 'react'
import Header from '../components/header';
import Footer from '../components/Footer';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
                <div className="flex space-x-4">
                    <Link
                        to="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <FaFacebook size={36} />
                    </Link>
                    <Link
                        to="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                    >
                        <FaTwitter size={36} />
                    </Link>
                    <Link
                        to="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                    >
                        <FaInstagram size={36} />
                    </Link>
                    <Link
                        to="https://www.gmail.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-800 hover:text-red-900"
                    >
                        <BiLogoGmail size={36} />

                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

