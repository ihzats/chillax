import React from 'react'
import Header from '../components/header'

export default function About() {
  return (
    <main>
      <Header />
      <div className='container'>
        <div className='pt-20 lg:pt-28 text-xl lg:text-4xl font-chillax font-bold text-center pb-4 lg:pb-10'>
          About Us
        </div>
        <img src='/about.jpg' alt='' className='w-full h-96 object-cover' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum quas dolore incidunt. Fuga, nihil. Dolorem similique optio itaque, vel quos nulla a, illo modi, ipsa voluptatibus tempore. Facere eveniet sunt esse suscipit repellat quo impedit qui, doloribus error nobis beatae labore nisi animi velit possimus molestias sit excepturi omnis rerum veritatis quaerat iusto quasi maiores! Ab cum mollitia voluptates sapiente non amet laborum, nam ducimus inventore, iusto ut, earum temporibus magni. Explicabo necessitatibus dolorum libero laborum excepturi quas ipsam dolore corporis quidem voluptate nisi atque, quod esse, quaerat doloribus blanditiis! Qui expedita ratione incidunt! Aperiam consequuntur distinctio consectetur reiciendis.
        </p>
      </div>
    </main>
  )
}
