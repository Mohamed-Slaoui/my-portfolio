import { Link } from 'react-router-dom'
import menuIcon from '../assets/icons/menu-01.svg'
import closeIcon from '../assets/icons/close.svg'
import LogoImage from '../assets/images/logo.png'
import { AnimatePresence, motion } from 'framer-motion';

type menuProps = {
    isMenuOpen: boolean,
    toggleMenu: () => void
}

const Navbar = ({ isMenuOpen: isOpen, toggleMenu }: menuProps) => {
    
    const animation = {
        start: { opacity: 0, x: 20, },
        animate: { opacity: 1, x: 0 },
        end: { opacity: 0, x: 20 }
    }

    const links = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "Skills",
            path: "/skills"
        },
        {
            id: 3,
            title: "About",
            path: "/about"
        },
        {
            id: 4,
            title: "Contact",
            path: "/contact"
        },
    ]
    return (
        <div className="w-full relative h-10 p-8 m-4 flex items-center justify-between">
            <Link to="/" className=''>
                <img 
                    src={LogoImage} 
                    alt="logo" 
                    className='invert w-12 h-9 object-contain'
                />
            </Link>
            <ul className='flex space-x-3 md:lg:space-x-8 xs:hidden md:lg:flex'>
                {links.map(i => (
                    <Link
                        key={i.id}
                        to={i.path}
                        className='group relative'
                    >
                        {i.title}
                        <div className={'w-full h-[1px] bg-white z-50 absolute bottom-0 left-0 origin-left transition-all duration-500 transform scale-x-0 group-hover:scale-x-100'}></div>
                    </Link>
                ))}
            </ul>
            {/* small devices */}
            <div className='md:lg:hidden relative z-30 transition-all delay-500 duration-500 cursor-pointer'>
                {
                    !isOpen ? (
                        <motion.img
                            src={menuIcon}
                            alt="menu"
                            className={`${!isOpen ? 'invert' : 'invert-0'} size-9 hover:opacity-50 duration-300`}
                            onClick={toggleMenu}
                        />
                    ) : (
                        <motion.img
                            src={closeIcon}
                            alt="close"
                            className={`${!isOpen ? 'invert' : 'invert-0'} size-9 hover:opacity-50 duration-300`}
                            onClick={toggleMenu}
                        />
                    )
                }
            </div>
            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                        variants={animation}
                        initial="start"
                        animate="animate"
                        exit="end"

                        className='absolute right-7 top-3 bg-white w-48 h-52 z-10'
                    >
                        <ul className='flex flex-col text-black items-center space-y-4 justify-center h-full'>
                            {links.map(i => (
                                <Link
                                    key={i.id}
                                    to={i.path}
                                    className='group relative z-50'
                                >
                                    {i.title}
                                    <div className={`w-full h-[1px] ${!isOpen ? 'bg-white' : 'bg-black'} absolute bottom-0 left-0 origin-left transition-all duration-500 transform scale-x-0 group-hover:scale-x-100`}></div>
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </div>

    )
}
export default Navbar