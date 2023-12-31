"use client"; 
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const AboutBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
     
      <button className=" md:ml-10 ml-3  font-normal border-[0.5px] text-sm md:text-base border-[#212121]  bg-transparent text-[#8b8b8b]  py-2 px-4 rounded transition-all hover:bg-[#232323] active:scale-95" 
      onClick={() => setIsOpen(true)}>
                            More about me
                        </button>
      <About isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const About = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#ffff] text-black p-6 rounded-lg w-full max-w-3xl shadow-xl cursor-default relative overflow-hidden"
          >
           
            <div className="relative z-10">
              
              <h3 className="text-3xl font-bold text-center mb-2">
                More About <span className="text-teal-400">Me </span>
              </h3>
              <div className=" overflow-y-scroll max-h-96">
              <p className="text-center mb-6 text-gray-600 font-normal">


              <br/><br/>
Greetings! I&apos;m savin, a passionate B.Tech Computer Science student at VIT University, India. Originating from the diverse and vibrant landscape of India, my journey into the world of technology has been marked by a relentless pursuit of excellence and a commitment to continuous improvement.<br/><br/>

<h2 className=" text-2xl font-semibold font-poppins">Academic Pursuits</h2><br/>

Currently immersed in the dynamic curriculum of B.Tech, I&apos;ve found myself at the intersection of theory and practice, honing my skills in Computer Science. My academic journey has been a transformative experience, shaping my perspective and fueling my enthusiasm for technological innovation.<br/><br/>

<h2 className=" text-2xl font-semibold font-poppins">Unwavering Confidence</h2> <br/>

Confidence is the cornerstone of my approach to challenges. Whether navigating complex coding projects or collaborating in team environments, I believe in the power of unwavering self-assurance. It&apos;s this confidence that propels me to give my best in every endeavor, with the understanding that dedication and resilience lead to growth and improvement.<br/><br/>

<h2 className=" text-2xl font-semibold font-poppins">Commitment to Improvement</h2> <br/>

I see each project not just as a task to be completed but as an opportunity for enhancement. With an unwavering commitment to improvement, I strive to surpass previous achievements and create solutions that stand out. This commitment extends beyond the academic realm into personal projects and extracurricular activities, where I actively seek opportunities to refine my skills and broaden my technological horizons.<br/><br/>

<h2 className=" text-2xl font-semibold font-poppins">Cultural Identity</h2> <br/>

Hailing from India, I bring a rich cultural perspective to my work. The diversity and heritage of my background influence my creativity and problem-solving approach. I am proud to contribute to the global tapestry of technology while staying rooted in the values and traditions that shape me.<br/><br/>

<h2 className=" text-2xl font-semibold font-poppins">Collaborative Spirit</h2> <br/>

I firmly believe that the best ideas are born through collaboration. In my academic and personal pursuits, I actively seek opportunities to work with diverse teams, valuing the insights and perspectives each individual brings to the table. I find inspiration in the collective effort to create solutions that transcend individual capabilities.<br/><br/>

<h2 className=" text-2xl font-semibold font-poppins">Future Aspirations</h2> <br/>

Looking ahead, I am excited about the limitless possibilities the world of technology offers. My goal is not only to meet industry expectations but to redefine them through innovative solutions. I envision a future where my skills and passion contribute to meaningful advancements in the tech landscape.<br/><br/>

<h2 className=" text-2xl font-semibold font-poppins"> Let&apos;s Connect</h2><br/>

Thank you for taking the time to learn more about me. I am eager to connect with fellow enthusiasts, collaborators, and mentors who share a similar passion for technology and innovation. Whether you are here to explore potential collaborations, discuss projects, or simply connect, I welcome the opportunity to engage in a dialogue that goes beyond the digital realm.<br/><br/>

Let&apos;s embark on this journey together, where the pursuit of knowledge, the thrill of innovation, and the joy of collaboration converge!<br/><br/>




              </p>
              </div>
             
              <div className="flex ">
               
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-200 hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutBtn;