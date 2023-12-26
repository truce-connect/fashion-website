import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import crop from '../../image/crop.jpg';
import senate from '../../image/senatorty.jpg';
import wear from '../../image/senate wear.jpg'
import './Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='whole'>
      <Carousel.Item>
        <img src={crop} alt="" className='slideimg' />
        <Carousel.Caption >
          <h3 className='Caption' >Stylish Men with High class Royalty</h3>
         <button  className='boton'>shop now  </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='whole'>
        <img src= {senate}alt="" className='slideimg'/>
        <Carousel.Caption >
          <h3  className='Caption'>Fahion that bring out the royalty in you</h3>
          <button className='boton'>shop now  </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src= {wear}alt="" className='slideimg'/>
        <Carousel.Caption > 
          <h3 className='Caption'>Simplicity  in style and  Royalty</h3>
          <button  className='boton'>shop now  </button>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default ControlledCarousel;