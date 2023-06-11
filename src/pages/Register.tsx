import './appearAnimation.css'
import Botao from "../components/Botao";
import Logo from "../components/Logo";
import MyInput from "../components/MyInput";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import validateCredentials from '../services/validateCredentials';
import { registerUser } from '../services/registerUser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [username, setUsername] = useState<string>('');
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('chamando')
        if (email && password && username.length > 0 && username.length < 20 && validateCredentials(email,password)) { 
            const token = await registerUser(username, password, email);
            if (token) { 
                
                localStorage.setItem('token', token);
                navigate('/');
                toast.success('Registrado com sucesso :)', {
                    className: 'bg-black text-white font-bold'
                  });
            } else {
                toast.error('Erro ao fazer registro :(', {
                    className: 'bg-black text-white font-bold'
                  });
            }
        }
    }

    return (
        <main className="pageComponent flex items-center max-[400px]:justify-around justify-center h-screen flex-col pt-[20px] pb-[20px]">
            <section>
                <Logo/>
            </section>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center min-[400px]:mt-8">
                <MyInput
                    onChange={(e) => { setUsername(e.target.value) }}
                    className='mb-3'
                    text="Nome de usuário"
                    type="text" />
                <MyInput
                    onChange={(e) => { setEmail(e.target.value) }}
                    className='mb-3'
                    text="E-mail"
                    type="email" />
                <MyInput
                    onChange={(e) => { setPassword(e.target.value) }}
                    text="Senha"
                    type="password" />
                <Botao
                    className="mt-6"
                    text="Registrar-se" />
                <Link to="/login" className="text-center text-[12px] mt-1 opacity-75">
                    Ou clique aqui para se fazer login</Link>
            </form>
        </main>
    )
}