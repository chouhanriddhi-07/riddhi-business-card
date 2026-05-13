import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instagram-icon.png'; 

export default function Footer() {
  return (
    <div className="footer">
      <img src={facebookIcon} alt="Facebook Icon" />
      <img src={instagramIcon} alt="Instagram Icon" />
    </div>
  )
}