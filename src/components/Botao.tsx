import './Botao.css'

type BotaoProps = {
    text: string;
    className?: string;
  };

export default function Botao(props: BotaoProps) {
    return (
        <button className={`Botao font-bold text-white hover:shadow-white hover:shadow-sm transition-all ${props.className}`}>
            {props.text}
        </button>
    )
}