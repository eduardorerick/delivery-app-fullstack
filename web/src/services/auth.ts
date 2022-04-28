import { api } from '../utils/api';

export async function getClientLogin(username: string, password: string) {
	const user = await api.post('/client/authenticate', { username, password });
	return user;
}


export async function getClientRegistration(username: string, password: string) {
	const newUser = await api.post('/client', { username, password })
	return newUser
}