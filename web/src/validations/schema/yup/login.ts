import * as yup from 'yup';

export const loginSchema = yup.object({
	username: yup.string().required("Esse campo é obrigatório"),
	password: yup.string().required("Esse campo é obrigatório")
});
