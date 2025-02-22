import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png"; 

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Logo = styled.img`
  width: 150px;  // Ajuste conforme necessário
  height: auto;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;

const StyledButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  margin: 10px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const verificarUsuarios = () => {
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuariosSalvos.length === 0) {
      toast.error("Não existe nenhum Usuário Cadastrado.");
    } else {
      navigate("/usuarios");
    }
  };

  return (
    <Container>
      <Logo src={logo} alt="Logo do Projeto" /> {}
      <h1>Bem-vindo</h1>
      <p>Cadastre seus Usuários</p>

      <ButtonContainer>
        <StyledLink to="/cadastro">Cadastrar Novo Usuário</StyledLink>
        <StyledButton onClick={verificarUsuarios}>
          Consultar Usuários Cadastrados
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;