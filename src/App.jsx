import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { menuRoutes } from "./components/routes/menuRoutes.js";
import { NotFound } from "./components/pages/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {menuRoutes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
          <Route path="*" element={<NotFound/>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
