import styles from "./Footer.module.scss";
import InstagramIcon from "@assets/icons/instagram-icon.svg";
import FacebookIcon from "@assets/icons/facebook-icon.svg";
import PinterestIcon from "@assets/icons/pinterest-icon.svg";
import TwitterIcon from "@assets/icons/twitter-icon.svg";

const Footer: React.FC = () => {
  return (
    <div className={`${styles["footer"]}`}>
      <img src={InstagramIcon} alt={InstagramIcon} />
      <img src={FacebookIcon} alt={FacebookIcon} />
      <img src={PinterestIcon} alt={PinterestIcon} />
      <img src={TwitterIcon} alt={TwitterIcon} />
    </div>
  );
};

export default Footer;
