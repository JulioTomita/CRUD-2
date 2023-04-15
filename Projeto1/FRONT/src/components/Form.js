import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer; 
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const FormProdutos = ({ getProdutos, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.produto.value= onEdit.produto;
      user.codigo.value = onEdit.codigo;
      user.valor.value = onEdit.valor;

    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.produto.value ||
      !user.codigo.value ||
      !user.valor.value 
    )
      {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/produtos/" + onEdit.id, {
          produto: user.produto.value,
          codigo: user.codigo.value,
          valor: user.valor.value,

        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/produtos", {
          produto: user.produto.value,
          codigo: user.codigo.value,
          valor: user.valor.value,

        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.produto.value = "";
    user.codigo.value = "";
    user.valor.value = "";


    setOnEdit(null);
    getProdutos();
  };

  return (
    <FormContainer style={{paddingRight: 100, paddingLeft: 100}} ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Produto</Label>
        <Input name="produto" />
      </InputArea>
      <InputArea>
        <Label>Codigo</Label>
        <Input name="codigo" />
      </InputArea>
      <InputArea>
        <Label>Valor</Label>
        <Input name="valor" />
      </InputArea>


      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

const FormVendas = ({ getVendas, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.cliente.value= onEdit.cliente;
      user.dia.value = onEdit.dia;
      user.quantidade.value = onEdit.quantidade;
      user.idproduto.value = onEdit.idproduto;

    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.cliente.value||
      !user.dia.value ||
      !user.quantidade.value ||
      !user.idproduto.value
    )
      {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/vendas/" + onEdit.id, {
          cliente: user.cliente.value,
          dia: user.dia.value,
          quantidade: user.quantidade.value,
          idproduto: user.idproduto.value,

        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/vendas", {
          cliente: user.cliente.value,
          dia: user.dia.value,
          quantidade: user.quantidade.value,
          idproduto: user.idproduto.value,

        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.cliente.value = "";
    user.dia.value = "";
    user.quantidade.value = "";
    user.idproduto.value = "";


    setOnEdit(null);
    getVendas();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Cliente</Label>
        <Input name="cliente" />
      </InputArea>
      <InputArea>
        <Label>Data</Label>
        <Input name="dia" />
      </InputArea>
      <InputArea>
        <Label>Quantidade</Label>
        <Input name="quantidade" />
      </InputArea>
      <InputArea>
        <Label>IdProduto</Label>
        <Input name="idproduto" type="number" />
      </InputArea>


      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export { FormProdutos, FormVendas };