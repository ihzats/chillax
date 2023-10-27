import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-10 bg-gray-800 text-white py-4 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-1">Tentang Kami</h3>
          <div className="bg-white h-1  w-1/3 mx-auto md:mx-0"></div>
          <p className='pt-2'>Kami adalah perusahaan yang berkomitmen untuk memberikan layanan terbaik kepada pelanggan.</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-1">Tautan</h3>
          <div className="bg-white h-1 w-1/5 mx-auto md:mx-0"></div>
          <ul className='pt-2'>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-1">Hubungi Kami</h3>
          <div className="bg-white h-1  w-1/2 mx-auto md:mx-0"></div>
          <p className='pt-2'>Alamat: Jalan Merdeka No. 123</p>
          <p>Email: chillax@mywebsite.com</p>
          <p>Telepon: (62) 456-996-339</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        &copy; 2023 My Website
      </div>
    </footer>
  );
};

export default Footer;
