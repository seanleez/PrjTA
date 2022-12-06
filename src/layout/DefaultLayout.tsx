import { Footer, Header } from "./component";
import styles from "./DefaultLayout.module.scss";
import { Background } from "@assets/images";

const DefaultLayout: React.FC<any> = ({ children }) => {
  return (
    <div className={`${styles["default-layout"]}`}>
      <Header />
      <>{children}</>
      <Footer />
      <img
        src={Background}
        alt={Background}
        className={`${styles["background"]}`}
      />
    </div>
  );
};

export default DefaultLayout;
