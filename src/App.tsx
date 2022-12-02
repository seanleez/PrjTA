import { publicRoutes } from '@/routes';
import { Route, Routes } from 'react-router-dom';
import { IRoute } from './constants/interface';
import { AuthLayout, DefaultLayout } from './layout';
import { InvalidPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route: IRoute, index: number) => {
          const Page = route.component;
          const Layout = route?.layout ? AuthLayout : DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
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
