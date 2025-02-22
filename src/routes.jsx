import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CadastroUsuariosPage from "./pages/CadastroUsuariosPage";
import ListaUsuariosPage from "./pages/ListaUsuariosPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cadastro" element={<CadastroUsuariosPage />} />
    <Route path="/usuarios" element={<ListaUsuariosPage />} />
  </Routes>
);

export default AppRoutes;