import { useState } from 'react';
import PaymentButton from '../PaymentButton/PaymentButton';
//const { REACT_APP_MERCADOPAGO_ACCESS_TOKEN } = process.env

export const Payment = ({ field, time, price, token, date }) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const [ day, month, year ] = date.split("/");
    const convertedDate = new Date(year, month -1, day);

    const reservation = {
        token,
        field: field,
        date: convertedDate,
        time: time,
        price: parseInt(price)
    };

    return (
        <div className='payment-container'>
            <h2>Selecciona tu forma de pago</h2>
            <form className="payment-select">
                <label>
                <input
                    type="radio"
                    value="mercadopago"
                    checked={selectedOption === "mercadopago"}
                    onChange={handleOptionChange}
                />
                <span>Reservar con seña mínima</span>
                </label>
                <label>
                <input
                    type="radio"
                    value="transferencia"
                    checked={selectedOption === "transferencia"}
                    onChange={handleOptionChange}
                />
                <span>Pago total anticipado</span>
                </label>
            </form>
            <div className='total-container'>
                <h3>Total ${price}</h3>
            </div>
            <div className='purchaseButton-container'>
                <PaymentButton reservation = {reservation } />
            </div>
        </div>
    );
};


