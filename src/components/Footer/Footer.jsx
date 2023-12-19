import './footer.css'
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className="footer">
       <div className="icons">
        <FaInstagram className='icon'/>
        <FaWhatsapp className='icon'/>
        <FaFacebookF className='icon'/>
      </div>      

      <p className='copy'>© 2023 Luciano Scollo</p>
    </footer>
  );
};