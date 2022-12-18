import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="sm:[400px] md:[500px] lg:[600px] 2xl:[700px] relative h-[300px]">
      <Image src="/Airbnb_Logo.svg" layout="fill" objectFit="contain" />
    </div>
  )
}

export default Banner
