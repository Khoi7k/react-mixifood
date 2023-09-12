import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "../routes";
export default function IndexAdmin() {
    return (
        <>
        <Routes>
          {privateRoutes.map((route, index) => {
            const Component = route.component;
            return (             
              <Route key={index} path={route.path} element={
                  <Component />
              } />
            );
          })}
        </Routes>
        </>
    )
}
