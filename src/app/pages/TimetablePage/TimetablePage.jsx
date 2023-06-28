import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { Timetable } from '../../components/Timetable/Timetable';
import './TimetablePage.css';
import TimeService from '../../../services/Times';
import { ModalLogin } from '../../components/Modal/ModalLogin';

export const TimetablePage = () => {

  const [ times, setTimes ] = useState([]);

  const [ loginModalIsOpen, setLoginModalIsOpen ] = useState(false);

  let loginModalRef = useRef();

  let closeModalRef = useRef();

  const showModal = () => setLoginModalIsOpen(true);

  const closeModal = (e) => {
    if (!loginModalRef.current.contains(e.target) || e.target === closeModalRef.current) {
      setLoginModalIsOpen(false)
    }
  }

  const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}; 

  let date = JSON.parse(localStorage.getItem("Date"));

  let field = JSON.parse(localStorage.getItem("Field"));

  const convertFromStringToDate = (responseDate) => {
    let dateComponents = responseDate.split('T');
    let datePieces = dateComponents[0].split("/");
    let convertedDate = new Date(`${datePieces[2]}/ ${datePieces[1]}/ ${datePieces[0]}`).toLocaleDateString("es-ES", options)
    return convertedDate
  }

  const convertedDate = convertFromStringToDate(date)

  useEffect(() => {
    const service = new TimeService();
    service.getTimes(callbackSuccessGetTimes, callbackErrorGetTimes);
  }, [])

  const callbackSuccessGetTimes = (res) => {
    setTimes(res.data.payload)
  }

  const callbackErrorGetTimes = (err) => {
    console.log(err);
  }

  return (
    <div className="timetable-container">
      <h1 className='title-services'>Horarios</h1>
      <div className="line-container">
				<p className="line"></p>				
			</div>
      <h3><strong><FontAwesomeIcon icon={faCalendarDays} /> { convertedDate }</strong></h3>
      {
        times.length > 0
          ? <div>
              <p className="subtitle">Elegí el horario para tu reserva:</p>
              <div className='filter'>
                <p>Ordenar por</p> 
                <div className="select">
                    <select name="select" id="select">
                        <option className="option">más temprano</option>
                        <option className="option">más tarde</option>
                    </select>
                </div>
              </div>
              {
                times.map((time, index) => (
                  <Timetable 
                    key = { index } 
                    time = { time } 
                    date = { date } 
                    field = { field }
                    showModal = { showModal }
                  />  
                ))
              }    
            </div> 
          : <div>
              <p>No hay horarios disponibles para este día</p>
            </div>
      }
      <ModalLogin closeModal={ closeModal } loginModalIsOpen={ loginModalIsOpen } loginModalRef = { loginModalRef } closeModalRef = {closeModalRef} />
    </div>
  )
}
