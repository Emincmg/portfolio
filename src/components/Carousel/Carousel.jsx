import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Singletestimonial from '../Testimonial/SingleTestimonial';
import "slick-carousel/slick/slick.css";
import Brand from '../Brand/Brand';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Carousel = ({ data }) => {
  const { useFor, info, settings } = data;

  if (useFor === "testimonial") {
    return (
        <Slider {...settings}>
          {
            info.map((element, index) => (
                <Singletestimonial element={element} key={index} />
            ))
          }
        </Slider>
    )
  } else if (useFor === "brand") {
    return (
        <Slider {...settings}>
          {
            info.map((element, index) => (
                <Brand key={index} brandLogo={
                  <LazyLoadImage
                      src={element.imgLink}
                      alt={`Brand Logo ${index + 1}`}
                      effect="blur"
                  />
                } />
            ))
          }
        </Slider>
    )
  }
}

Carousel.propTypes = {
  data: PropTypes.object
}

export default Carousel;
