"use client"; 
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi"
import AboutBtn from "../about/about";
import Card from "../profileCard/Card";


const Hero = () => {
    return (
        <div className="w-full bg-cover bg-[url('/bkd.png')]">
<section className=" w-full pt-20 lg:pt-36 py-12 grid  grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto " id="home">
            <div>
            <div>
                    <motion.h3 className="mb-1  text-md font-medium md:text-md text-teal-600 font-poppins"
                        initial={{
                            opacity: 0,

                            x: -50
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: false }}
                    >
                        Hey there <span className=' font-serif text-4xl font-bold'>_</span>
                    </motion.h3>
                    <motion.h3 className="text-5xl text-white md:text-7xl font-semibold  font-poppins"
                        initial={{
                            opacity: [0, 0, 0, 0.5, 1],

                            x: -50
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: false }}
                    >
                        <div className='flex gap-3'>

                            <span > I&apos;m </span><span className="   font-pm " >Savin</span>
                            <motion.span className=' text-teal-300  font-extrabold  font-kab'>.</motion.span>
                        </div>

                    </motion.h3>
                    <motion.h3 className="text-2xl mt-3 text-gray-400  font-sc md:text-3xl "

                        initial={{
                            opacity: 0,

                            x: -50
                        }}

                        whileInView={{
                            opacity: [0, 0, 0, 1],
                            x: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: false }}
                    >
                        I&apos;m a
                        <TypeAnimation
                            sequence={[

                                " Full-Stack dev",
                                3000,
                                " UI/UX Designer",
                                3000,

                            ]}
                            wrapper="span"
                            speed={30}
                            className=' text-teal-300  font-semibold'
                            repeat={Infinity}
                        />

                    </motion.h3>
                    <motion.p className="text-sm lg:text-base font-light font-poppins md:text-base text-[#ffffff5b] my-2 md:my-4 md:mr-3"

                        initial={{
                            opacity: 0,
                            x: -50
                        }}

                        whileInView={{
                            opacity: [0, 0, 0, 0, 0, 0, 1],
                            x: 0,
                            transition: {
                                duration: 1,

                            }
                        }}
                        viewport={{ once: false }}
                    >

                        I&apos;m an Indian B.Tech Computer Science student at VIT University. With dedication and a commitment to improvement, I believe in making each project better than the last.
                    </motion.p>
                    <motion.div className='flex  pt-4'
                        initial={{
                            opacity: 0,

                            y: 100
                        }}

                        whileInView={{
                            opacity: [1],
                            y: 0,
                            transition: {
                                duration: 1,

                            }
                        }}
                        viewport={{ once: false }}
                    >

                        <button className=" duration-100  bg-teal-600 text-white text-sm md:text-base py-2 px-4 rounded transition-all hover:bg-teal-900  active:scale-95">
                            Download CV
                        </button>

                        <AboutBtn/>

                    </motion.div>


                    <motion.div className='  w-full h h-auto flex gap-7 pt-7  pl-4  '

                        initial={{
                            opacity: 0,

                            y: 100
                        }}

                        whileInView={{
                            opacity: [0, 0, 1],
                            y: 0,
                            transition: {
                                duration: 1,

                            }
                        }}
                        viewport={{ once: false }}
                    >

                        <a href="mailto:savinshaij19@gmail.com" > <div className='flex justify-center items-center rounded-lg duration-300 border  border-[#212121] hover:border-teal-300 h-12 w-12 hover:scale-110 '><FiMail className='  font-semibold  text-2xl text-white  hover:text-teal-300 ' /></div></a>
                        <a href="https://github.com/savinshaij" target="_blank" rel="noreferrer"> <div className='flex justify-center items-center rounded-xl duration-300 border  border-[#212121] hover:border-teal-300 h-12 w-12 hover:scale-110 '><FiGithub className='  font-semibold  text-2xl text-white  hover:text-teal-300 ' /></div></a>
                        <a href="https://www.instagram.com/_savin_shaij_/" target="_blank" rel="noreferrer">  <div className='flex justify-center items-center rounded-xl duration-300 border  border-[#212121] hover:border-teal-300 h-12 w-12 hover:scale-110'><FiInstagram className=' font-semibold  text-2xl text-white  hover:text-teal-300' /></div></a>
                        <a href="https://www.linkedin.com/in/savin-p-s-652665275/" target="_blank" rel="noreferrer">   <div className='flex justify-center items-center rounded-xl duration-300 border  border-[#212121] hover:border-teal-300 h-12 w-12 hover:scale-110'><FiLinkedin className=' font-semibold  text-2xl text-white  hover:text-teal-300' /></div></a>

                    </motion.div>
                    <motion.div className=' md:flex col-span-2 justify-end  hidden  '
                        initial={{


                            y: 100
                        }}
                    >
                        <span className="m_scroll_arrows unu"></span>
                    </motion.div>

                </div>
            </div>
            <Card/>
        </section>

        </div>
        
    );
};

export default Hero;