import { api } from '../utils/api';

export async function getDeliveryManLogin(username: string, password: string) {
  const user = await api.post('/deliveryman/authenticate', { username, password });
  return user;
}


export async function getDeliveryManRegistration(username: string, password: string) {
  const newUser = await api.post('/deliveryman', { username, password })
  return newUser
}