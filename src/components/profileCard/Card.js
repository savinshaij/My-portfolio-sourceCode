import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";


const Card = () => {
    return (
        <motion.div className="grid w-full place-content-center bg-grad px-4 py-12 text-slate-900"
        initial={{
            opacity: 0,
            y: 70,
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
            <TiltCard />
        </motion.div>
    );
};

const TiltCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative  h-96 w-80 shadow-lg rounded-3xl bg-gradient-to-br  from-[#3b3b3b22]  to-[#91919122]  "
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",


                }}
                className="absolute inset-7 grid place-content-center rounded-3xl bg-[url('/pic.png')]  bg-cover shadow-lg"
            >

                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="text-center text-2xl font-bold "
                >

                </p>
            </div>
        </motion.div>
    );
};

export default Card;