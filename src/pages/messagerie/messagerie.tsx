import React from 'react';
import Container from '../../components/Container/Container';
import Icon from '../../components/Icon/Icon';
import MessageriePatientCard from '../../components/MessagerieCards/MessageriePatientCard';
import Row from '../../components/Row/Row';
import { orderService } from '../../services/orderService';
import { patientService } from '../../services/patientService';

function Messagerie() {
	const patient = patientService.getConnected();
	console.log(patient.id);

	const orders = orderService.getAll() || [];
	//console.log(orders[0].owner);

	const cards = orders.filter((order) => patient.id === order.owner);
	//console.log(cards);

	/* const patient = patients.find(
			(patient) => patient.email === inputs.email.value && patient.password === inputs.password.value
		);
		if (!patient) {
			toast.error('Invalide email ou mot de passe');
		} else {
			patientService.login(patient);
			window.location.href = '/messagerie';
		} */

	return (
		<Container>
			<Row isShadowed={false} flex={{ align: 'center' }} className=" d-flex flex-column p-4">
				<div className="container-fluid px-5">
					<div className="head-text text-center mb-5">
						<p>BIENVENUE DANS VOTRE ESPACE !</p>
						<p>{patient.name}</p>
					</div>
					<div className="border-case head-title border-radius text-center py-2">
						<p className="m-0">MESSAGERIE</p>
					</div>

					<MessageriePatientCard />
				</div>
			</Row>
		</Container>
	);
}

export default Messagerie;
