'use client'

import NavBar from '../components/NavBar';
import { InView, useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import SnacksMenuSection from '@/components/SnacksMenuSection';
import EventsSection from '@/components/EventsSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';



export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  const [refSection1, inViewSection1] = useInView({
    threshold: 0.5
  });
  const [refSection2, inViewSection2] = useInView({
    threshold: 0.5
  });
  const [refSection3, inViewSection3] = useInView({
    threshold: 0.5
  });
  const [refSection4, inViewSection4] = useInView({
    threshold: 0.5
  });
  const [refSection5, inViewSection5] = useInView({
    threshold: 0.5
  });

  return (
    <InView as={'div'}>
      <div className="bg-black text-white min-h-screen font-custom overflow-x-hidden overflow-y-hidden ">
        <NavBar inViewOrNo={[inViewSection1, inViewSection2, inViewSection3, inViewSection4, inViewSection5]} />
        <div className="mx-auto pt-20 scroll-smooth justify-between">
          <section ref={refSection1} className='min-h-screen snap-start' id='home'>
            <div className='container mx-auto'>
              <Hero />
            </div>
          </section>

          <div className='absolute h-10vh w-70vw left-0 bg-secondary rounded-r z-10'></div>
          <section ref={refSection2} className='relative min-h-screen snap-start z-20 pt-4' id='pricing'>
            <div className='container mx-auto'>
              <PricingSection />
            </div>
          </section>
          {/* <section className='h-screen'></section> */}
          <div className='absolute h-10vh w-70vw right-0 bg-secondary rounded-l z-10'></div>
          <section ref={refSection3} className='relative min-h-screen snap-start z-20 pt-4' id='snacks'>
            <div className='container mx-auto'>
              <SnacksMenuSection />
            </div>
          </section>
          <div className='absolute h-10vh w-70vw left-0 bg-secondary rounded-r z-10'></div>
          <section ref={refSection4} className='relative min-h-screen snap-start z-20 pt-4' id='events'>
            <div className='container mx-auto'>
              <EventsSection />
            </div>
          </section>
          {/* <div className='h-20vh w-80vw absolute right-0 bg-secondary rounded-l-full'></div> */}
          <section ref={refSection5} className='snap-start ' id='section5'>
            {/* <div className="" >
              <h2 className="text-3xl">加入我们</h2>
              
            </div> */}
          </section>
          <Link href={"https://discord.gg/narutoclub66"} className='fixed z-50 bottom-4 right-4 p-4 rounded-full bg-secondary text-black shadow-lg hover:bg-white transition transform hover:scale-105'>
            <button>
              <FontAwesomeIcon className='relative' icon={faDiscord} beat size="xl" />
            </button>
          </Link>
        </div>
      </div>
    </InView>
  )
}
