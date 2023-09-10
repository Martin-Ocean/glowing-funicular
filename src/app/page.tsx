'use client'

import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import ActiveSectionContextProvider from '@/context/active-section-context';

const Hero = dynamic(() => import("../components/Hero"));
const PricingSection = dynamic(() => import("../components/PricingSection"));
const EventsSection = dynamic(() => import("../components/EventsSection"));
const SnacksMenuSection = dynamic(() => import("../components/SnacksMenuSection"));
const NavBar = dynamic(() => import("../components/NavBar"));
const Footer = dynamic(() => import("../components/Footer"));



export default function Home() {
  return (
    <ActiveSectionContextProvider>
      <NavBar />
      <main className="flex flex-col mx-auto justify-around space-y-20 bg-black text-white min-h-screen overflow-x-hidden font-home">
        <Hero />
        <PricingSection />
        <SnacksMenuSection />
        <EventsSection />
        {/* <div className='h-20vh w-80vw absolute right-0 bg-homeSecondary rounded-l-full'></div> */}
        <section className='snap-start ' id='section5'>
          {/* <div className="" >
              <h2 className="text-3xl">加入我们</h2>
              
            </div> */}
        </section>

        <Link href={"https://discord.gg/narutoclub66"} className='fixed z-50 bottom-4 right-4 p-4 rounded-full bg-homeSecondary text-black shadow-lg hover:bg-white transition transform hover:scale-105'>
          <button>
            <FontAwesomeIcon className='relative' icon={faDiscord} beat size="xl" />
          </button>
        </Link>

      </main>
      <Footer />
    </ActiveSectionContextProvider>
  )
}
