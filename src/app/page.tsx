"use client"
import dynamic from 'next/dynamic'
import Image from 'next/image'

const NavBar = dynamic(() => import("@/components/navbar"))

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <div className="container mx-auto pt-20">
        <h1 className="text-4xl">Welcome to ChiChiParty</h1>
        <div className="mt-64">
          <h2 id="services" className="text-3xl">Our Services</h2>
          {/* Your services content */}
        </div>
        <div className="mt-64">
          <h2 id="products" className="text-3xl">Our Products</h2>
          {/* Your products content */}
        </div>
        <div className="mt-64">
          <h2 id="contact" className="text-3xl">Contact Us</h2>
          {/* Your contact content */}
        </div>
        <div className="mt-64">
          <h2 id="services" className="text-3xl">Our Services</h2>
          {/* Your services content */}
        </div>
        <div className="mt-64">
          <h2 id="products" className="text-3xl">Our Products</h2>
          {/* Your products content */}
        </div>
        <div className="mt-64">
          <h2 id="contact" className="text-3xl">Contact Us</h2>
          {/* Your contact content */}
        </div>
        <div className="mt-64">
          <h2 id="services" className="text-3xl">Our Services</h2>
          {/* Your services content */}
        </div>
        <div className="mt-64">
          <h2 id="products" className="text-3xl">Our Products</h2>
          {/* Your products content */}
        </div>
        <div className="mt-64">
          <h2 id="contact" className="text-3xl">Contact Us</h2>
          {/* Your contact content */}
        </div>
      </div>
    </div>
  )
}
