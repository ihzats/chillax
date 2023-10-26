import React from 'react';

export default function Card() {
    return (
        <div className='container mb-20'>
            <h1 className='text-3xl font-bold font-chillax pt-10 md:pt-20 pb-10'>Explore Indonesia</h1>
            <div className="flex flex-wrap justify-center gap-4 ">

                <div className="max-w-sm rounded overflow-hidden relative sm:flex sm:justify-center">
                    <img src="/bali.jpg" alt="Card" className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                    <div className="text-amber-300 text-center p-4 absolute bottom-0 left-0 w-full">
                        <div className="font-bold text-xl mb-2">Bali</div>
                        <p className="text-white text-base hidden md:flex lg:flex ">
                            Bali dikenal dengan julukan "Pulau Dewata." Wisatawan sering datang ke Bali untuk menikmati pantai-pantai berpasir putih, seperti Kuta, Seminyak, dan Nusa Dua.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg relative flex justify-center">
                    <img src="/jogja.jpg" alt="Card" className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                    <div className="text-amber-300 text-center p-4 absolute bottom-0 left-0 w-full">
                        <div className="font-bold text-xl mb-2">Yogyakarta</div>
                        <p className="text-white text-base hidden md:flex lg:flex ">
                            Yogyakarta, atau biasa disingkat sebagai "Jogja" Jogja terkenal dengan warisan budaya dan sejarahnya yang kaya, termasuk candi-candi seperti Borobudur dan Prambanan.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg relative flex justify-center">
                    <img src="/surabaya.jpg" alt="Card" className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                    <div className="text-amber-300 text-center p-4 absolute bottom-0 left-0 w-full">
                        <div className="font-bold text-xl mb-2">Surabaya</div>
                        <p className="text-white text-base hidden md:flex lg:flex ">
                            Surabaya dikenal "Kota Pahlawan" karena peran pentingnya dalam perjuangan kemerdekaan Indonesia, Surabaya memiliki berbagai objek wisata.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
