import './Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';

export const Calendar = ({ calendarRef, closeCalendar, calendarIsOpen, daysRef }) => {

    let [ date ]= useState(new Date());

    let [ days, setDays ] = useState([]);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
      };

    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};  

    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    const renderCalendar = useCallback((days) => {

        days= [];

        date.setDate(1);

        const lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();
    
        const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();
    
        const firstDayIndex = date.getDay();
    
        const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();

        const nextDays = 7 - lastDayIndex - 1;

        for (let x = firstDayIndex; x > 0; x--) {
            days = [...days, (prevLastDay - x + 1)];
        }

        for (let i = 1; i <= lastDay; i++) {
            days = [...days, i];
        }
        
        for (let j = 1; j <= nextDays; j++) {
            days = [...days, j];
        }
        
        setDays(days);
    }, [date]);

    useEffect(() => {
        renderCalendar();
    }, [renderCalendar])

    return (
        <div className={ `calendar-container ${calendarIsOpen && 'open'}`} >
            <div className="calendar" ref={ calendarRef }>
                <div className="month">
                    <FontAwesomeIcon 
                        icon={faChevronLeft} 
                        className='arrow'
                        onClick={() => {
                            date.setMonth(date.getMonth() - 1);
                            renderCalendar();
                        }}
                    />

                    <div className="date">
                        <h1>{ months[date.getMonth()] }</h1>
                        <p>{ new Date().toLocaleDateString("es-ES", options) }</p>
                    </div>

                    <FontAwesomeIcon 
                        icon={faChevronRight} 
                        className='arrow'
                        onClick={() => {
                            date.setMonth(date.getMonth() + 1);
                            renderCalendar();
                        }}
                    />
                </div>

                <div className="weekdays">
                    <div>DOM</div>
                    <div>LUN</div>
                    <div>MAR</div>
                    <div>MIE</div>
                    <div>JUE</div>
                    <div>VIE</div>
                    <div>SAB</div>
                </div>

                <div className="days" ref={ daysRef } >
                    { 
                        days.map((day, index) => (
                            <div 
                                key={index} 
                                onClick={ (e) => {
                                    handleClick(index)
                                    /* let dateInCalendar = (`${day}/${date.getMonth() + 1}/${date.getFullYear()}`) */
                                    let dateInCalendar = new Date(date.getFullYear(), date.getMonth(), day).toLocaleDateString ("es-ES")
                                    closeCalendar(e, dateInCalendar)
                                }}
                                className={ (index < date.getDay())
                                            || (index > date.getDay() + new Date(
                                                                        date.getFullYear(),
                                                                        date.getMonth() + 1,
                                                                        0).getDate() - 1)
                                            || ((day < new Date().getDate()) && (date.getMonth() === new Date().getMonth()))
                                                ? 'out-date' 
                                                : activeIndex === index
                                                    ? 'isClicked'
                                                    : day === new Date().getDate() && date.getMonth() === new Date().getMonth() 
                                                        ? 'today' 
                                                        : ''
                                        }
                            >
                                { day }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}