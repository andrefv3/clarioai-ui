import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router/appRouter";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((value) => {
          return (
            <Route key={value.key} path={value.path} element={value.layout}>
              {value.routes.map((valueRoute) => {
                return (
                  <Route key={value.key} path={valueRoute.path} element={valueRoute.component} />
                )
              })
              }
            </Route>
          )
        })}
      </Routes>
    </BrowserRouter>
  );
}