import { Loading } from "@components/common";
import { privateRoutes, publicRoutes } from "@routes";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { IRoute } from "./constants/interface";
import { ScrollToTop } from "./hooks";
import { DefaultLayout, FormLayout } from "./layout";
import { InvalidPage } from "./pages";
import PrivateRoute from "./routes/PrivateRoute";

function handleLayout(routes: IRoute[]): React.ReactNode {
  return routes.map((route: IRoute, index: number) => {
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
  });
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<PrivateRoute />}>
            {handleLayout(privateRoutes)}
          </Route>
          {handleLayout(publicRoutes)}
          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
