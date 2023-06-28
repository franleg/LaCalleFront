import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export const Clock = () => {
  const [remainingTime, setRemainingTime] = useState(10 * 60); // Tiempo inicial en segundos (10 minutos)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Función para formatear los segundos en formato de minutos:segundos
  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='clock-container'>
        <div className='clock'>
            <p>
                <FontAwesomeIcon icon={faClock} />
                &nbsp;
                {formatTime(remainingTime)}
            </p>
        </div>
        <div>
            <p>Tienes 10 minutos para realizar la compra.</p>
        </div>
    </div>
  );
}