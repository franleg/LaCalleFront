import { NavLink } from 'react-router-dom';
import './ModalLogin.css';

export const ModalLogin = ({ loginModalIsOpen, closeModal, loginModalRef }) => {
  return (
    <div className= { `modal-container ${loginModalIsOpen && 'open'}` } onClick={ closeModal }>
        <div className="loginModal-container" ref= { loginModalRef }>
            <h2>Debes iniciar sesión para continuar</h2>
            <div>
              <NavLink to={`/session?redirect=/carro`} className="button-booking" >
                <span>Iniciar sesión</span>
              </NavLink>
            </div>
        </div>
    </div>
  )
}
