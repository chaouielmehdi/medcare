import React from 'react';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './connexion.css';

function Connexion() {
	return (
		<Container>
			<Row isShadowed={false} className=' d-flex flex-column align-items-center'>
				<div className='border-case' style={{ width: '650px' }}>
					<div className='border-case head-title text-center'>
						<p className='head-title '>CONNEXION</p>
					</div>

					<div className=' d-flex flex-column '>
						<div className=' d-flex flex-column align-items-center text-center rounded-lg mb-5'>
							<p className='mt-2 pt-2'>Bienvenue à MedCare 2.0 !</p>
							<p>Merçi de remplir les champs suivants pour accéder à votre compte.</p>
							<div className='input-group mt-5 mb-2' style={{ width: '550px' }}>
								<Input placeholder='E-mail ...' icon='envelope' iconPos='prepend' />
							</div>
							<div className='input-group' style={{ width: '550px' }}>
								<Input placeholder='Mot de pass ...' icon='key' iconPos='prepend' />
							</div>
							<div className='d-flex align-items-end mt-2 mb-4' style={{ fontSize: '12px' }}>
								<a href='#'>Mot de pass oublié?</a>
							</div>
							<div className='d-flex justify-content-center mb-3'>
								<Button className='button-style' type='light'>
									Se connecter
								</Button>
							</div>
							<p>Vous n'avez pas encore un compte? Inscrivez-vous !</p>
							<div className='d-flex justify-content-center'>
								<Button className='button-style' type='light'>
									S'inscrire
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Row>
		</Container>
	);
}

export default Connexion;
