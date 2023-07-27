import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setField, setDate } from '../../../store/slices/data';
import { Calendar } from '../Calendar/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './ModalBookings.css';

export const ModalBookings = ({ modalRef, modalIsOpen, closeModal, crossCloseRef }) => {

    const [ calendarIsOpen, setCalendarIsOpen ] = useState(false);
    const [ selectedDate, setSelectedDate ] = useState(new Date().toLocaleDateString ("es-ES"));
    const [selectedField, setSelectedField] = useState("Cancha de 5");

    let calendarContainerRef = useRef();
    let calendarRef = useRef();
    let daysRef = useRef();

    const dispatch = useDispatch();

    const setFieldAndDate = () => {
        dispatch(setField(selectedField));
        dispatch(setDate(selectedDate));
    }; 

    const showCalendar = () => setCalendarIsOpen(true);

    const closeCalendar = (e, dateInCalendar) => {
        if (dateInCalendar) {
            const [day, month, year] = dateInCalendar.split('/');
            const date = new Date(year, month - 1, day);
            const selectedDate = new Date(date);
            const currentDate = new Date();
            if (selectedDate >= currentDate.setHours(0, 0, 0, 0)) {
                setTimeout(() => {
                    setCalendarIsOpen(false);
                }, 300);
                setSelectedDate(dateInCalendar);
            }
        }
      
        if (!calendarRef.current.contains(e.target)) {
          setTimeout(() => {
            setCalendarIsOpen(false);
          }, 300);
        }
      };
      

    return (
        <>
            <div className={`modal-container ${modalIsOpen && 'open'}`} onClick={closeModal}>
                <div className="modal-booking" ref={modalRef}>
                    <h1>Reserva tu cancha</h1>
                    <p>Elegí tipo de cancha y fecha para tu reserva:</p>
                    <div className="booking-container">
                        <div>
                            <h4 className="title-option">Cancha:</h4>
                            <div className="select">
                                <select name="select" id="select" value={selectedField} onChange={(event) => setSelectedField(event.target.value)}>
                                <option className="option" value="Cancha de 5">
                                    Cancha de 5
                                </option>
                                <option className="option" value="Cancha de 8">
                                    Cancha de 8
                                </option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h3 className="title-option">Fecha:</h3>
                            <div className="open-calendar" onClick={showCalendar}>
                                <FontAwesomeIcon icon={faCalendarDays} style={{ color: '222227' }} />
                                <p className="date">{selectedDate}</p>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/servicios/reservas/horarios" className="button-booking" onClick={setFieldAndDate}>
                        <span>Consultar horarios</span>
                    </NavLink>
                    <div className="cross-close" onClick={closeModal} ref={crossCloseRef}>
                        x
                    </div>
                </div>
            </div>
            <Calendar closeCalendar={closeCalendar} calendarIsOpen={calendarIsOpen} calendarContainerRef={calendarContainerRef} calendarRef={calendarRef} daysRef={daysRef} />
        </>
    );
}
