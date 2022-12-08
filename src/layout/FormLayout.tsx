import { Footer, Header } from "./component";
import styles from "./FormLayout.module.scss";
import { Background } from "@assets/images";

const FormLayout: React.FC<any> = ({ layout, children }) => {
  console.log(layout);
  return (
    <div className={`${styles["form-layout"]}`}>
      <Header layout={layout} />
      {children}
      <Footer layout={layout} />
      <img
        src={Background}
        alt={Background}
        className={`${styles["background"]}`}
      />
    </div>
  );
};

export default FormLayout;
