import React from 'react';
import Container from '../../components/Container/Container';
import MessageriePatientCard from '../../components/MessagerieCards/MessageriePatientCard';
import Row from '../../components/Row/Row';
import { patientService } from '../../services/patientService';

function Messagerie() {
	const patient = patientService.getConnected();
	return (
		<Container>
			<Row flex={{ align: 'center' }} className=" d-flex flex-column p-4">
				<div className="container-fluid px-5">
					<div className="head-text text-center my-3">
						<p>BIENVENUE DANS VOTRE ESPACE !</p>
						<p>{patient.name}</p>
					</div>
					<div className="border-case head-title text-center py-2">
						<p className="m-0">MESSAGERIE</p>
					</div>
					<div className="d-flex justify-content-around my-3">
						<MessageriePatientCard></MessageriePatientCard>
					</div>
				</div>
			</Row>
		</Container>
	);
}

export default Messagerie;
