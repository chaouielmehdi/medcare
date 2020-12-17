import React from 'react';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './connexion.css';

function Connexion() {
	return (
		<Container>
			<Row isShadowed={true} className='section-block d-flex flex-column p-4 mt-5'>
				<div>
					<div className='border head-title text-center'>
						<p className='head-title'>Connexion</p>
					</div>

					<div className='border d-flex d-flex flex-column '>
						<div className='border box-border d-flex flex-column align-items-center text-center rounded-lg my-3 p-3'>
							<p>Bienvenue à MedCare 2.0 !</p>
							<p>Merçi de remplir les champs suivants pour accéder à votre compte.</p>
							<div className='input-group mt-5 mb-2' style={{ width: '550px' }}>
								<Input placeholder='E-mail ...' icon='envelope' iconPos='prepend' />
							</div>
							<div className='input-group mb-2' style={{ width: '550px' }}>
								<Input placeholder='Mot de pass ...' icon='key' iconPos='prepend' />
							</div>
							<a href='#'>Mot de pass oublié?</a>
							<div className='d-flex justify-content-center'>
								<Button type='light'>Se connecter</Button>
							</div>
							<p>Vous n'avez pas encore un compte? Inscrivez-vous !</p>
							<div className='d-flex justify-content-center'>
								<Button type='light'>S'inscrire</Button>
							</div>
						</div>
					</div>
				</div>
			</Row>
		</Container>
	);
}

export default Connexion;
