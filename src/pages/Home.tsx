import landingTransition from '../transitions/LandingTransition';
import Hero from './../components/Hero';
import { motion } from 'framer-motion';

const Home = () => {

    return (
        <motion.div
            className='flex flex-col items-center justify-between h-full'
            variants={landingTransition}
            initial="start"
            animate="animate"
            exit="end"
            transition={
                { duration: 0.4 }
            }
        >
            <Hero />
        </motion.div>
    )
}
export default Home