import { useNavigate } from "react-router-dom";
import { selectTokenExpiresAt } from "../../../store/slices/token";
import { useDispatch, useSelector } from "react-redux";
import { setReservation } from "../../../store/slices/reservation";
import { ModalDetail } from '../Modal/ModalDetail';
import { useRef, useState } from "react";

export const Timetable = ({ time, date, field, showModal }) => {

    const navigate = useNavigate();

    const [ detailModalIsOpen, setDetailModalIsOpen ] = useState(false);

    let detailModalRef = useRef();
    let closeModalRef = useRef();
    let crossCloseRef = useRef();

    const tokenExpiresAt = useSelector(selectTokenExpiresAt);
    const isAuthenticated = Date.now() < new Date(tokenExpiresAt).getTime();

    const viewDetails = () => setDetailModalIsOpen(true);

    const closeModal = (e) => {
        if (!detailModalRef.current.contains(e.target) || e.target === crossCloseRef.current) {
          setDetailModalIsOpen(false)
        }
      };

    const dispatch = useDispatch();

    const goToCart = (selectedTime) => {
        const reservation = {
            date,
            time: {
                start: selectedTime.start,
                end: selectedTime.end
            },
            price: selectedTime.price,
            field
        }
        dispatch(setReservation(reservation));
        if (!isAuthenticated) {
            showModal();
        } else {
            navigate('/carro');
        }
    }

    return (
        <div className="time-container">
            <div className="time-info">
                <div className='info'>
                    <h4 className="lacalle-text">La Calle Club</h4>
                    <div className="time-detail">
                        <p onClick={ viewDetails }>Ver detalles</p>
                    </div>
                </div>
                <div className='time'>
                    <div>
                        <h5>Comienza</h5>
                        <p className='hour'>{ time.start }</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <h5>Termina</h5>
                        <p className='hour'>{ time.end }</p>
                    </div>
                </div>
                <button 
                    className='btn btn-primary' 
                    onClick={ () => goToCart(time) }
                >
                    Reservar
                </button>
            </div>
            <ModalDetail 
                date={ date }
                field={ field } 
                time= { time }
                price={ time.price }
                closeModal={ closeModal } 
                detailModalIsOpen={ detailModalIsOpen } 
                detailModalRef={ detailModalRef } 
                closeModalRef={ closeModalRef }
                crossCloseRef= {crossCloseRef}
            />
        </div>
    )
}
