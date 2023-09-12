/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";

function App() {
  return (
    <>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Component = route.component;
            const Layout = route.layout
            return (             
              <Route key={index} path={route.path} element={
                <Layout>
                  <Component />
                </Layout>
              } />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Component = route.component;
            const Layout = route.layout
            return (             
              <Route key={index} path={route.path} element={
                <Layout>
                  <Component />
                </Layout>
              } />
            );
          })}
        </Routes>

    </>
  )
}

export default App
