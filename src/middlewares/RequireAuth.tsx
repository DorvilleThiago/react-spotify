import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

export const RequireAuth = ({ children }: any) => {

    const [pagina, setPagina] = useState(<div className="w-screen h-screen flex items-center justify-center">
        <Loader />
    </div>)
  const location = useLocation();

  useEffect(() => {
   const log = async() => {
      const resposta = await fetch('http://127.0.0.1:5000/token', {
        method: 'GET',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': ''+localStorage.getItem('token')
         }
      });
      if (resposta.status === 200) {
        setPagina(children)
      } else {
        setPagina(<Navigate to='/login'/>)
      }
    }
  log()
  }, [location])
  
  return pagina
  
};
