import { useNavigate } from 'react-router-dom';
import './ModalLogin.css';

export const ModalExpire = ({ modalIsOpen }) => {

    const navigate = useNavigate();

    const returnHome = () => {
        localStorage.removeItem('remainingTime')
        navigate("/");
    }

    return (
        <div className= { `modal-container ${modalIsOpen && 'open'}` }>
            <div className='modal-content'>
                <h2>La sesión ha expirado</h2>
                <p>Para continuar con la compra tenés que volver al inicio y comenzar nuevamente.</p>
                <button onClick={returnHome} className="button-booking">
                    <span>Volver a iniciar</span>
                </button>
            </div>
        </div>
    )
}
