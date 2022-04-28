import { Box, Button, Container, Grow, Paper, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '../../constants/routes';
import { clientLoginYupResolver } from '../../validations';

export function ClientLogin() {
	const navigate = useNavigate();

	const { control, register, handleSubmit } = useForm({
		mode: 'onChange',
		resolver: clientLoginYupResolver
	});

	function handleClick(data: any) {
		console.log(data);
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
						<Typography variant="h4" sx={{ userSelect: 'none', color: 'primary.contrastText' }}>Seja bem-vindo!</Typography>
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
									label={'Username'}
								/>
								<TextField
									fullWidth
									inputProps={{ type: 'password' }}
									label={'Senha'}
								/>
								<Button onClick={handleSubmit(handleClick)} variant={'contained'}>
									<Typography>Login</Typography>
								</Button>
							</Stack>
							<Box
								sx={{
									marginTop: 4,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 1,
									justifyContent: 'center'
								}}
							>
								<Typography>Ainda não tem acesso? Faça o seu cadastro!</Typography>
								<Button onClick={() => navigate(RouterPath.CLIENT_REGISTRATION)} variant={'contained'}>
									<Typography>Cadastrar</Typography>
								</Button>
							</Box>
						</Paper>
					</Box>
				</Box>
			</Grow>
		</Container>
	);
}
