import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        id: 1,
        text: "Saya baru-baru ini menginap di hotel Chillax, dan pengalaman saya sungguh luar biasa. Kamar yang nyaman, pemandangan yang menakjubkan, dan pelayanan yang ramah membuat perjalanan saya sangat istimewa. Saya pasti akan kembali lagi!",
        author: "John Doe",
    },
    {
        id: 2,
        text: "Terima kasih kepada tim Chillax Hotel atas keramahan mereka. Saya benar-benar merasa santai selama menginap di sana. Kamar-kamar mereka adalah tempat yang sempurna untuk bersantai, dan kolam renangnya adalah tempat yang sempurna untuk menikmati matahari.",
        author: "Jane Smith",
    },
    {
        id: 3,
        text: "Saya suka sekali hotel ini. Tempatnya sangat bersih, stafnya sangat ramah, dan lokasinya sangat strategis. Saya merasa seperti sedang berlibur di surga. Terima kasih, Chillax Hotel, atas pengalaman yang luar biasa!",
        author: "David Johnson",
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='container'>
            <h1 className='pt-4 sm:pt-8 md:pt-12 lg:pt-20 text-center font-chillax font-bold text-4xl'>Testimonial</h1>
            <div className="p-2 pb-8 sm:pb-12 md:pb-16 lg:pb-20 -w-4xl mx-auto">
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className=''>
                            <div className="bg-slate-100 rounded-lg p-6 text-center">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-4">{testimonial.text}</p>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg italic text-gray-600">{testimonial.author}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
