import { Footer, Header } from "./component";

const DefaultLayout: React.FC<any> = ({ layout, children }) => {
  console.log(layout);
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
