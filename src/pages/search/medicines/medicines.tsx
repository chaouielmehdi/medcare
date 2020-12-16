import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import MedicineCard from '../../../components/MedicineCard/MedicineCard';
import AddToCart from '../../../components/modals/AddToCart';
import Row from '../../../components/Row/Row';
import { Medicine, medicines } from '../../../models/Medicine';

function Medicines() {
	const [medicineToModal, setMedicineToModal] = useState<Medicine>();

	const [modal, setModal] = useState<boolean>(false);
	const toggle = () => setModal(!modal);

	const handleShowCart = (medicine: Medicine) => () => {
		toggle();
		setMedicineToModal(medicine);
	};

	return (
		<Container>
			<Row isShadowed={false}>
				{medicines.map((medicine, index) => (
					<MedicineCard
						key={index}
						medicine={medicine}
						showCartModal={handleShowCart(medicine)}
						className="col-4 mb-4"
					/>
				))}
			</Row>
			<AddToCart medicine={medicineToModal} toggle={toggle} isOpen={modal} />
		</Container>
	);
}

export default Medicines;
