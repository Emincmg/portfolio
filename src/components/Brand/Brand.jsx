import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Brand = ({ brandLogo }) => {
    return (
        <div className="brand-box">
            <LazyLoadImage
                src={brandLogo}
                alt="Brand Logo"
                effect="blur"
            />
        </div>
    )
}

Brand.propTypes = {
    brandLogo: PropTypes.string
}

export default Brand;
