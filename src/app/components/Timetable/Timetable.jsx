/* import DayService from "../../../services/Days"; */

export const Timetable = ({ time, date, field, showModal }) => {

/*     const reserve = (date, field) => {
        const data = {
            date, 
            field
        }
        const service = new DayService();
        service.postDay(data, callbackSuccessPostDay, callbackErrorPostDay)
    }

    const callbackSuccessPostDay = (res) => {
        console.log(res);
      }
    
    const callbackErrorPostDay = (err) => {
    console.log(err);
    } */

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
                <button 
                    className='btn btn-primary' 
                    onClick={ showModal }
                >
                    Reservar
                </button>
            </div>
        </div>
    )
}
