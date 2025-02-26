//react
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import Messi from "../../assets/images/leomessi.gif"

const ErrorPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 8000);
    }, [navigate]);

    return (
        <div><h2>La Página que estás buscando no existe!!! Pero no te preocupes, Leo nos indicará para donde ir!!!</h2>
            <div>
                <h2>vas a ir pa' allá en unos segundos 🤣🤣🤣 </h2>
            </div>
            <div>
                <img src={Messi} alt="leomessi" />
            </div>
        </div>
    )
}

export default ErrorPage