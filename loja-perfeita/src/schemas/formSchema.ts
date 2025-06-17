import * as yup from 'yup';

export const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  dataNascimento: yup.string().required('Data de nascimento é obrigatória'),
  cnpj: yup.string().required('CNPJ é obrigatório'),
  whatsapp: yup.string().required('WhatsApp é obrigatório'),
  cicloId: yup.string().required('Ciclo é obrigatório'),
  fotos: yup
    .mixed()
    .notRequired(),
});