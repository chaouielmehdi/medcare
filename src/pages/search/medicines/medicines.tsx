import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import Empty from '../../../components/Empty/Empty';
import Input from '../../../components/Input/Input';
import MedicineCard from '../../../components/MedicineCard/MedicineCard';
import AddToCartModal from '../../../components/modals/AddToCart';
import Row from '../../../components/Row/Row';
import { Medicine, medicines } from '../../../models/Medicine';

function Medicines() {
	const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>(medicines);

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		console.log(value);

		const newMedicines = medicines.filter(
			(medicine) =>
				medicine.name.toLowerCase().includes(value.toLowerCase()) ||
				medicine.category.toLowerCase().includes(value.toLowerCase()) ||
				medicine.code.toLowerCase().includes(value.toLowerCase()) ||
				medicine.composition.toLowerCase().includes(value.toLowerCase()) ||
				medicine.description.toLowerCase().includes(value.toLowerCase()) ||
				medicine.pharmacyName.toLowerCase().includes(value.toLowerCase())
		);

		setFilteredMedicines(newMedicines);
	};

	const [medicineToModal, setMedicineToModal] = useState<Medicine>();

	const [modal, setModal] = useState<boolean>(false);
	const toggle = () => setModal(!modal);

	const handleShowCartModal = (medicine: Medicine) => () => {
		toggle();
		setMedicineToModal(medicine);
	};

	return (
		<Container>
			<Row flex={{ justify: 'center' }} isShadowed={false}>
				<p className="head-text">Trouvez un médicament</p>
			</Row>
			<Row flex={{ justify: 'center' }} isShadowed={false}>
				<div className="input-group col-4">
					<Input
						placeholder="Entrer un mot clé"
						icon="search"
						iconPos="prepend"
						onChange={handleFilterChange}
					/>
				</div>
			</Row>

			<Row className="mt-4" flex={{ justify: 'center' }} isShadowed={false}>
				<>
					<Empty show={!filteredMedicines.length} />

					{filteredMedicines.map((medicine, index) => (
						<MedicineCard
							key={index}
							medicine={medicine}
							showCartModal={handleShowCartModal(medicine)}
							className="col-4 mb-4"
						/>
					))}
				</>
			</Row>
			<AddToCartModal medicine={medicineToModal} toggle={toggle} isOpen={modal} />
		</Container>
	);
}

export default Medicines;
