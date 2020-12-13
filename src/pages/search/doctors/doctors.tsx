import React from 'react';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import DoctorCard from '../../../components/DoctorCard/DoctorCard';
import Input from '../../../components/Input/Input';
import Row from '../../../components/Row/Row';
import { doctors } from '../../../models/Doctor';

function Doctors() {
	return (
		<Container>
			<>
				<div>
					<Row isShadowed={false} flex={{ justify: 'center', align: 'center' }}>
						<Button className="mx-2" icon="building" type="light">
							Au cabinet
						</Button>
						<Button className="mx-2" icon="video" type="light">
							En video
						</Button>
						<Button className="mx-2" icon="home" type="light">
							A domicile
						</Button>
					</Row>
					<Row isShadowed={false} flex={{ justify: 'around', align: 'center' }} className="mt-3">
						<div className="input-group col-4">
							<Input placeholder="Chercher un médecin" icon="user-md" iconPos="prepend" />
						</div>
						<div className="input-group col-4">
							<Input
								placeholder="Choisir une spécialité"
								icon="briefcase-medical"
								iconPos="prepend"
							/>
						</div>
						<div className="input-group col-4">
							<Input placeholder="Choisir une ville" icon="map-marker-alt" iconPos="prepend" />
						</div>
					</Row>
					<Row isShadowed={false} flex={{ justify: 'around', align: 'center' }} className="mb-5">
						<div>
							<Button className="mt-3" icon="search" type="light">
								Chercher
							</Button>
						</div>
					</Row>
				</div>
				{doctors.map((doctor, index) => (
					<DoctorCard key={index} className="mb-4" doctor={doctor} />
				))}
			</>
		</Container>
	);
}

export default Doctors;
