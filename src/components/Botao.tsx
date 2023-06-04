import './Botao.css'

type BotaoProps = {
    text: string;
  };

export default function Botao(props: BotaoProps) {
    return (
        <button className="Botao font-bold text-white">
            {props.text}
        </button>
    )
}