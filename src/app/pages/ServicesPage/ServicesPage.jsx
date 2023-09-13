import { ServicesCard } from '../../components/Services/ServicesCard';
import { services } from '../../components/Services/services';
import './ServicesPage.css';

export const ServicesPage = () => {
  return (
    <div className='services-container'>
      <h1 className='title-services'>Servicios</h1>
      <div className="line-container">
				<p className="line"></p>				
			</div>

      <div className="cards-container">
        {
          services.map(service => (
            <ServicesCard 
              key={service.id } 
              title={ service.title } 
              description={ service.description } 
              img={ service.img } 
              link={ service.link }
            />
          ))
        }
      </div>
    </div>
  )
}
