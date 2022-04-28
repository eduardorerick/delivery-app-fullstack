import * as yup from 'yup';

export const passwordSchema = yup.object({
  username: yup.string().required("Esse campo é obrigatório"),
  password: yup.string().required("Esse campo é obrigatório"),
  passwordConfirmation: yup.string().required("Esse campo é obrigatório")
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
});
