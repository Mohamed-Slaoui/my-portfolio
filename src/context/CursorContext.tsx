import { createContext, useEffect, useState } from "react"

export const CursorContext = createContext({});

const CursorProvider = ({ children }) => {

    const [cursorPosition, setCursorPosition] = useState({
        x: 0,
        y: 0
    })

    const [cursorBG, setCursorBG] = useState("default");

    useEffect(() => {
        const move = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', move)

        return () => {
            window.removeEventListener("mousemove", move)
        }
    })


    const cursorVariant = {
        default: {
            x: cursorPosition.x - 5,
            y: cursorPosition.y - 5,
            backgroundColor: '#ffffff'
        },

        text: {
            width: "180px",
            height: "180px",
            x: cursorPosition.x - 75,
            y: cursorPosition.y - 75,
            backgroundColor: '#fff',
            mixBlendMode: "difference",
            
        }
    }

    const mouseEnterHandler = () => {
        setCursorBG("text")
    }

    const mouseLeaveHandler = () => {
        setCursorBG("default")
    }

    return (
        <CursorContext.Provider value={{ cursorVariant, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
            {children}
        </CursorContext.Provider>
    )
}
export default CursorProvider