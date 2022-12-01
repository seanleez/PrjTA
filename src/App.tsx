import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "@/routes";
import { IRoute } from "./constants/interface";
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route: IRoute, index: number) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
