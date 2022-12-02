import { Footer, Header } from "./component";

const DefaultLayout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
