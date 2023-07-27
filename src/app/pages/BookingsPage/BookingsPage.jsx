import { useState, useRef, useEffect } from 'react';
import './BookingsPage.css';
import { prices } from './prices';
import backgroundBookings from '../../../assets/img/pelota.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { ModalBookings } from '../../components/Modal/ModalBookings';
import PromotionService from '../../../services/Promotions';

export const BookingsPage = () => {

  const [ promotions, setPromotions ] = useState([]);

  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  let modalRef = useRef();

  let crossCloseRef = useRef();

  const showModal = () => setModalIsOpen(true);

  const closeModal = (e) => {
    if (!modalRef.current.contains(e.target) || e.target === crossCloseRef.current) {
      setModalIsOpen(false)
    }
  }

  useEffect(() => {
    const getPromotions = () => {
      try {
        const service = new PromotionService();
        service.getPromotions(callbackSuccess, callbackError);
      } catch (error) {
        console.error('Error al obtener las promociones:', error);
      } 
    };
    getPromotions();
  }, []);

  const callbackSuccess = (res) => {
    setPromotions(res.data)
  }     
    
  const callbackError = (err) => {
    console.log(err)
  };

  useEffect(() => {
    console.log(promotions);
  }, [promotions]);

  return (
    <div className="bookings-container">
      
      <div className="bookings-intro">
        <div className="bookings-section">
          <h1>ALQUILÁ TU CANCHA</h1>
          <p className="line" />
          <div className='bookings-content'>
            <p>
              <FontAwesomeIcon icon={faCheck} style={{color: "#cc9d27"}} />
              &nbsp;
              El Club La Calle cuenta con 3 canchas de F5 y una de F8.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={{color: "#cc9d27" }} />
              &nbsp;
              Canchas techadas de pasto sintetico Forbex 2000 para que puedas jugar
              incluso los días de lluvia.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={{color: "#cc9d27" }} />
              &nbsp;
              Iluminación en todo el predio.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} style={{color: "#cc9d27" }} />
              &nbsp;
              Acceso directo a vestuarios con duchas y baños.
            </p>
          </div>
        </div>
        <img src={backgroundBookings} className="bookings-background" alt='reservas' />
      </div>

      <div className="bookings">
        <div className="bookings-promotions">
          <h3>Aprovechá nuestras promociones</h3>
          <ul className="prices-container">
            {
              prices.map(price => (
                <li key={ price.id }>
                    <h4 className="title-promotion">
                      { price.title }
                    </h4>
                    <hr />
                    <div className="info-promotion-container">
                      <div className="info-promotion">
                        <div className="info-promotion-description">
                          <p>
                            <b><FontAwesomeIcon icon={faClock} style={{color: "#ffffff"}} /> Horarios:</b> 
                          </p>
                          <div>
                            {
                              price.description.map(desc => {
                                return <p key={desc} className="info-days">{desc}</p>
                              })
                            }  
                          </div>                       
                        </div>

                        <div className="info-promotion-description">
                          <p>
                            <b>Precio Cancha de 5:</b>
                          </p>
                          <p className="info-days">${ price.priceF5 }</p>
                        </div>

                        <div className="info-promotion-description">
                          <p>
                            <b>Precio Cancha de 8:</b>
                          </p>  
                          <p className="info-days">${ price.priceF8 }</p>                     
                        </div>
        
                      </div>
                      {/* <button className="btn btn-primary btn-promotion" onClick={ showModal }> Reservar </button> */}
                    </div>
                    <hr />
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h1>Hacé tu reserva</h1>
          <button className="btn btn-primary" onClick={ showModal }>RESERVAR</button>
        </div>
      </div>
      <ModalBookings closeModal={ closeModal } modalIsOpen={ modalIsOpen } modalRef = { modalRef } crossCloseRef = {crossCloseRef} />
    </div>
  )
}