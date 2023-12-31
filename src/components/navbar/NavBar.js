"use client";
import React from 'react'
import dynamic from "next/dynamic";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {

    const [isOpen, setisOpen] = useState(false);

    function handileClick() {
        if (isOpen == false) {
            setisOpen(true)
        }
        else { setisOpen(false) }

    }

    return (
        <div>

            <nav className=" fixed w-full z-20 top-0 start-0 bg-[#121212c9] backdrop-blur-3xl ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div

                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >

                        <span className="self-center text-2xl font-pixal font-semibold whitespace-nowrap dark:text-teal-300">
                            [S.S]
                        </span>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="text-white border  bg-transparent hover:text-teal-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-transpirant dark:hover:text-teal-300 dark:hover:border-teal-300 dark:focus:ring-teal-800"
                        >
                            Download CV
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-transparent"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={handileClick}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <h1 className=' font-black text-xl'>X</h1> : <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>}

                        </button>
                    </div>

                    <motion.div
                        className=
                        {isOpen ? " items-center justify-between w-full md:flex md:w-auto md:order-1" : " hidden items-center justify-between w-full md:flex md:w-auto md:order-1"}
                        id="navbar-sticky"

                        initial={{
                            opacity: 0,

                            y: -100,

                        }}

                        animate={{
                            opacity: 1,

                            y: 0,
                            transition: {
                                duration: 1,

                            }
                        }}


                        exit={{

                            opacity: 0,

                            y: -100,
                        }}
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  font-sc  text-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <AnchorLink href="#home">

                                    <a

                                        className="block py-2 px-3 text-white md:p-0  hover:text-teal-300 hover:scale-105 duration-300 "
                                        aria-current="page"
                                    >
                                        Home
                                    </a>

                                </AnchorLink>
                            </li>

                            <li>
                                <AnchorLink href="#skills">
                                    <a
                                        className="block py-2 px-3 text-white md:p-0  hover:text-teal-300 hover:scale-105 duration-300 "
                                    >
                                        My Skills
                                    </a>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#exp">
                                    <a
                                        className="block py-2 px-3 text-white md:p-0  hover:text-teal-300 hover:scale-105 duration-300 "
                                    >
                                        My Works
                                    </a>
                                </AnchorLink>
                            </li>

                            <li>
                                <AnchorLink href="#contact">
                                    <a
                                        className="block py-2 px-3 text-white md:p-0  hover:text-teal-300 hover:scale-105 duration-300 "
                                    >
                                        Contact Me
                                    </a>
                                </AnchorLink>
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </nav>



        </div>
    )
}

export default dynamic(() => Promise.resolve(NavBar), { ssr: false })
