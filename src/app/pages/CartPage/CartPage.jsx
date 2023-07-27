import React, { useEffect, useState } from 'react';
import { Cart } from '../../components/Cart/Cart';
import { Clock } from '../../components/Clock/Clock';
import { Payment } from '../../components/Payment/Payment';
import './CartPage.css';
import { ModalExpire } from '../../components/Modal/ModalExpire';
import { selectedReservation } from '../../../store/slices/reservation';
import { selectedDate } from '../../../store/slices/data';
import { selectToken } from '../../../store/slices/token';
import { useSelector } from 'react-redux';

export const CartPage = () => {
    const [isExpired, setIsExpired] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { field, time, price } = useSelector(selectedReservation);
    const date = useSelector(selectedDate);
    const token = useSelector(selectToken);

    const showModal = () => setModalIsOpen(true);

    useEffect(() => {
        if (isExpired) {
            showModal();
        }
      }, [isExpired]);

    return (
        <>
            <div className='cart-container'>
                <h1 className='title-services'>Carrito</h1>
                <div className="line-container">
                <p className="line"></p>				
                </div>
                <Clock setIsExpired={setIsExpired} />
                <Cart field={field} time={time} price={price} date={date} />
                <Payment field={field} time={time} price={price} date={date} token={token} />              
            </div>
            <ModalExpire modalIsOpen = { modalIsOpen } />
        </>
    );
};