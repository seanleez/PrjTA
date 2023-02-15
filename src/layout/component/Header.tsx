import {
  HeaderFeatures,
  LogoImage,
  NavigationSection,
} from "@components/header";
import styles from "./Header.module.scss";
type THeader = {
  layout: string;
};

const Header: React.FC<THeader> = ({ layout }) => {
  return (
    <>
      <div
        className={`${styles.header} ${
          layout ? styles.formHeader : styles.normalHeader
        }`}
      >
        <NavigationSection layout={layout} />
        <LogoImage />
        <HeaderFeatures />
      </div>
    </>
  );
};

export default Header;
