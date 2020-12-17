import React from 'react';
import Container from '../../../components/Container/Container';
import Row from '../../../components/Row/Row';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import './signuppatient.css';

function SignupPatient() {
	return (
		<Container>
			<Row isShadowed={false} className='section-block d-flex flex-column align-items-center'>
				<div className='border-case' style={{ width: '650px' }}>
					<div className='border-case head-title text-center'>
						<p className='head-title '>INSCRIPTION</p>
					</div>

					<div className=' d-flex flex-column '>
						<div className='box-border d-flex flex-column align-items-center text-center rounded-lg mb-5'>
							<p className='mt-2 pt-2'>Bienvenue à MedCare 2.0 !</p>
							<p>Merçi de remplir les champs suivants pour crée votre propre compte.</p>
							<div className='input-size input-group mt-5 mb-3'>
								<Input placeholder='Nom ...' icon='user-alt' iconPos='prepend' />
							</div>
							<div className='input-size input-group mb-3'>
								<Input placeholder='Prénom ...' icon='user-alt' iconPos='prepend' />
							</div>
							<div className='input-size input-group mb-3'>
								<Input placeholder='Téléphone ...' icon='phone-alt' iconPos='prepend' />
							</div>
							<div className='input-size input-group mb-3'>
								<Input placeholder='E-mail ...' icon='envelope' iconPos='prepend' />
							</div>
							<div className='input-size input-group mb-3'>
								<Input placeholder='Mot de pass ...' icon='key' iconPos='prepend' />
							</div>
							<div className='input-size input-group'>
								<Input placeholder='Confirmation du mot de pass ...' icon='key' iconPos='prepend' />
							</div>
							<div className='d-flex justify-content-center mt-4'>
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

export default SignupPatient;
