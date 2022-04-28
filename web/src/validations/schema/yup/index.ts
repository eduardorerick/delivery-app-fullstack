import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './login';
import { passwordSchema } from './password';


export const clientPasswordYupResolver = yupResolver(passwordSchema)
export const clientLoginYupResolver = yupResolver(loginSchema)