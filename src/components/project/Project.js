"use client";

import { motion, useTransform, useScroll } from "framer-motion";

import { useRef } from "react";
import Card1 from "../card/card1";
import Card2 from "../card/card2";
import Card3 from "../card/card3";
import Card4 from "../card/card4";

const Projects = () => {
    return (
        <div id='exp' >
           
                <motion.div className=" text-center  pt-10"

                >
                    < motion.p className="  text-md text-white md:text-lg font-poppins font-small z-10   "> PROJECTS</motion.p>
                    <motion.h3 className="  text-4xl font-poppins text-teal-300 md:text-5xl  font-semibold  z-10   "> My Works</motion.h3>
                </motion.div>
            
            <HorizontalScrollCarousel />

        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#121212]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10"
                    initial={{
                        opacity: 0,
                        y: 80,

                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,

                        }
                    }}
                    viewport={{ once: false }}
                >


                   <Card1/>
                    <Card2 />
                    <Card3 />
                    <Card4 />

                </motion.div>
            </div>
        </section>
    );
};



export default Projects;

