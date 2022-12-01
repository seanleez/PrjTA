import Header from "./Header";
import SideBar from "./Sidebar";

const DefaultLayout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />
    </div>
  );
};

export default DefaultLayout;
