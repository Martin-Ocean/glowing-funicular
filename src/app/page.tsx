'use client'
import Image from 'next/image';
import NavBar from '../components/NavBar';
import { InView, useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';


export default function Home() {
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
    <InView>
      <div className="bg-black text-white min-h-screen font-custom overflow-x-hidden overflow-y-hidden ">
        <NavBar inViewOrNo={[inViewSection1, inViewSection2, inViewSection3, inViewSection4, inViewSection5]} />
        <div className="container mx-auto pt-20 scroll-smooth">
          <section ref={refSection1} className='h-screen snap-start' id='section1'>
            <Hero />
          </section>
          
          <section ref={refSection2} className='h-screen snap-start' id='section2'>
            <PricingSection/>
          </section>
          <section className='h-screen'></section>
          <section ref={refSection3} className='h-screen snap-start mt-10' id='section3'>
            <div className="" >
              <h2 className="text-3xl">零食菜单</h2>
              {/* Your services content */}
            </div>
          </section>
          <section ref={refSection4} className='h-screen snap-start' id='section4'>
            <div className="" >
              <h2 className="text-3xl">福利活动</h2>
              {/* Your contact content */}
            </div>
          </section>
          <section ref={refSection5} className='h-screen snap-start' id='section5'>
            <div className="" >
              <h2 className="text-3xl">加入我们</h2>
              {/* Your services content */}
            </div>
          </section>
        </div>
      </div>
    </InView>
  )
}
