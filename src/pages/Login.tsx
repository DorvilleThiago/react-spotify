import './appearAnimation.css'
import Botao from "../components/Botao";
import Logo from "../components/Logo";
import MyInput from "../components/MyInput";

export default function Login() {
    return (
        <main className="pageComponent flex items-center max-[400px]:justify-around justify-center h-screen flex-col pt-[20px] pb-[20px]">
            <section>
                <Logo/>
            </section>
            <section className="flex flex-col justify-center min-[400px]:mt-8">
                <MyInput
                    className='mb-3'
                    text="E-mail"
                    type="email" />
                <MyInput text="Senha" type="password" />
                <Botao
                    className="mt-6"
                    text="Fazer Login" />
                <p className="text-center text-[12px] mt-1 opacity-75">
                    Ou clique aqui para se registrar</p>
            </section>
        </main>
    )
}