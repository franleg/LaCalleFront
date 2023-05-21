import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export const Clock = () => {
    return (
        <div className='clock-container'>
            <div className='clock'>
                <p>
                    <FontAwesomeIcon icon={faClock} /> 10:00
                </p>
            </div>
            <div>
                <p>Tienes 10 minutos para realizar la compra.</p>
            </div>
        </div>
    )
}
