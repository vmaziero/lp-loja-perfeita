import * as yup from 'yup';

export const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  dataNascimento: yup.string().required('Data de nascimento é obrigatória'),
  cnpj: yup.string().required('CNPJ é obrigatório'),
  whatsapp: yup.string().required('WhatsApp é obrigatório'),
  cicloId: yup.string().required('Ciclo é obrigatório'),
  fotos: yup
    .mixed<FileList>()
    .test('fileList', 'Formato inválido', (value) => {
      return (
        value === undefined ||
        value === null ||
        value instanceof FileList
      );
    })
    .notRequired(),
});

export type FormData = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  cnpj: string;
  whatsapp: string;
  cicloId: string;
  fotos?: FileList;
};
