import { publicRoutes } from "@routes";
import { Route, Routes } from "react-router-dom";
import { IRoute } from "./constants/interface";
import { DefaultLayout, FormLayout } from "./layout";
import { InvalidPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route: IRoute, index: number) => {
          const Page = route.component;
          const Layout = route.layout ? FormLayout : DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout layout={route.layout}>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </div>
  );
}

export default App;
