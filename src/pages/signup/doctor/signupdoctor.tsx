import React from 'react';
import Container from '../../../components/Container/Container';
import Row from '../../../components/Row/Row';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import './signupdoctor.css';
import { doctorSpecialties } from '../../../models/IdValueData';

function SignupDoctor() {
	return (
		<Container>
			<Row isShadowed={false} className=' d-flex flex-column align-items-center'>
				<div className='border-case' style={{ width: '650px' }}>
					<div className='border-case head-title text-center'>
						<p className='head-title '>INSCRIPTION</p>
					</div>

					<div className=' d-flex flex-column '>
						<div className='d-flex flex-column align-items-center text-center rounded-lg mb-5'>
							<p className='mt-2 pt-2'>Bienvenue à MedCare 2.0 !</p>
							<p>Merci de remplir les champs suivants pour crée votre propre compte.</p>
							<div className='d-flex flex-column align-items-center mt-5'>
								<div className='d-flex justify-content-around align-items-center'>
									<div className='input-group mx-4 mb-3'>
										<Input placeholder='Nom ...' icon='user-alt' iconPos='prepend' />
									</div>
									<div className='input-group mx-4 mb-3'>
										<Input placeholder='Prénom ...' icon='user-alt' iconPos='prepend' />
									</div>
								</div>
								<div className='d-flex justify-content-around align-items-center'>
									<div className='input-group mx-4 mb-3'>
										<Input placeholder='E-mail ...' icon='envelope' iconPos='prepend' />
									</div>
									<div className='input-group mx-4 mb-3'>
										<Input
											placeholder='Confirmation d E-mail ...'
											icon='envelope'
											iconPos='prepend'
										/>
									</div>
								</div>
								<div className='d-flex justify-content-around align-items-center mb-4'>
									<div className='input-group mx-4'>
										<Input placeholder='Mot de pass ...' icon='key' iconPos='prepend' />
									</div>
									<div className='input-group mx-4'>
										<Input
											placeholder='Confirmation du mot de pass ...'
											icon='key'
											iconPos='prepend'
										/>
									</div>
								</div>
							</div>
							<hr style={{ width: '450px' }} />
							<div className='d-flex flex-column '>
								<div className='d-flex justify-content-around align-items-center'>
									<div className='input-group mx-4 my-3'>
										<div className='input-group-prepend'>
											<span className='input-group-text'>
												<i className='fas fa-stethoscope'></i>
											</span>
										</div>
										<select defaultValue={-1} className='custom-select'>
											<option value={-1}>Choisir une spécialité ...</option>
											{doctorSpecialties.map((specialite, index) => (
												<option key={index} value={specialite.id}>
													{specialite.value}
												</option>
											))}
										</select>
									</div>
									<div className='input-group mx-4 my-3'>
										<Input placeholder='Address ...' icon='map-marker-alt' iconPos='prepend' />
									</div>
								</div>
								<div className='d-flex justify-content-around align-items-center'>
									<div className='input-group mx-4 mb-3'>
										<Input
											placeholder='Téléphone (personnel) ...'
											icon='mobile-alt'
											iconPos='prepend'
										/>
									</div>
									<div className='input-group mx-4 mb-3'>
										<Input
											placeholder='Téléphone (cabinet) ...'
											icon='phone-alt'
											iconPos='prepend'
										/>
									</div>
								</div>
							</div>
							<div className='mt-3'>
								<input type='checkbox' className='form-check-input' id='exampleCheck1' />
								<label className='form-check-label'>Je certifie sur l'honneur d être un médecin</label>
							</div>

							<div className='d-flex justify-content-center mt-4 mb-2'>
								<Button className='button-style' type='light'>
									Soumettre
								</Button>
							</div>
							<div className='d-flex justify-content-center'>
								<p className='body-text'>
									Un membre de l'équipe MedCare 2.0 vous contactera pour confirmer votre compte et
									compléter votre abonnement.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Row>
		</Container>
	);
}

export default SignupDoctor;
