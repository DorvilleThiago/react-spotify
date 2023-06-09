import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import './Modal.css'

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 100
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

export default function Modal(props:any) {
    return (
        <Backdrop
            onClick={props.handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className="Modal z-10"
            variants={dropIn}
            initial="hidden"
            animate="visible"
                exit="exit">
                <div className="w-full">
                    <h1 className="text-white font-bold text-[40px] max-[400px]:text-[32px]">RESULTADOS</h1>
                </div>
                <div
                className={`mt-6 h-full w-full flex flex-col overflow-y-auto`}>
                {props.children}
                </div>
            </motion.div>
        </Backdrop>
    )
}