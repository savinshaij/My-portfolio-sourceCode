"use client"; 
import React, { useRef, useState, useEffect, } from 'react';

import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import emailjs from '@emailjs/browser';
import StarBkd from '../starBkd/starBkd'



const Contact = () => {
    const [notifications, setNotifications] = useState([]);

    const removeNotif = (id) => {
        setNotifications((pv) => pv.filter((n) => n.id !== id));
    };
    const form = useRef();
    const [start, setStart] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        setNotifications((pv) => [waitNoti(), ...pv]);

        emailjs.sendForm('service_akw8nzq', 'template_p2wt9yf', form.current, 'g88IRx7wxk0smNG-v')
            .then((result) => {
                console.log(result.text);
                
                setNotifications((pv) => [successNoti(), ...pv]);
            }, (error) => {
                console.log(error.text);
                setNotifications((pv) => [failNoti(), ...pv]);
            });
    };
    return (
        <div id="contact">

            <div className="bg-white  flex items-center justify-center">
                <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
                    <AnimatePresence>
                        {notifications.map((n) => (
                            <Notification removeNotif={removeNotif} {...n} key={n.id} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>


            

            <motion.div className=" flex justify-center bg-transparent " 
          
            >
                <p className=" absolute text-md text-white md:text-lg font-poppins font-small z-10 pt-10 "> CONTACT</p>
                <h3 className=" absolute text-4xl font-poppins text-teal-300 md:text-5xl  font-semibold  z-10 pt-16 "> My Contact</h3>
            </motion.div>
            <div className="w-full   max-h-[200vh] min-h-screen   flex justify-center  items-center  bg-transparent rounded-3xl" >

                <div className=' overflow-hidden h-screen w-full '>
                    <StarBkd />
                </div>
                < motion.div className='absolute  w-full flex  justify-center mt-10   border border-[#ffffff00] rounded-2xl backdrop:blur-3xl'
                 initial={{
                    opacity: 0,
                    scale:0,
                    y: 100,
            
                }}
            
                whileInView={{
                    opacity: 1,
                    scale:1,
                    y: 0,
                    transition: {
                        duration: 1,
            
                    }
                }}
                viewport={{ once: false }}
                >
   <form ref={form} onSubmit={sendEmail}  className=' w-[80%]   lg:w-[50%]  mx-4'>

<div class="relative float-label-input">
    <input  type="text" name="from_name" placeholder=" " className=" block text-white  w-full bg-[#64646400] focus:outline-none focus:shadow-outline border border-white rounded-md py-3  px-3  appearance-none leading-normal focus:border-teal-400" />
    <label for="name" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker bg-transparent">Name</label>
</div>
<div class="relative float-label-input">
    <input type="text" name="from_email" placeholder=" " className="block text-white w-full bg-[#191a1a00] focus:outline-none focus:shadow-outline border border-white rounded-md py-3 px-3  appearance-none leading-normal focus:border-teal-400" />
    <label for="name" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker bg-transparent">Your Email</label>
</div>
<div class="relative float-label-input">
    <textarea type="text" name="message" id="name" placeholder=" " className="block  text-white w-full bg-[#191a1a] focus:outline-none focus:shadow-outline border border-white rounded-md py-3 px-3  appearance-none leading-normal focus:border-teal-400" />
    <label for="name" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker bg-transparent">Meassage</label>
</div>
<div class="relative float-label-input">
    <input type="submit" value="Send" className=" z-auto w-full text-white  rounded-xl h-10 bg-[#2828289c]  hover:bg-[#2c2c2c]" />
</div>

</form>

                </motion.div>

            </div>

        </div>

    )
}

export default Contact






const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
    useEffect(() => {
        const timeoutRef = setTimeout(() => {
            removeNotif(id);
        }, NOTIFICATION_TTL);

        return () => clearTimeout(timeoutRef);
    }, []);

    return (
        <motion.div
            layout
            initial={{ y: -15, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text- bg-white pointer-events-auto"
        >
            <FiCheckSquare className=" mt-0.5" />
            <span>{text}</span>
            <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
                <FiX />
            </button>
        </motion.div>
    );
};



const waitNoti = () => {
    const data = {
        id: Math.random(),
        text: `Wait your message is sending........`,
    };

    return data;
};

const successNoti = () => {
    const data = {
        id: Math.random(),
        text: `your message send successfuly`,
    };

    return data;
};
const failNoti = () => {
    const data = {
        id: Math.random(),
        text: `did,t able to send your message try to contact on e-mail`,
    };

    return data;
};