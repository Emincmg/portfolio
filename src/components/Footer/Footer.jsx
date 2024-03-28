import PropTypes from 'prop-types';

const Footer = ({ data }) => {
  const { ImgLink, name } = data;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-avatar">
            <img src={ImgLink} title="" alt="" />
          </div>
          <h6>{name}</h6>
        </div>
        <p className="copyright">+90 553 720 9699 | emin-comoglu@hotmail.com</p>
      </div>
    </footer>
  )
}
Footer.propTypes = {
  data: PropTypes.object
}

export default Footer;
