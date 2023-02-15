import { Loading } from "@components/common";
import { publicRoutes } from "@routes";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { IRoute } from "./constants/interface";
import { ScrollToTop } from "./hooks";
import { DefaultLayout, FormLayout } from "./layout";
import { InvalidPage } from "./pages";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
}

export default App;
