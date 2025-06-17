import api from './api';

export const buscarVendedorPorCpf = async (cpf: string) => {
  const { data } = await api.get(`/vendedores/cpf?cpf=${cpf}`);
  return data;
};

export const criarVendedor = async (dados: {
  name: string;
  cpf: string;
  loja: { id: number };
  birthDate: string;
}) => {
  const { data } = await api.post('/vendedores', dados);
  return data;
};

export const atualizarVendedor = async (id: string, dados: any) => {
  const { data } = await api.put(`/vendedores/${id}`, dados);
  return data;
};
