import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";
import GlobalStyle from "./styles/globalStyles";
import HomePage from "./pages/HomePage";
import CadastroUsuariosPage from "./pages/CadastroUsuariosPage";
import ListaUsuariosPage from "./pages/ListaUsuariosPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<CadastroUsuariosPage />} />
          <Route path="/usuarios" element={<ListaUsuariosPage />} />
        </Routes>
      </Router>
      <ToastContainer 
      autoClose={3000} 
      position="bottom-left" 
      closeOnClick
      theme="dark"
      />
    </ThemeProvider>
  );
}

export default App;