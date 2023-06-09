import './Botao.css'
import { motion } from 'framer-motion';

type BotaoProps = {
    text: string;
    className?: string;
    onClick?: any
  };

export default function Botao(props: BotaoProps) {
    return (
        <motion.button
            onClick={props.onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale:0.95 }}
            className={`Botao font-bold text-white hover:shadow-white hover:shadow-sm transition-all ${props.className}`}>
            {props.text}
        </motion.button>
    )
}