import './appearAnimation.css'
import Botao from "../components/Botao";
import InputLargo from "../components/InputLargo";

export default function Home() {

    return (
        <main className="pageComponent flex flex-col min-[360px]:items-center justify-center w-screen h-screen pl-6 pr-6">
            <div className="flex flex-col items-start min-[500px]:items-center justify-center gap-12">
                <h1 className="min-[900px]:text-[50px] leading-[61px] font-bold text-[42px] max-[500px]:w-[290px] min-[500px]:text-center">O que você quer ouvir hoje, Jorge?</h1>
                <InputLargo />
                <Botao text="Pesquisar" />
            </div>
        </main>
    )
}