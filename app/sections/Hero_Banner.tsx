import React from 'react'
import Image from 'next/image'

const Hero_Banner = () => {
  return (
    <section className="relative flex min-h-screen w-full justify-center">
      <Image
        src="/banniere.png"
        alt="Bannière"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
        <h1 className="text-6xl font-bold mb-4">TITRE</h1>
        <h2 className="text-4xl mb-8">SOUS TITRE</h2>
        <span className="text-9xl font-bold">A</span>
      </div>
    </section>
  )
}

export default Hero_Banner
