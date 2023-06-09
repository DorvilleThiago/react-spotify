import { motion } from 'framer-motion';

export default function Backdrop(props:any) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
            onClick={props.onClick}
            style={{backgroundColor: '#00000060'}}
            className='absolute top-0 left-0 h-screen w-screen flex items-center justify-center'>
            {props.children}
        </motion.div>
    )
}