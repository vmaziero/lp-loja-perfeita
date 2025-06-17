import api from './api';

export const getCiclo = async (codigo: string) => {
  const { data } = await api.get(`/ciclos/${codigo}`);

  // Corrigido: acessar o ID dentro de "ciclo"
  const cicloId = data.ciclo.id;
  const token = data.token;

  // Salvar no localStorage
  localStorage.setItem('token', token);
  localStorage.setItem('cicloId', cicloId.toString());

  // Definir token no header para próximas requisições
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  // Retornar estrutura que facilite o uso no componente
  return {
    ciclo: data.ciclo,
    token: token,
  };
};
