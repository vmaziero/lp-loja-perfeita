import api from './api';

export interface ValidarInscricaoResponse {
  valida: boolean;
  mensagem: string;
  detalhes: string;
  metaAtingida: number;
  metaNecessaria: number;
}

export const validarInscricao = async (
  lojaId: number,
  cicloId: number
): Promise<ValidarInscricaoResponse> => {
  const response = await api.get<ValidarInscricaoResponse>(
    `/inscricoes/validar-inscricao?lojaId=${lojaId}&cicloId=${cicloId}`
  );
  return response.data;
};
