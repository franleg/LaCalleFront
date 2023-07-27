import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Cart = ({field, date, time, price}) => {

    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}; 
    const convertFromStringToDate = (responseDate) => {
        let dateComponents = responseDate.split('T');
        let datePieces = dateComponents[0].split("/");
        let convertedDate = new Date(`${datePieces[2]}/ ${datePieces[1]}/ ${datePieces[0]}`).toLocaleDateString("es-ES", options);
        return convertedDate
    }
    
    const convertedDate = convertFromStringToDate(date);

    return (
        <div className='cart'>
            <h2>Detalle de compra</h2>
            <div className='cart-detail'>
                <div className='info-detail'>
                    <p>Lacroze 5553, Villa Ballester</p>
                    <p>{ convertedDate }</p>
                    <p>{ `${time.start} a ${time.end} hs` }</p>
                </div>
                <div className='detail-container'>
                    <div className='detail'>
                        <h4>Servicio</h4>
                        <p>{ field }</p>
                    </div>
                    <div className='detail'>
                        <h4>Precio</h4>
                        <p>${ price }</p>
                    </div>
                    <div className='detail'>
                        <h4>Cantidad</h4>
                        <p>1</p>
                    </div>
                    <div className='detail'>
                        <h4>Subtotal</h4>
                        <p>${ price }</p>
                    </div>
                    <div className='delete-purchase'>
                        <p><FontAwesomeIcon icon={faTrash} /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
