const Card3 = () => {
    return (
        <div
           
            className=" flex justify-center  items-center group relative h-[450px] w-[300px] lg:w-[400px] overflow-hidden duration-300 hover:scale-110"
        >

            <div className="w-80 h-[22rem] lg:w-full  rounded-3xl  bg-[url('/projectCardImages/3.jpg')] overflow-hidden   "

                

            >
                <div className=" px-7 pt-12">
                    <h3 className="text-2xl py-3 text-white  md:text-3xl font-bold  font-poppins">
                    PetLink
                    </h3>
                    <p className="text-sm  text-gray-400  md:text-base  font-normal  font-poppins ">
                    

                    PetLink: A hub for pet adoptions, playdates, and joy. Connect with furry friends and start your adventure!
                    </p>
                    <div className=" flex gap-3 "><p className="text-sm border  my-4 py-1 px-1 rounded-lg text-gray-400  md:text-sm  font-normal  font-poppins ">
                    MERN Stack
                    </p>
                    <p className="text-sm border  my-4 py-1 px-1 rounded-lg text-gray-400  md:text-sm  font-normal  font-poppins ">
                    Framer-Motion
                    </p>
                   
                    </div>
                    
                    <a href="https://github.com/savinshaij/waste-connect/tree/main" target="_blank" rel="noreferrer" >
                    <button className="absolute bottom-14 left-4 right-4 z-20 rounded-3xl border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                        open github
                    </button>
                    </a>
                </div>

            </div>


        </div>
    );
};

export default Card3;