import { Banner, Footer, Header } from "./component";

const AuthLayout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Banner />
      <Footer />
    </div>
  );
};

export default AuthLayout;
