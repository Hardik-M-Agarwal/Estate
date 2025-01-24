import React from 'react'
import { assets } from '/src/assets/assets.js';
import {motion} from 'framer-motion'

function About(){
    return(
        <motion.div 
        initial ={{opacity:0, x:200}}
          transition={{duration:1}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
        
        className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
           <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
           <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties,Dedicated to Your Vision</p>
           <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
             <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg'></img>
             <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl text-gray-800 font-medium '>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl text-gray-800 font-medium '>40+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl text-gray-800 font-medium '>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl text-gray-800 font-medium '>50+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-20 max-w-lg'>Welcome to Estate, your trusted partner in finding dream homes and premium properties. With years of experience in real estate, we specialize in residential, commercial, and luxury spaces tailored to your needs. Our commitment to excellence, transparency, and customer satisfaction sets us apart in the industry. We strive to make every property transaction seamless, stress-free, and rewarding. At Estate, we don’t just sell properties—we help you build your future.</p>
                <button className='text-white bg-blue-600 px-8 py-2 rounded'>Read More</button>
             </div>
           </div>
        </motion.div>
    );
}

export default About