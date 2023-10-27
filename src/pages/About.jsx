import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <main>
      <Header />
      <div className='bg-gray-200'>
  <div className='pt-16 lg:pt-24 text-xl lg:text-4xl font-chillax font-bold text-center pb-4 lg:pb-10'>
    About Us
  </div>
  <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
    <img src='/about.jpg' alt='' className='w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover' />
    <div className='pt-6 pb-10 text-lg'>
      <p>
        <span className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-chillax'>Chill</span><span className='text-amber-300 font-chillax font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl'>Ax</span> adalah komunitas pelancong yang bersemangat, yang memiliki satu tujuan utama: membuat pengalaman perjalanan Anda di Indonesia menjadi lebih istimewa. Sebagai penyedia layanan hotel terkemuka di negara ini, kami telah menyusun jaringan yang luas dari hotel, resor, dan penginapan yang tersebar di seluruh pelosok Indonesia. Ini berarti, tidak peduli apakah Anda adalah seorang petualang yang mencari petualangan alam, seorang pencinta pantai yang ingin bersantai di tepi laut, atau seorang pelancong bisnis yang memerlukan kenyamanan, Chillax memiliki pilihan akomodasi yang sempurna untuk setiap jenis perjalanan.
      </p>
      <p className='pt-3'>
        Kami berkomitmen untuk memberikan layanan yang tak tertandingi. Dari perencanaan perjalanan hingga saat Anda tiba di destinasi, kami berusaha keras untuk memastikan bahwa Anda merasakan sentuhan khusus Chillax. Dengan tim ahli yang berdedikasi, kami siap membantu Anda menghadapi tantangan perjalanan dengan kemudahan, memberikan saran lokal yang berharga, dan membantu Anda merencanakan penginapan yang sesuai dengan anggaran Anda. Di Chillax, kami memahami bahwa setiap perjalanan adalah cerita, dan kami sangat bangga dapat menjadi bagian dari cerita perjalanan Anda.
      </p>
    </div>
  </div>
</div>

      <Footer />
    </main>
  )
}
