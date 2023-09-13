import React, { useEffect } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';

const PaymentButton = ({ reservation }) => {

  const createPreference = (reservation) => {
    fetch('http://localhost:8081/api/mercadoPago/createPreference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
            {
              title: `Alquiler ${reservation.field}`,
              description: '',
              picture_url: '',
              category_id: '',
              quantity: 1,
              currency_id: 'ARS',
              unit_price: reservation.price
            }
        ],
        reservation
      })
    })
      .then((response) => response.json())
      .then((data) => window.location.replace(data.preference_url))
      .catch((error) => console.error('Error al obtener el preference_id:', error));
  };

  useEffect(() => {
    initMercadoPago('TEST-e3c26765-daf6-4c15-9b9d-42329fbd7f8d');
  }, []);

  return (
    <div>
        <button className="btn-buy" onClick={ () => createPreference(reservation) }>Finalizar compra</button>
    </div>
  );
};

export default PaymentButton;

// import React, { useEffect, useState } from 'react';
// import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// const PaymentButton = ({ reservation }) => {
//   const [preferenceId, setPreferenceId] = useState('');

//   const createPreference = () => {
//     fetch('http://localhost:8081/api/createPreference', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ items: [{
//         title: `Alquiler ${reservation.field}`,
//         description: '',
//         picture_url: '',
//         category_id: '',
//         quantity: 1,
//         currency_id: 'ARS',
//         unit_price: parseInt(reservation.price)
//       }]})
//     })
//       .then((response) => response.json())
//       .then((data) => setPreferenceId(data.preference_id))
//       .catch((error) => console.error('Error al obtener el preference_id:', error));
//   };

//   // Obtén el preference_id desde el backend al cargar el componente
//   useEffect(() => {
//     initMercadoPago('TEST-e3c26765-daf6-4c15-9b9d-42329fbd7f8d'); // Reemplaza 'YOUR_PUBLIC_KEY' con tu clave pública de Mercado Pago
//   }, []);

//   return (
//     <div>
//       {preferenceId ? (
//         <Wallet initialization={{ preferenceId }} />
//       ) : (
//         <button className="btn-buy" onClick={ () => createPreference() }>Finalizar compra</button>
//       )}
//     </div>
//   );
// };

// export default PaymentButton;
