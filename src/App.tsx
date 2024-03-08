import { useContext, useState } from "react";
import Navbar from "./components/Navbar"
import Index from "./routes"
import { CursorContext } from "./context/CursorContext";
import { motion } from 'framer-motion';
import Background from './assets/images/bg.png'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { cursorVariant, cursorBG } = useContext(CursorContext);

  return (
    <div
      className="bg-black/[0.96] lg:px-[15%] font-poppins transition-all z-50 delay-75 w-screen h-screen text-white flex flex-col relative items-center"
    >
      <img className="absolute object-cover w-full h-full -z-10 opacity-45" src={Background}/>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Index />

      <motion.div
        variants={cursorVariant}
        animate={cursorBG}
        className="size-3 fixed top-0 left-0 pointer-events-none z-50 bg-white rounded-full"></motion.div>
    </div>
  )
}


export default App
