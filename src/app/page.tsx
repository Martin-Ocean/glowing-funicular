'use client'

import dynamic from 'next/dynamic';
import AOS from "aos";
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const Hero = dynamic(() => import("../components/Hero"));
const PricingSection = dynamic(() => import("../components/PricingSection"));
const EventsSection = dynamic(() => import("../components/EventsSection"));
const SnacksMenuSection = dynamic(() => import("../components/SnacksMenuSection"));



export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main className="flex flex-col mx-auto first-letter:justify-between bg-black text-white min-h-screen overflow-x-hidden">

      <Hero />
      <PricingSection />
      <SnacksMenuSection />
      <EventsSection />
      {/* <div className='h-20vh w-80vw absolute right-0 bg-secondary rounded-l-full'></div> */}
      <section className='snap-start ' id='section5'>
        {/* <div className="" >
              <h2 className="text-3xl">加入我们</h2>
              
            </div> */}
      </section>

      <Link href={"https://discord.gg/narutoclub66"} className='fixed z-50 bottom-4 right-4 p-4 rounded-full bg-secondary text-black shadow-lg hover:bg-white transition transform hover:scale-105'>
        <button>
          <FontAwesomeIcon className='relative' icon={faDiscord} beat size="xl" />
        </button>
      </Link>

    </main>
  )
}
