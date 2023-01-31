import Logo from "@assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import styles from "./LogoImage.module.scss";

const LogoImage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <img
      src={Logo}
      alt={Logo}
      className={`${styles.logo}`}
      onClick={() => navigate("/")}
    />
  );
};

export default LogoImage;
