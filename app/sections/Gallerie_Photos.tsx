'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Gallerie_Photos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const photos = [
    { src: '/cabinet/cabinet_1.jpg', alt: 'Photo cabinet 1' },
    { src: '/cabinet/cabinet_2.jpg', alt: 'Photo cabinet 2' },
    { src: '/cabinet/cabinet_3.jpg', alt: 'Photo cabinet 3' },
  ]

  return (
    <>
      <h1 className="p-3 text-center font-Globale text-5xl">Cabinet</h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 rounded-xl p-3 sm:grid-cols-3">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative aspect-square cursor-pointer"
            onClick={() => setSelectedImage(photo.src)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="rounded-xl border border-black object-cover shadow-[3px_3px_0px_0px] shadow-black transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px]"
              sizes="(max-width: 640px) 90vw, 33vw"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 z-50 text-4xl text-white"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            ×
          </button>
          <div
            className="relative h-auto max-h-[90vh] max-w-full" // Modification clé ici
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Agrandissement"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[90vh] w-auto max-w-full rounded-xl object-contain" // Ajout des contraintes
              style={{
                width: 'auto',
                height: 'auto',
              }}
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Gallerie_Photos
