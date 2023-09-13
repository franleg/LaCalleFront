import React from 'react'

export const TimeCalendar = () => {

    /* Hacer useEffect para buscar en la base de datos los horarios disponibles */

    return (
        <div className="time-container">
            <div className="time">
                <span>12:00</span>
                <span>14:00</span>
                <span>15:00</span>
                <span>17:00</span>
                <span>18:00</span>
                <span>19:00</span>
                <span>20:00</span>
                <span>22:00</span>
                <span>23:00</span>
                <span>00:00</span>
            </div>
        </div>
    )
}
