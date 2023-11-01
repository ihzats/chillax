import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Card2 = () => {
  const [hotelData, setHotelData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(16); // Ubah sesuai jumlah hotel per halaman
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mengambil data JSON
    fetch('/hotel.json')
      .then((response) => response.json())
      .then((data) => {
        const hotels = data.Envelope.Body.HotelSearchResponse.HotelResultList.HotelResult;
        setHotelData(hotels);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, []);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const filteredHotels = hotelData.filter((hotel) =>
    hotel.HotelInfo.HotelName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      setCurrentPage(1);
    } else if (pageNumber > Math.ceil(filteredHotels.length / hotelsPerPage)) {
      setCurrentPage(Math.ceil(filteredHotels.length / hotelsPerPage) + 1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  // const maxPageNumbers = Math.min(10, Math.ceil(filteredHotels.length / hotelsPerPage));



  return (
    <div className="container mx-auto pt-24">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari hotel..."
          className="p-2 border rounded-md w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentHotels.map((hotel, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={hotel.HotelInfo.HotelPicture} alt={hotel.HotelInfo.HotelName} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{hotel.HotelInfo.HotelName}</h3>
              <p className="text-gray-500">{hotel.HotelInfo.HotelAddress}</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-500">
                  {Array.from({ length: parseFloat(hotel.HotelInfo.Rating) }, (_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <span className="text-gray-500 ml-2">({hotel.HotelInfo.Rating})</span>
              </div>
              <div className="mt-4">
                <span className="text-xl font-semibold">{hotel.MinHotelPrice._PrefPrice} {hotel.MinHotelPrice._PrefCurrency}</span>
                {hotel.MinHotelPrice._OriginalPrice !== hotel.MinHotelPrice._PrefPrice && (
                  <span className="text-gray-500 line-through ml-2">
                    {hotel.MinHotelPrice._OriginalPrice} {hotel.MinHotelPrice._Currency}
                  </span>
                )}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-500">Pesan Sekarang</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-10 px-8 md:px-24 lg:px-72 flex flex-row md:flex-row justify-center md:justify-between items-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-md ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <FaArrowLeft />
        </button>
        <span className="text-xl font-semibold mt-4 md:mt-0 px-4">
          Page {currentPage} of {Math.ceil(filteredHotels.length / hotelsPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastHotel >= filteredHotels.length}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md ${indexOfLastHotel >= filteredHotels.length ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="mt-4 mb-10">
        {/* <ul className="flex flex-wrap justify-center text-md">
          {Array.from({ length: maxPageNumbers }, (_, index) => (
            <li
              key={index}
              onClick={() => paginate(index + 1)}
              className={`cursor-pointer mx-2 mb-2 ${currentPage === index + 1 ? 'text-blue-500 font-semibold bg-slate-300 p-2 rounded-md' : 'text-gray-500 bg-slate-300 p-2 rounded-md'}`}
            >
              {index + currentPage}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Card2;
