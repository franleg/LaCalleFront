import { NavLink } from 'react-router-dom';
import './ServicesCard.css';

export const ServicesCard = ({ title, description, img, link }) => {

  return (
    <>
      {
        <div className="card">
          <img src={ img } alt={ title } />
          <div className="card-content">
            <h3 className="card-title">{ title }</h3>
            <p className="card-text">
              { description }
            </p>
            <div className="btn-container">
              <NavLink to={`/servicios/${link}`} className="card-btn">Ver más</NavLink>
            </div>
          </div>
        </div>
      }
    </>
  )
}