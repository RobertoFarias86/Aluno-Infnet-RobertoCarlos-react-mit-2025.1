import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FormularioBase = ({ campos, onSubmit }) => {
  const [formData, setFormData] = useState(
    campos.reduce((acc, campo) => ({ ...acc, [campo.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});
  const [imagem, setImagem] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagem(reader.result);
    };
  };

  const validate = () => {
    let newErrors = {};
    campos.forEach((campo) => {
      if (campo.required && !formData[campo.name]) {
        newErrors[campo.name] = `${campo.label} é obrigatório`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ ...formData, imagem });
  };

  const verificarUsuarios = () => {
    const usuariosSalvaos = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (usuariosSalvaos.length === 0) {
      toast.error("Não existe nenhum Usuário Cadastrado.");
    } else {
      navigate("/usuarios");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h2 className="mb-4">Cadastre seu Usuario</h2>

      {campos.map((campo) => (
        <FormGroup key={campo.name}>
          <Label for={campo.name}>{campo.label}</Label>

          {campo.type === "select" ? (
            <Input
              type="select"
              name={campo.name}
              id={campo.name}
              value={formData[campo.name]}
              onChange={handleChange}
              invalid={!!errors[campo.name]}
            >
              {campo.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Input>
          ) : (
            <Input
              type={campo.type}
              name={campo.name}
              id={campo.name}
              placeholder={campo.placeholder}
              value={formData[campo.name]}
              onChange={handleChange}
              invalid={!!errors[campo.name]}
            />
          )}

          <FormFeedback>{errors[campo.name]}</FormFeedback>
        </FormGroup>
      ))}

      <FormGroup>
        <Label>Adicionar Imagem</Label>
        <Input type="file" accept="image/*" onChange={(e) => handleImageUpload(e.target.files[0])} />
      </FormGroup>

      {imagem && (
        <div className="text-center mt-3">
          <img src={imagem} alt="Prévia" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        </div>
      )}

      <div className="d-flex justify-content-between">
        <Button type="submit" color="primary">
          Cadastrar Usuario
        </Button>
        <Button type="button" color="success" onClick={verificarUsuarios}>
          Consultar Usuarios Cadastrados
        </Button>
      </div>
    </Form>
  );
};

export default FormularioBase;
