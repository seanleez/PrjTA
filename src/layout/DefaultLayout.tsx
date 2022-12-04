import { Footer } from "./component";
import { Header } from "./component/Header";

const DefaultLayout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
