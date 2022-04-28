import * as yup from 'yup';

export const passwordSchema = yup.object({
  username: yup.string().required("Esse campo é obrigatório"),
  password: yup.string().required("Esse campo é obrigatório"),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
});
