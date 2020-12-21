import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ROUTE } from '../../App';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import Row from '../../components/Row/Row';
import { patients } from '../../models/Patient';
import { patientService } from '../../services/patientService';
import './connexion.css';

function Connexion() {
	const history = useHistory();

	const navigateToSignUp = (route: ROUTE) => () => {
		history.push(route);
	};

	function handleSubmit() {
		const patient = patients.find(
			(patient) => patient.email === inputs.email.value && patient.password === inputs.password.value
		);
		if (!patient) {
			toast.error('Invalide email ou mot de passe');
		} else {
			patientService.login(patient);
			window.location.href = '/messagerie';
		}
	}

	const [inputs, setInputs] = useState({
		email: { value: '', message: '', isError: true },
		password: { value: '', message: '', isError: true },
	});
	const check = {
		email: (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			const newInputs = { ...inputs };
			if (value === '') {
				newInputs.email = { value, message: 'Le login est obligatoire!', isError: true };
			} else {
				newInputs.email = { value, message: '', isError: false };
			}
			setInputs(newInputs);
		},
		password: (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			const newInputs = { ...inputs };
			if (value === '') {
				newInputs.password = {
					value,
					message: 'Le mot de passe ne peut pas etre vide!',
					isError: true,
				};
			} else {
				newInputs.password = { value, message: '', isError: false };
			}
			setInputs(newInputs);
		},
	};

	return (
		<Container>
			<Row isShadowed={false} className=" d-flex flex-column align-items-center">
				<div className="border-case" style={{ width: '650px' }}>
					<div className="border-case head-title text-center">
						<p className="head-title ">CONNEXION</p>
					</div>

					<div className=" d-flex flex-column ">
						<div className="d-flex flex-column align-items-center text-center rounded-lg mb-5">
							<p className="mt-2 pt-2">Bienvenue à MedCare 2.0 !</p>
							<p>Merçi de remplir les champs suivants pour accéder à votre compte.</p>
							<div className="input-group mt-5 mb-2" style={{ width: '550px' }}>
								<Input
									placeholder="E-mail ..."
									icon="envelope"
									iconPos="prepend"
									onChange={check.email}
									valid={inputs.email.message === ''}
								/>
								<div className="invalid-feedback text-left ml-5">{inputs.email.message}</div>
							</div>
							<div className="input-group" style={{ width: '550px' }}>
								<Input
									placeholder="Mot de passe ..."
									icon="key"
									iconPos="prepend"
									onChange={check.password}
									valid={inputs.password.message === ''}
									type="password"
								/>
								<div className="invalid-feedback text-left ml-5">
									{inputs.password.message}
								</div>
							</div>
							<div className="d-flex align-items-end mt-2 mb-4" style={{ fontSize: '12px' }}>
								<a href=" ">Mot de passe oublié?</a>
							</div>
							<div className="d-flex justify-content-center mb-3">
								<Button
									className="button-style"
									type="light"
									onClick={handleSubmit}
									disabled={inputs.password.isError || inputs.email.isError}
								>
									Se connecter
								</Button>
							</div>
							<p>Vous n'avez pas encore un compte? Inscrivez-vous !</p>
							<div className="row w-50">
								<Button
									onClick={navigateToSignUp(ROUTE.SIGN_UP_PATIENT)}
									type="light"
									className="my-2 w-100"
								>
									S'inscrire Patient
								</Button>
							</div>
							<div className="row w-50">
								<Button
									onClick={navigateToSignUp(ROUTE.SIGN_UP_DOCTOR)}
									type="light"
									className="my-2 w-100"
								>
									S'inscrire Médecin
								</Button>
							</div>
							<div className="row w-50">
								<Button
									onClick={navigateToSignUp(ROUTE.SIGN_UP_PHARMACIEN)}
									type="light"
									className="my-2 w-100"
								>
									S'inscrire Pharmacien
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
