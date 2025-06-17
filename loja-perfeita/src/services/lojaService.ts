import api from './api';

export const getLoja = async (cnpj: string) => {
  const { data } = await api.get(`/lojas/cnpj/${cnpj}`);
  localStorage.setItem('lojaId', data.id);
  return data;
};
