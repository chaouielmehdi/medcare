import React from 'react';
import Container from '../../components/Container/Container';
import Empty from '../../components/Empty/Empty';
import MessagerieDoctorCard from '../../components/MessagerieCards/MessagerieDoctorCard';
import MessageriePatientCard from '../../components/MessagerieCards/MessageriePatientCard';
import Row from '../../components/Row/Row';
import { appointmentService } from '../../services/appointmentService';
import { orderService } from '../../services/orderService';
import { patientService } from '../../services/patientService';

function Messagerie() {
	const patient = patientService.getConnected();
	const orders = orderService.getAll() || [];
	const cards = orders.filter((order) => patient.id === order.owner);
	const appointements = appointmentService.get() || [];
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

					<Empty show={!cards.length && !appointements.length} className="my-4" />

					<MessagerieDoctorCard />
					<MessageriePatientCard />
				</div>
			</Row>
		</Container>
	);
}

export default Messagerie;
