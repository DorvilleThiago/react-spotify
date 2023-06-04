import Botao from "../components/Botao";
import InputLargo from "../components/InputLargo";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-screen h-screen pl-6">
            <div className="flex flex-col items-start justify-center gap-12">
                <h1 style={{lineHeight: '61px'}} className="font-bold text-[42px] w-[290px]">O que você quer ouvir hoje, Jorge?</h1>
                <InputLargo />
                <Botao text="Pesquisar" />
            </div>
        </main>
    )
}