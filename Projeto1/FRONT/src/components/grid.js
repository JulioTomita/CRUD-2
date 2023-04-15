import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const GridProdutos = ({ produtos, setProdutos, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/produtos/" + id)
      .then(({ data }) => {
        const newArray = produtos.filter((produtos) => produtos.id !== id);

        setProdutos(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id do Produto</Th>
          <Th>Produto</Th>
          <Th>Codigo</Th>
          <Th onlyWeb>Valor</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {produtos.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.id}</Td>
            <Td width="30%">{item.produto}</Td>
            <Td width="30%">{item.codigo}</Td>
            <Td width="20%" onlyWeb>
              {item.valor}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const GridVendas = ({ vendas, setVendas, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/vendas/" + id)
      .then(({ data }) => {
        const newArray = vendas.filter((vendas) => vendas.id !== id);

        setVendas(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id da Venda</Th>
          <Th>Cliente</Th>
          <Th>Dia</Th>
          <Th>Quantidade</Th>
          <Th>IdProduto</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {vendas.map((item, i) => (
          <Tr key={i}>
            <Td width="20%">{item.id}</Td>
            <Td width="20%">{item.cliente}</Td>
            <Td width="20%">{item.dia}</Td>
            <Td width="20%">{item.quantidade}</Td>
            <Td width="20%">{item.idproduto}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export {GridProdutos, GridVendas};