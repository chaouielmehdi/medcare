import React from 'react';
import Container from '../../../components/Container/Container';
import PharmacyCard from '../../../components/PharmacyCard/PharmacyCard';
import { pharmacies } from '../../../models/Pharmacy';

function Pharmacies() {
	return (
		<Container>
			{pharmacies.map((pharmacy, index) => (
				<PharmacyCard key={index} className="mb-4" pharmacy={pharmacy} />
			))}
		</Container>
	);
}

export default Pharmacies;
