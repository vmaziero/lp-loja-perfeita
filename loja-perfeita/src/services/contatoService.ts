// src/services/contatoService.ts
import api from './api';

export const criarContato = async (dados: {
  whatsapp: string;
  email: string;
  vendedor: { id: number };
}) => {
  const { data } = await api.post('/contatos', dados);
  return data;
};

export const atualizarContato = async (id: string, dados: any) => {
  const { data } = await api.put(`/contatos/${id}`, dados);
  return data;
};
