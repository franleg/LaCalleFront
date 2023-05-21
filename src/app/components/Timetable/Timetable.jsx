import { NavLink } from "react-router-dom"

export const Timetable = ({ time, date, field }) => {
    return (
        <div className="time-container">
            <div className="time-info">
            <div className='info'>
                <h4 className="lacalle-text">La Calle Club</h4>
                <div>
                <p>{ field }</p>
                <small>{ date }</small>
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
            <NavLink to='/carro'>
                <button className='btn btn-primary'>Reservar</button>
            </NavLink>
            </div>
        </div>
    )
}
