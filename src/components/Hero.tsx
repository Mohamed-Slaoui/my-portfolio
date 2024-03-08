import { useContext } from 'react';
import imageProfile from '../assets/images/Profile.png'
import { TypewriterEffectSmooth } from './ui/Typewriter-Effect';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

const Hero = () => {
    const words = [
        {
            text: "Software",
        },

        {
            text: "Develper.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    
    const { mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

    return (
        <div className='flex flex-col gap-4 items-center'>
            <div className='flex flex-col items-center space-y-3'>
                <img
                    src={imageProfile}
                    alt=""
                    className='size-48 rounded-full cursor-pointer transition-all delay-75'
                />
                <h1 className='font-bold text-gray-300 text-lg'>Hi, I'am Mohamed</h1>
            </div>

            <TypewriterEffectSmooth words={words} />

            <motion.p
                className='text-center text-wrap sm:px-2 md:lg:px-52 text-base text-gray-300'
                initial={{ y: -100, opacity:-10 }}
                animate={{ y: 0, opacity:10 }}
                transition={{
                    duration: 0.8
                }}

                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                
            >
                I'm a software developer passionate about web development. Dive into my projects to see how I blend creativity with code.
            </motion.p>

            <button className='bg-white hover:bg-gray-200 text-black px-5 py-3 uppercase'>Learn more</button>


        </div>
    )
}
export default Hero