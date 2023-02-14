import { Footer, Header } from "./component";

const DefaultLayout: React.FC<any> = ({ layout, children }) => {
  return (
    <div>
      <Header layout={layout} />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
