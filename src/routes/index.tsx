import { Route, Routes, useLocation } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Skills from "../pages/Skills"
import { AnimatePresence } from "framer-motion"

const Index = () => {
    const location = useLocation();
    return (
        <AnimatePresence initial={true} mode="wait" >
            <Routes key={location.pathname} location={location} >
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}
export default Index