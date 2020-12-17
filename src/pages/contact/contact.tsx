import React from 'react';
import Button, { ButtonType } from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Icon from '../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import Row from '../../components/Row/Row';
import { smoothScroll } from '../../services/smoothScroll';
import Address from '../../assets/img/Address.png';

import './contact.css';

function Contact() {
	return (
		<Container>
			<Row flex={{ align: 'center' }} className='section-block d-flex flex-column p-4'>
				<div>
					<div className='head-text text-center my-3'>
						<p>Vous avez une question à nous poser ? </p>
					</div>

					<div className='d-flex justify-content-around my-3'>
						<div className='col-4 mt-5'>
							<h6>Besoin d'aide ? </h6>
							<h6>
								Gangnez du temps en formulant votre question en ligne afain que nous vous aidions !{' '}
							</h6>
						</div>
						<div className='col-8'>
							<form className='d-flex justify-content-around my-3'>
								<div className='input-group'>
									<p>Vous êtes : </p>
								</div>
								<div className='input-group d-flex align-items-center'>
									<Input className='mx-2 mb-2' type='radio' name='radioTest'></Input>
									<label>Patient</label>
								</div>

								<div className='input-group d-flex align-items-center '>
									<Input className='mx-2 mb-2' type='radio' name='radioTest'></Input>
									<label>Médecin</label>
								</div>
								<div className='input-group d-flex align-items-center'>
									<Input className='mx-2 mb-2' type='radio' name='radioTest'></Input>
									<label>Pharmacien</label>
								</div>
							</form>
							<div className='mb-3'>
								<textarea
									className='form-control'
									id='writeTextArea'
									placeholder='On vous écoute ...'
									style={{ height: '150px' }}
								></textarea>
							</div>
							<div>
								<p>
									Merci de ne pas saisir des données de santé a caractere personnel, le destinataire
									de ce formulaire n'est pas habilité à traiter ce type d'informations.
								</p>
								<hr style={{ width: '650px' }} />
								<p className='text-center'>
									Pour pouvoir vous répondre (ou vous rappeler) merci de préciser :
								</p>
								<div className='d-flex flex-column align-items-center'>
									<div className='input-group mb-2' style={{ width: '550px' }}>
										<Input placeholder='Nom et Prénom ...' icon='id-card' iconPos='prepend' />
									</div>
									<div className='input-group mb-2' style={{ width: '550px' }}>
										<Input placeholder='E-mail ...' icon='envelope' iconPos='prepend' />
									</div>
									<div className='input-group mb-2' style={{ width: '550px' }}>
										<Input placeholder='Tél ..' icon='mobile-alt' iconPos='prepend' />
									</div>
									<div className='d-flex justify-content-center'>
										<Button icon='paper-plane' type='light'>
											Envoyer
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Row>
			<Row flex={{ align: 'center' }} className='section-block d-flex flex-column mt-4 p-4'>
				<div className='d-flex justify-content-around container-fluid my-1'>
					<div className='col-4'>
						<div className='d-flex align-items-center mt-5'>
							<Icon name='clock' className='mx-3 mb-2'></Icon>
							<p className='mt-2'>Du Lundi au Dimanche, 24h/24 </p>
						</div>
						<div className='d-flex align-items-center'>
							<Icon name='map-marker-alt' className='mx-3 mb-2'></Icon>
							<p className='mt-2'>2, Place du Koweit, Ibéria, Tanger - Maroc </p>
						</div>
						<div className='d-flex align-items-center '>
							<Icon name='phone-alt' className='mx-3 mb-2'></Icon>
							<p className='mt-2'>+212 6 39 56 01 84 </p>
						</div>
						<div className='d-flex align-items-center'>
							<Icon name='at' className='mx-3 mb-2'></Icon>
							<p className='mt-2'>contact@MedCare.net </p>
						</div>
					</div>
					<div className='col-8'>
						<div className='rounded'>
							<img src={Address} alt='' className='img-fluid' />
						</div>
					</div>
				</div>
			</Row>
		</Container>
	);
}

export default Contact;
