import { Footer, Header } from "./component";
import styles from "./FormLayout.module.scss";
import {
  Background,
  BackgroundMobile,
  BareBackground,
  BareBackgroundMobile,
} from "@assets/images";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const FormLayout: React.FC<any> = ({ layout, children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${styles["form-layout"]}`}>
      <Header layout={layout} />
      {children}
      <Footer layout={layout} />
      <img
        src={
          pathname === "/about-us"
            ? width < 1024
              ? BareBackgroundMobile
              : BareBackground
            : width < 1024
            ? BackgroundMobile
            : Background
        }
        alt="background"
        className={`${styles["background"]}`}
      />
    </div>
  );
};

export default FormLayout;
