import React, { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home'); // Item menu yang aktif

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
        setIsOpen(false);
    };

    return (
        <>

            <nav className="fixed w-full bg-primary p-4 z-10">
                <div className="mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold font-chillax lg:mx-12">Chill<span className='text-amber-300'>Ax</span></div>
                    <div className="hidden md:flex space-x-8 mx-8 ">
                        <a
                            href="#"
                            className={`text-white font-mono ${activeItem === 'Home' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('Home')}
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className={`text-white font-mono ${activeItem === 'About' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('About')}
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className={`text-white font-mono ${activeItem === 'Services' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('Services')}
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className={`text-white font-mono ${activeItem === 'Contact' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('Contact')}
                        >
                            Contact
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar} className="text-white font-mono text-bold">
                            {isOpen ? <BsX /> : <BsList />}
                        </button>
                    </div>
                </div>
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="text-white p-4 space-y-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
