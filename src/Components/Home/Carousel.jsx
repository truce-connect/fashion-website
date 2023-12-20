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
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={crop} alt="" className='slideimg' />
        <Carousel.Caption >
          <h3 className='Caption' >Stylish</h3>
         <button>shop now  </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src= {senate}alt="" className='slideimg'/>
        <Carousel.Caption >
          <h3  className='Caption'>ROYALTY</h3>
          <p className='Caption'>fashion that agree with the Royality</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src= {wear}alt="" className='slideimg'/>
        <Carousel.Caption > 
          <h3 className='Caption'>Simplicity</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;