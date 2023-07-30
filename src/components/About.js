import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id="about" ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden" 
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 __image__  bg-contain bg-no-repeat h-[648px] mix-blend-lighten bg-pop'>
          </motion.div>

          <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden" 
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'> 
            <h2 className='h2 text-cyan-600'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a beginner front-end developer, currently studying at the academy and developing myself. </h3>
            <p className='mb-6'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={7} duration={3} /> :
                      null}+
                </div>

                <div className='font-primary text-sm tracking-[2px}'>
                  There are <br /> many
                </div>

              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={12} duration={3} /> :
                      null}+
                </div>

                <div className='font-primary text-sm tracking-[2px}'>
                  There are <br /> many
                </div>

              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={21} duration={3} /> :
                      null}+
                </div>

                <div className='font-primary text-sm tracking-[2px}'>
                  There are <br /> many
                </div>

              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default About;
