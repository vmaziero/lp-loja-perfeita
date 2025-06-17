import api from './api';

export const validarInscricao = async (lojaId: number, cicloId: number) => {
  const { data } = await api.get(`/inscricoes/validar-inscricao?lojaId=${lojaId}&cicloId=${cicloId}`);
  return data;
};

export const criarInscricao = async (dados: any) => {
  const { data } = await api.post('/inscricoes', dados);
  return data;
};
