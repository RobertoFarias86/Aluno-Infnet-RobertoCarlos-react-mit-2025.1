import React, { useEffect, useState } from "react";
import FormularioBase from "./FormularioBase";
import categorias from "../data/categorias.json";

const FormularioUsuario = () => {
  const [usuario, setUsuarios] = useState([]);

  useEffect(() => {
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosSalvos);
  }, []);

  const campos = [
    { name: "nomeUsuario", label: "Nome do Usuario", type: "text", placeholder: "Digite o nome do usuário", required: true },
    { name: "emails", label: "Emails", type: "textarea", placeholder: "Digite seu email", required: true },
    { 
      name: "categoria", 
      label: "Categoria", 
      type: "select", 
      required: true,
      options: [
        { value: "", label: "Selecione uma opção" }, 
        ...categorias.map((cat) => ({ value: cat.nome, label: cat.nome })) 
      ],
    }
  ];

  const handleSubmit = (data) => {
    const novosUsuarios = [...usuario, data];
    setUsuarios(novosUsuarios);
    localStorage.setItem("usuarios", JSON.stringify(novosUsuarios));
    alert("Usuário cadastrada com sucesso!");
  };

  return <FormularioBase campos={campos} onSubmit={handleSubmit} />;
};

export default FormularioUsuario;