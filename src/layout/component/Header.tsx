import {
  HeaderFeatures,
  LogoImage,
  NavigationSection,
} from "@components/header";
import styles from "./Header.module.scss";
type THeader = {
  layout: string;
};

const IS_LOGIN = true;

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
        <HeaderFeatures isLoggin={IS_LOGIN} />
      </div>
    </>
  );
};

export default Header;
