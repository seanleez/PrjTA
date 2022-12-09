import { Footer, Header } from "./component";
import styles from "./FormLayout.module.scss";
import { Background } from "@assets/images";
import { BareBackground } from "@assets/images";
import { useLocation } from "react-router-dom";

const FormLayout: React.FC<any> = ({ layout, children }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className={`${styles["form-layout"]}`}>
      <Header layout={layout} />
      {children}
      <Footer layout={layout} />
      <img
        src={pathname === "/about-us" ? BareBackground : Background}
        alt="background"
        className={`${styles["background"]}`}
      />
    </div>
  );
};

export default FormLayout;
