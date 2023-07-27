import { useState } from 'react';
//import BookingService from "../../../services/Reservation";
const { REACT_APP_MERCADOPAGO_ACCESS_TOKEN } = process.env

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

    const finishPurchase = async() => {
        try {
            const dataMP = [{
                title: `Alquiler ${reservation.field}`,
                description: '',
                picture_url: '',
                category_id: '',
                quantity: 1,
                currency_id: 'ARS',
                unit_price: reservation.price
            }];
            
            const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${REACT_APP_MERCADOPAGO_ACCESS_TOKEN}`
                },
                body: JSON.stringify({
                    items: dataMP,
                    notification_url: 'https://b890-152-168-155-111.ngrok-free.app/notificate'
                })
            });
            const data = await resp.json();
            console.log(data);
            window.location.replace(data.init_point);
            
        } catch (error) {
            console.error(error);
        };
    };

    // const createReservation = () => {
    //     const [ day, month, year ] = date.split("/");
    //     const convertedDate = new Date(year, month -1, day);
    //     try {
    //         const reservation = {
    //             token,
    //             field: field,
    //             date: convertedDate,
    //             time: time,
    //             price: price
    //         };

    //         const service = new BookingService();
    //         service.makeReservation(reservation, callbackSuccess, callbackError);
    //     } catch (error) {
    //         console.error(error);
    //     };
    // };

    // const callbackSuccess = (res) => {
    //     console.log(res.data);
    //     window.location.replace(res.data);
    // };   
  
    // const callbackError = (err) => {
    //     console.log(err.message);
    // };

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
                <button className="btn-buy" onClick={ finishPurchase }>Finalizar compra</button>
            </div>
        </div>
    );
};



