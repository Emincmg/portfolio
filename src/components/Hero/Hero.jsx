import PropTypes from 'prop-types';
import {Icon} from '@iconify/react';
import {useEffect, useState} from 'react';
import perser from 'html-react-parser';
import {Link as ScrollLink} from "react-scroll";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = ({data}) => {
    const {title, subTitle, imgLink, imgAlt, imgHeight, imgWidth, placeHolderLink, phone, email, socialData, btnText} = data;

    return (
        <section id="home" className="home-section bg-dark">
            <div className="container">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-lg-7 col-xl-7 col-xxl-6">
                        <div className="hb-text">
                            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{perser(title)}</h1>
                            <p className="lead" data-aos="fade-up" data-aos-duration="800"
                               data-aos-delay="400">{perser(subTitle)}</p>
                            <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                <ScrollLink to="contact" spy={true} className="px-btn">
                                    {btnText}
                                    <Icon icon="bi:arrow-up-right"/>
                                </ScrollLink>
                            </div>
                            <div className="info-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                <p><Icon icon="bi-phone"/><span>{phone}</span></p>
                                <p><Icon icon="bi-envelope"/><span>{email}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hb-em">
                <LazyLoadImage
                    src={imgLink}
                    placeholderSrc={placeHolderLink}
                    height={imgHeight}
                    width={imgWidth}
                    alt={imgAlt}
                    effect="blur"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }}
                >
                </LazyLoadImage>
            </div>

            <div className="social-fix">
                <div className="social-links">
                    {socialData.map((element, index) => (
                        <a href={element.link} key={index} target="_blank" rel="noopener noreferrer">
                            <Icon icon={`fa6-brands:${element.icon}`}/>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    data: PropTypes.object
};

export default Hero;
