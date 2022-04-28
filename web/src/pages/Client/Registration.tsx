import { Box, Button, Container, Grow, Paper, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { getClientRegistration } from '../../services/auth';
import { clientPasswordYupResolver } from '../../validations';

type ClientRegistrationForm = {
	username: string;
	password: string;
	passwordConfirmation: string;
}

export function ClientRegistration() {
	const { control, register, handleSubmit, formState: { errors } } = useForm<ClientRegistrationForm>({
		mode: 'onChange',
		resolver: clientPasswordYupResolver
	});

	console.log(errors)

	async function handleClick(data: ClientRegistrationForm) {
		try {
			await getClientRegistration(data.username, data.password)
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<Container>
			<Grow in={true} timeout={1000}>
				<Box
					sx={{
						height: '100vh'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							height: '100vh',
							alignItems: 'center',
							justifyContent: 'space-evenly'
						}}
					>
						<Paper
							sx={{
								borderRadius: '5px',
								padding: '16px 32px',
							}}
						>
							<Stack direction={'column'} spacing={4}>
								<TextField
									{...register('username')}
									fullWidth
									error={!!errors.username}
									required
									label={'Nome de usuário'}
								/>
								<TextField
									{...register('password')}
									error={!!errors.password}
									required
									fullWidth
									inputProps={{ type: 'password' }}
									label={'Senha'}
								/>
								<TextField
									{...register('passwordConfirmation')}
									error={!!errors.passwordConfirmation}
									required
									fullWidth
									inputProps={{ type: 'password' }}
									label={'Confirme sua senha'}
								/>
								<Button onClick={handleSubmit(handleClick)} variant={'contained'}>
									<Typography>Cadastrar</Typography>
								</Button>
							</Stack>
						</Paper>
					</Box>
				</Box>
			</Grow>
		</Container>
	);
}
