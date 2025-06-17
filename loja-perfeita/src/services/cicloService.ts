import api from './api';

export const getCiclo = async (codigo: string) => {
  const { data } = await api.get(`/ciclos/${codigo}`);

  const cicloId = data.ciclo.id;
  const token = data.token;

  localStorage.setItem('token', token);
  localStorage.setItem('cicloId', cicloId.toString());

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return {
    ciclo: data.ciclo,
    token: token,
  };
};
