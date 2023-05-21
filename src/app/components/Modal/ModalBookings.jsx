import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../../../store/slices/data';
import { Calendar } from '../Calendar/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './ModalBookings.css';

export const ModalBookings = ({ innerRef, modalIsOpen, closeModal, crossCloseRef }) => {

    const [ calendarIsOpen, setCalendarIsOpen ] = useState(false);

    const [ date, setDate ] = useState(new Date().toLocaleDateString ("es-ES"));

    const [field, setField] = useState("Cancha de 5");

    let calendarRef = useRef();

    let daysRef = useRef();

    const dispatch = useDispatch();

    const getSchedules = () => {
        dispatch (
            setData({
                field: field,
                date: date
            })
        )
        localStorage.setItem("Date", JSON.stringify(date));
        localStorage.setItem("Field", JSON.stringify(field));
    }

    const showCalendar = () => setCalendarIsOpen(true);

    const closeCalendar = (e, dateInCalendar) => {
        if (!calendarRef.current.contains(e.target) || dateInCalendar) {
            setTimeout(() => {
                setCalendarIsOpen(false)
            }, 300);
        }
        setDate(dateInCalendar);
    }
  
    return (
        <>
            <div className= { `modal-container ${modalIsOpen && 'open'}` } onClick={ closeModal } >
                <div className='modal-booking' ref= {innerRef} >
                    <h1>
                        Reserva tu cancha
                    </h1>
                    <p>Elegí tipo de cancha y fecha para tu reserva:</p>
                    <div className="booking-container">
                        <div>
                            <h4 className='title-option'>Cancha:</h4>
                            <div className="select">
                                <select name="select" id="select" value={ field } onChange={ (event) => setField( event.target.value) }>
                                    <option className="option" value="Cancha de 5">Cancha de 5</option>
                                    <option className="option" value="Cancha de 8">Cancha de 8</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h3 className='title-option'>Fecha:</h3>
                            <div className='open-calendar' onClick={ showCalendar }>
                                <FontAwesomeIcon icon={faCalendarDays} style={{color: "222227"}} />
                                <p className='date'>{ date }</p> 
                            </div>
                        </div>
                    </div>
                    <NavLink to='/servicios/reservas/horarios' className="button-booking" onClick={ getSchedules } >
                        <span>Consultar horarios</span>
                    </NavLink>
                    <div className="cross-close" onClick={ closeModal } ref= { crossCloseRef }>x</div>
                </div>
            </div>
            <Calendar closeCalendar={ closeCalendar } calendarIsOpen={ calendarIsOpen } calendarRef={ calendarRef } daysRef = { daysRef } />
        </>
    )
}
