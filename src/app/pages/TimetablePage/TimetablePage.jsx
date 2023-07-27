import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { Timetable } from '../../components/Timetable/Timetable';
import './TimetablePage.css';
import SchedulesService from '../../../services/Schedules';
import { ModalLogin } from '../../components/Modal/ModalLogin';
import { useSelector } from 'react-redux';
import { selectedField, selectedDate  } from '../../../store/slices/data';

export const TimetablePage = () => {

  const [ schedules, setSchedules ] = useState([]);
  const [ loginModalIsOpen, setLoginModalIsOpen ] = useState(false);

  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const field = useSelector(selectedField);
  const date = useSelector(selectedDate);

  let loginModalRef = useRef();
  let closeModalRef = useRef();

  const showModal = () => setLoginModalIsOpen(true);

  const closeModal = (e) => {
    if (!loginModalRef.current.contains(e.target) || e.target === closeModalRef.current) {
      setLoginModalIsOpen(false)
    }
  };

  const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}; 

  const convertFromStringToDate = (responseDate) => {
    let dateComponents = responseDate.split('T');
    let datePieces = dateComponents[0].split("/");
    let convertedDate = new Date(`${datePieces[2]}/ ${datePieces[1]}/ ${datePieces[0]}`).toLocaleDateString("es-ES", options);
    return convertedDate;
  }

  const convertedDate = convertFromStringToDate(date);

  useEffect(() => {
    const fetchData = async () => {
        if (field && date) {
          const [ day, month, year ] = date.split("/");
          const convertedDate = new Date(year, month -1, day);
          setLoading(true);
          setTimeout(() => {
            setError(null);
            try {
              const service = new SchedulesService();
              service.getSchedules(field, convertedDate, callbackSuccess, callbackError);
            } catch (error) {
              console.error(error);
              setError(error);
            };
          }, 2000);
        };
    };
    fetchData();
}, [field, date]);

const callbackSuccess = (res) => {
    console.log(res.data);
    setSchedules(res.data.availableHours);
    setLoading(false);
}     
  
const callbackError = (err) => {
    console.log(err);
    setError('Error al obtener los horarios disponibles');
    setLoading(false);
}

  return (
    <div className="timetable-container">
      <h1 className='title-services'>Horarios</h1>
      <div className="line-container">
        <p className="line"></p>				
      </div>
      <h3><strong><FontAwesomeIcon icon={faCalendarDays} /> { convertedDate }</strong></h3>
      {
        <div>
          <p className="subtitle">Elegí el horario para tu reserva:</p>
          <div className="filter">
            <p>Ordenar por</p> 
            <div className="select">
                <select name="select" id="select">
                    <option className="option">más temprano</option>
                    <option className="option">más tarde</option>
                </select>
            </div>
          </div>
          {
            schedules.map((time, index) => (
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
      }
      {loading && <p>Cargando horarios...</p>}
      {error && <p>Error: {error}</p>}
      <ModalLogin closeModal={ closeModal } loginModalIsOpen={ loginModalIsOpen } loginModalRef = { loginModalRef } closeModalRef = {closeModalRef} />
    </div>
  )
}
