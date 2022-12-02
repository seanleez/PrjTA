import { Footer, Header } from './component';

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
