import { useState, useEffect } from 'react';
import { dataSlides } from './dataSlides';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './SliderHome.css';

export const SliderHome = () => {

    const [currentIndex, setCurrentIndex ] = useState(0);

    const sliderInfiniteScroll = () => {
        currentIndex === dataSlides.length-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1);
    }

    const goToPrevious = () => {
        currentIndex === 0 ? setCurrentIndex(dataSlides.length-1) : setCurrentIndex(currentIndex-1)
    }

    const goToNext = () => {
        currentIndex === dataSlides.length-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1);
    }

    const goToSlide = (sliderIndex) => {
        setCurrentIndex(sliderIndex);
    }

    useEffect(() => {
        const interval = setInterval(() =>{sliderInfiniteScroll()}, 3000);
        return () => clearInterval(interval);
    })

    return (
        <section className='slider-container'>

            <div className='slider'>
                {
                    dataSlides.map((slider, index) => (
                        <div 
                            key={ index } 
                            className='slide'
                            style={{transform: `translate(-${currentIndex * 100}%)`}}
                        >
                            <img src={ slider.img } alt='reservas' />
                            <div className='info'>
                                <h2>{ slider.title }</h2>
                                <p>{ slider.description }</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='arrowsNavigation'>
                <FontAwesomeIcon 
                    icon={faChevronLeft} 
                    className='previousArrow' 
                    onClick={ goToPrevious } 
                />
                <FontAwesomeIcon 
                    icon={faChevronRight}
                    className='nextArrow' 
                    onClick={ goToNext } 
                />
            </div>

            <div className='dotsNavigation'>
                {
                    dataSlides.map( (slider, index) => (
                        <div 
                            key={ index } 
                            className={index === currentIndex ? 'btn-slider active' : 'btn-slider'}
                            onClick={ () => goToSlide(index) }
                        />
                    ))
                }
            </div>
        </section>
    )
}
