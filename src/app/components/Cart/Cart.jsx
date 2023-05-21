import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Cart = () => {

    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}; 
    return (
        <div className='cart'>
            <h2>Comprando...</h2>
            <div className='cart-detail'>
                <div className='info-detail'>
                    <h4>Reserva</h4>
                    <p>Lacroze 5553, Villa Ballester</p>
                    <p>{ new Date().toLocaleDateString("es-ES", options) }</p>
                    <p>16:00 a 17:00</p>
                </div>
                <div className='detail-container'>
                    <div className='detail'>
                        <h4>Servicio</h4>
                        <p>Cancha de 5</p>
                    </div>
                    <div className='detail'>
                        <h4>Precio</h4>
                        <p>$17.000</p>
                    </div>
                    <div className='detail'>
                        <h4>Cantidad</h4>
                        <p>1</p>
                    </div>
                    <div className='detail'>
                        <h4>Subtotal</h4>
                        <p>$17.000</p>
                    </div>
                    <div className='delete-purchase'>
                        <p><FontAwesomeIcon icon={faTrash} /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
