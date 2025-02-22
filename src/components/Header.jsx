import React from "react";
import { useTheme } from "../ThemeProvider";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavbarBrand = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Navbar>
      <NavbarBrand to="/">Biblioteca de Usuarios</NavbarBrand>
      <ToggleButton onClick={toggleTheme}>
        {isDarkMode ? "Modo Claro" : "Modo Escuro"}
      </ToggleButton>
    </Navbar>
  );
};

export default Header;