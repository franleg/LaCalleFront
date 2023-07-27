import React, { useState } from 'react';
import './Promotions.css';
import { Accordion } from '../Accordion/Accordion';
import PromotionService from '../../../services/Promotions';

export const PromotionForm = () => {
    const [promotions, setPromotions] = useState([
        { id: 1, title: 'Precio Estándar', days: [], field5Price: '', field8Price: '' },
        { id: 2, title: 'Súper Promo', days: [], field5Price: '', field8Price: '' },
        { id: 3, title: 'Horarios Especiales', days: [], field5Price: '', field8Price: '' }
    ]);

    const generateTimes = (startHour, endHour) => {
        const times = [];
        for (let hour = startHour; hour <= endHour; hour++) {
        const time = `${hour}:00 - ${hour + 1}:00`;
        times.push(time);
        }
        return times;
    };

    const weekdays = [
        { day: 'Lunes', times: generateTimes(10, 23) },
        { day: 'Martes', times: generateTimes(10, 23) },
        { day: 'Miércoles', times: generateTimes(10, 23) },
        { day: 'Jueves', times: generateTimes(10, 23) },
        { day: 'Viernes', times: generateTimes(10, 23) },
        { day: 'Sábado', times: generateTimes(9, 22) },
        { day: 'Domingo', times: generateTimes(9, 22) },
    ];

    const handlePriceChange = (e, promotionId, field) => {
        const updatedPromotions = promotions.map((promotion) => {
            if (promotion.id === promotionId) {
                return { ...promotion, [field]: e.target.value };
            }
            return promotion;
        });
        setPromotions(updatedPromotions);
    };

    const handleDaySelect = (promotionId, day, times) => {
        const updatedPromotions = promotions.map((promotion) => {
            if (promotion.id === promotionId) {
                const updatedDays = promotion.days.find((selectedDay) => selectedDay.day === day)
                    ? promotion.days.map((selectedDay) =>
                        selectedDay.day === day ? { day, times } : selectedDay
                        )
                    : [...promotion.days, { day, times }];
                return { ...promotion, days: updatedDays };
            }
            return promotion;
        });
        setPromotions(updatedPromotions);
    };
  
    const handleSubmit = (promotion) => {
        if (promotion.days.length === 0 || promotion.field5Price === '' || promotion.field8Price === '') {
            console.log('Completar todos los campos');
            return;
        }
        try {
            const service = new PromotionService();
            service.createPromotion(promotion, callbackSuccess, callbackError);
        } catch (error) {
            console.error('Error al crear la promoción:', error);
        } 
    };

    const callbackSuccess = (res) => {
        console.log(res.data);
    }     
      
    const callbackError = (err) => {
        console.log(err);
    }



    return (
        <div className="promotions-container">
        {promotions.map((promotion) => (
            <div className="promotion-form" key={promotion.id}>
            <h2>{promotion.title}</h2>
            {weekdays.map((weekday) => (
                <Accordion
                key={weekday.day}
                day={weekday.day}
                times={weekday.times}
                onDaySelect={(day, times) => handleDaySelect(promotion.id, day, times)}
                selectedTimes={
                    promotion.days.find((selectedDay) => selectedDay.day === weekday.day)?.times || []
                }
                />
            ))}

            <div className="prices">
                <div>
                <label htmlFor={`field5-price-${promotion.id}`}>Precio Cancha de 5:</label>
                <input
                    type="text"
                    id={`field5-price-${promotion.id}`}
                    name={`field5-price-${promotion.id}`}
                    value={promotion.field5Price}
                    onChange={(e) => handlePriceChange(e, promotion.id, 'field5Price')}
                />
                </div>
                <div>
                <label htmlFor={`field8-price-${promotion.id}`}>Precio Cancha de 8:</label>
                <input
                    type="text"
                    id={`field8-price-${promotion.id}`}
                    name={`field8-price-${promotion.id}`}
                    value={promotion.field8Price}
                    onChange={(e) => handlePriceChange(e, promotion.id, 'field8Price')}
                />
                </div>
            </div>
            <button onClick={() => handleSubmit(promotion)}>Enviar al backend</button>
            </div>
        ))}
        </div>
    );
};
