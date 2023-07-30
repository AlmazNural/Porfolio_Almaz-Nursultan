import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import img1 from '../assets/portfolio-img3.png'


const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn("right", 0.4)}
          initial="hidden" 
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }} 
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-cyan-600'>
              My Latest <br />
              Work.
            </h2>
            <p className='max-w-sm mb-16'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt nisi ligula ornare.
            </p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/* image */}
          <div className=' group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/* over */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img
              className='group-hover:scale-125 transition-all duration-500'
              src={img1}
              alt='img' />
            {/* 1-title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>html/css Design</span>

            </div>
            {/* 2-title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Project Title</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn("left", 0.2)}
          initial="hidden" 
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
           className='flex-1 flex flex-col gap-y-10'>
          {/* image-2 */}
          <div className=' group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/* over */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img
              className='group-hover:scale-125 transition-all duration-500'
              src={img1}
              alt='img' />
            {/* 1-title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>html/css Design</span>

            </div>
            {/* 2-title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Project Title</span>
            </div>
          </div>

          {/* image-3 */}
          <div className=' group relative overflow-hidden border-2
          border-white/50 rounded-xl'>
            {/* over */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img
              className='group-hover:scale-125 transition-all duration-500'
              src={img1}
              alt='img' />
            {/* 1-title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>html/css Design</span>

            </div>
            {/* 2-title */}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Project Title</span>
            </div>
          </div>

          
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
