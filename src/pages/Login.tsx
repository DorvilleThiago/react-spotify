import './appearAnimation.css'
import Botao from "../components/Botao";
import Logo from "../components/Logo";
import MyInput from "../components/MyInput";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getToken } from '../services/getToken';
import validateCredentials from '../services/validateCredentials';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (email && password && validateCredentials(email,password)) { 
            const token = await getToken(email, password);
            if (token) {
                localStorage.setItem('token', token);
                navigate('/');
                toast.success('Logado com sucesso :)', {
                    className: 'bg-black text-white font-bold'
                  });
            } else {
                toast.error('Erro ao fazer login :(', {
                    className: 'bg-black text-white font-bold'
                  });
                  
            }
        }
    }

    return (
        <main className="pageComponent flex items-center max-[400px]:justify-around justify-center h-screen flex-col pt-[20px] pb-[20px] overflow-hidden">
            <section>
                <Logo/>
            </section>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center min-[400px]:mt-8">
                <MyInput
                    className='mb-3'
                    text="E-mail"
                    type="email"
                    onChange={(e) => { setEmail(e.target.value) }} />
                <MyInput
                    onChange={(e) => { setPassword(e.target.value) }}
                    text="Senha"
                    type="password" />
                <Botao
                    className="mt-6"
                    text="Fazer Login" />
                <Link to='/register' className="text-center text-[12px] mt-1">
                    Ou clique aqui para se registrar</Link>
            </form>
            
        </main>
    )
}