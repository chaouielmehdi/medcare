import React from 'react';
import Container from '../../../components/Container/Container';
import MedicineCard from '../../../components/MedicineCard/MedicineCard';
import Row from '../../../components/Row/Row';
import { medicines } from '../../../models/Medicine';

function Medicines() {
	return (
		<Container>
			<Row isShadowed={false}>
				{medicines.map((medicine, index) => (
					<MedicineCard key={index} className="col-4 mb-4" medicine={medicine} />
				))}
			</Row>
		</Container>
	);
}

export default Medicines;
