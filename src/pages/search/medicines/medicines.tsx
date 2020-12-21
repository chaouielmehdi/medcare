import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ROUTE } from '../../../App';
import Container from '../../../components/Container/Container';
import Empty from '../../../components/Empty/Empty';
import Input from '../../../components/Input/Input';
import MedicineCard from '../../../components/MedicineCard/MedicineCard';
import AddToCartModal from '../../../components/modals/AddToCartModal';
import Row from '../../../components/Row/Row';
import { Medicine, medicines } from '../../../models/Medicine';
import { pharmacies } from '../../../models/Pharmacy';
import { medicineFilterService } from '../../../services/medicineFilterService';
import { patientService } from '../../../services/patientService';

function Medicines(props: { setCartCount: () => void }) {
	const history = useHistory();

	const { pharmacyId } = useParams<{ pharmacyId: string }>();

	const getDefaultInputValue = (): string => {
		// if pharmacy in url or medicine name in local storage
		const pharmacy = pharmacies.find((pharmacy) => pharmacy.id === +pharmacyId);
		let defaultInputValue = pharmacy?.name || medicineFilterService.get() || '';

		medicineFilterService.remove();

		return defaultInputValue;
	};

	const defaultInputValue = getDefaultInputValue();

	const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>(medicines);
	const [inputValue, setInputValue] = useState<string>(defaultInputValue);

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;

		setInputValue(value);
	};

	useEffect(() => {
		const newMedicines = medicines.filter(
			(medicine) =>
				medicine.name.toLowerCase().includes(inputValue.toLowerCase()) ||
				medicine.category.toLowerCase().includes(inputValue.toLowerCase()) ||
				medicine.code.toLowerCase().includes(inputValue.toLowerCase()) ||
				medicine.composition.toLowerCase().includes(inputValue.toLowerCase()) ||
				medicine.description.toLowerCase().includes(inputValue.toLowerCase()) ||
				medicine.pharmacyName.toLowerCase().includes(inputValue.toLowerCase())
		);
		setFilteredMedicines(newMedicines);
	}, [inputValue]);

	// Modal management
	const [medicineToModal, setMedicineToModal] = useState<Medicine>();

	const [modal, setModal] = useState<boolean>(false);
	const toggle = () => setModal(!modal);

	const handleShowCartModal = (medicine: Medicine) => () => {
		const isConnected = patientService.isConnected();

		if (isConnected) {
			toggle();
			setMedicineToModal(medicine);
		} else {
			toast.warn("Connectez-vous d'abord!");
			history.push(ROUTE.LOGIN);
		}
	};

	return (
		<Container>
			<Row flex={{ justify: 'center' }} isShadowed={false}>
				<p className="head-text">Trouvez un médicament {inputValue && 'chez : ' + inputValue}</p>
			</Row>
			<Row flex={{ justify: 'center' }} isShadowed={false}>
				<div className="input-group col-4">
					<Input
						placeholder="Entrer un mot clé"
						icon="search"
						iconPos="prepend"
						onChange={handleFilterChange}
						defaultValue={defaultInputValue}
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
			<AddToCartModal
				setCartCount={props.setCartCount}
				medicine={medicineToModal}
				toggle={toggle}
				isOpen={modal}
			/>
		</Container>
	);
}

export default Medicines;
