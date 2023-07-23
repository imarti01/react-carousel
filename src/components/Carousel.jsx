import { useState, useRef, useEffect } from 'react';
import img1 from '../assets/marek-piwnicki-NaGIz8xQQgM-unsplash.jpg';
import img2 from '../assets/marek-piwnicki-sIaIHalCnsM-unsplash.jpg';
import img3 from '../assets/marek-piwnicki-XafUptcVDHI-unsplash.jpg';
import img4 from '../assets/marek-piwnicki-xfixPcc5aOE-unsplash.jpg';
import img5 from '../assets/wolfgang-hasselmann-xI0rhTZlYP0-unsplash.jpg';
import img6 from '../assets/yevhenii-aihubov-88Yt8rpS6iU-unsplash.jpg';

const Carousel = () => {
  const fotos = [img1, img2, img3, img4, img5, img6];

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const carouselRef = useRef(null);
  const itemWidth = useRef(0);

  useEffect(() => {
    if (carouselRef.current) {
      itemWidth.current = carouselRef.current.offsetWidth;
    }
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === 0) return;
    const touchCurrentX = e.touches[0].clientX;
    const diffX = touchCurrentX - touchStartX.current;

    if (diffX > 50) {
      // Deslizar hacia la izquierda
      setCurrentSlide((prevSlide) => (prevSlide + 1) % fotos.length);
    } else if (diffX < -50) {
      // Deslizar hacia la derecha
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + fotos.length) % fotos.length
      );
    }

    touchStartX.current = 0;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-x' }}
      ref={carouselRef}
    >
      <h2>React Carousel con desplazamiento táctil</h2>
      <div
        className="carousel-container"
        style={{
          transform: `translateX(-${currentSlide * itemWidth.current}px)`,
        }}
      >
        {fotos.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {fotos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
