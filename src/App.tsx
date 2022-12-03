import { publicRoutes } from '@routes';
import { Route, Routes } from 'react-router-dom';
import { IRoute } from './constants/interface';
import { DefaultLayout } from './layout';
import { InvalidPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route: IRoute, index: number) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <DefaultLayout>
                  <Page />
                </DefaultLayout>
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
