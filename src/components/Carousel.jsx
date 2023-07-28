import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/marek-piwnicki-NaGIz8xQQgM-unsplash.jpg';
import img2 from '../assets/marek-piwnicki-sIaIHalCnsM-unsplash.jpg';
import img3 from '../assets/marek-piwnicki-XafUptcVDHI-unsplash.jpg';
import img4 from '../assets/marek-piwnicki-xfixPcc5aOE-unsplash.jpg';
import img5 from '../assets/wolfgang-hasselmann-xI0rhTZlYP0-unsplash.jpg';
import img6 from '../assets/yevhenii-aihubov-88Yt8rpS6iU-unsplash.jpg';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
  const fotos = [img1, img2, img3, img4, img5, img6];

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {fotos.map((foto, idx) => (
        <SwiperSlide key={idx}>
          <img src={foto} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
