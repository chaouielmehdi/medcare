import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import Row from '../../../components/Row/Row';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import './signuppatient.css';

function SignupPatient() {
	const [errors, setErrors] = useState({
		fname: '',
		lname: '',
		email: '',
		phone: '',
		password: '',
		confirmpass: '',
	});

	const validate = {
		fname: (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			if (value === '') {
				const newErrors = { ...errors };
				newErrors.fname = 'Le nom est obligatoire!';
				setErrors(newErrors);
			}
		},
		lname: (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			if (value === '') {
				const newErrors = { ...errors };
				newErrors.lname = 'Le prénom est obligatoire!';
				setErrors(newErrors);
			}
		},
		email: (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			if (value === '') {
				const newErrors = { ...errors };
				newErrors.email = 'Le email est obligatoire!';
				setErrors(newErrors);
			}
			// if (!re.test(String(value).toLowerCase())) {
			// 	const newErrors = { ...errors };
			// 	newErrors.email = 'Incorrect';
			// 	setErrors(newErrors);
			// }
		},
		phone: (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			if (value === '') {
				const newErrors = { ...errors };
				newErrors.phone = 'Le prénom est obligatoire!';
				setErrors(newErrors);
			}
		},
		password: (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			if (value === '') {
				const newErrors = { ...errors };
				newErrors.password = 'Le prénom est obligatoire!';
				setErrors(newErrors);
			}
		},
		confirmpass: (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			if (value === '') {
				const newErrors = { ...errors };
				newErrors.confirmpass = 'Le prénom est obligatoire!';
				setErrors(newErrors);
			}
		},
	};

	return (
		<Container>
			<Row isShadowed={false} className=" d-flex flex-column align-items-center">
				<div className="border-case" style={{ width: '650px' }}>
					<div className="border-case head-title text-center">
						<p className="head-title ">INSCRIPTION Patient</p>
					</div>

					<div className=" d-flex flex-column ">
						<div className="d-flex flex-column align-items-center text-center rounded-lg mb-5">
							<p className="mt-2 pt-2">Bienvenue à MedCare 2.0 !</p>
							<p>Merçi de remplir les champs suivants pour crée votre propre compte.</p>
							<div className="input-size input-group mt-5 mb-3">
								<Input
									placeholder="Nom ..."
									icon="user-alt"
									iconPos="prepend"
									onChange={validate.fname}
									valid={errors.fname === ''}
								/>
								<div className="invalid-feedback text-left ml-5">{errors.fname}</div>
							</div>
							<div className="input-size input-group mb-3">
								<Input
									placeholder="Prénom ..."
									icon="user-alt"
									iconPos="prepend"
									onChange={validate.lname}
									valid={errors.lname === ''}
								/>
							</div>
							<div className="input-size input-group mb-3">
								<Input
									placeholder="Téléphone ..."
									icon="phone-alt"
									iconPos="prepend"
									onChange={validate.phone}
									valid={errors.phone === ''}
								/>
							</div>
							<div className="input-size input-group mb-3">
								<Input
									placeholder="E-mail ..."
									icon="envelope"
									iconPos="prepend"
									onChange={validate.email}
									valid={errors.email === ''}
								/>
							</div>
							<div className="input-size input-group mb-3">
								<Input
									placeholder="Mot de pass ..."
									icon="key"
									iconPos="prepend"
									onChange={validate.password}
									valid={errors.password === ''}
								/>
							</div>
							<div className="input-size input-group">
								<Input
									placeholder="Confirmation du mot de pass ..."
									icon="key"
									iconPos="prepend"
									onChange={validate.confirmpass}
									valid={errors.confirmpass === ''}
								/>
							</div>
							<div className="d-flex justify-content-center mt-4">
								<Button className="button-style" type="light">
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
