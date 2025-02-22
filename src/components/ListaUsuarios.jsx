import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from "reactstrap";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [novoNome, setNovoNome] = useState("");
  const [novaCategoria, setNovaCategoria] = useState("");
  const [novaImagem, setNovaImagem] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(storedUsers);
  }, []);

  const excluirUsuario = (index) => {
    const novosUsuarios = usuarios.filter((_, i) => i !== index);
    setUsuarios(novosUsuarios);
    localStorage.setItem("usuarios", JSON.stringify(novosUsuarios));
    alert("Usuário removido com sucesso!");
  };

  
  const abrirModalEdicao = (index) => {
    const usuario = usuarios[index];
    setUsuarioEditando(index);
    setNovoNome(usuario.nomeUsuario);
    setNovaCategoria(usuario.categoria);
    setNovaImagem(usuario.imagem); 
    setModalAberto(true);
  };

  
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setNovaImagem(reader.result);
    };
  };

  
  const salvarEdicao = () => {
    const usuariosAtualizados = [...usuarios];
    usuariosAtualizados[usuarioEditando] = {
      ...usuariosAtualizados[usuarioEditando],
      nomeUsuario: novoNome,
      categoria: novaCategoria,
      imagem: novaImagem, 
    };

    setUsuarios(usuariosAtualizados);
    localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));
    setModalAberto(false);
    alert("Usuário editado com sucesso!");
  };

  return (
    <div>
      <h2 className="mb-4">Usuários Cadastrados</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        usuarios.map((usuario, index) => (
          <Card key={index} className="mb-3">
            {usuario.imagem && ( 
              <img src={usuario.imagem} alt={usuario.nomeUsuario} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            )}
            <CardBody>
              <CardTitle tag="h5">{usuario.nomeUsuario}</CardTitle>
              <CardText><strong>Categoria:</strong> {usuario.categoria}</CardText>
              <Button color="warning" onClick={() => abrirModalEdicao(index)} className="me-2">Editar</Button>
              <Button color="danger" onClick={() => excluirUsuario(index)}>Excluir</Button>
            </CardBody>
          </Card>
        ))
      )}

      {}
      <Modal isOpen={modalAberto} toggle={() => setModalAberto(!modalAberto)}>
        <ModalHeader toggle={() => setModalAberto(!modalAberto)}>Editar Usuário</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Nome do Usuário</Label>
            <Input type="text" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>Categoria</Label>
            <Input type="text" value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>Imagem Atual</Label>
            {novaImagem && (
              <div className="text-center mb-3">
                <img src={novaImagem} alt="Prévia" style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              </div>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Nova Imagem</Label>
            <Input type="file" accept="image/*" onChange={(e) => handleImageUpload(e.target.files[0])} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={salvarEdicao}>Salvar</Button>
          <Button color="secondary" onClick={() => setModalAberto(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ListaUsuarios;