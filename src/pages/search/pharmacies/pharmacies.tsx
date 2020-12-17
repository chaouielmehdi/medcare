import React from 'react';
import './pharmacies.css';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import Input from '../../../components/Input/Input';
import PharmacyCard from '../../../components/PharmacyCard/PharmacyCard';
import Row from '../../../components/Row/Row';
import { pharmacies } from '../../../models/Pharmacy';
import { cities } from '../../../models/IdValueData';
import { useState } from 'react';

function Pharmacies() {
	const [filteredPharmacies, setPharmacies] = useState(pharmacies);
	const filterCities = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const cityName = cities.find((city) => +event.target.value === city.id)?.value;
		if (cityName) {
			const listPharmacies = pharmacies.filter((pharmacy) =>
				pharmacy.address.toLowerCase().includes(cityName.toLowerCase())
			);
			console.log(listPharmacies);
			setPharmacies(listPharmacies);
		} else if (+event.target.value === -1) {
			setPharmacies(pharmacies);
		}
	};
	return (
		<Container>
			<>
				<div className='mb-5'>
					<div className='head-text text-center my-3'>
						<p>Trouvez votre pharmacie</p>
					</div>
					<Row isShadowed={false} flex={{ justify: 'center', align: 'center' }} className='mb-5'>
						<div className='input-group col-4'>
							<Input
								placeholder='Entrer le nom de la pharmacie'
								icon='clinic-medical'
								iconPos='prepend'
							/>
						</div>
						<div className=' col-1'>
							<p className='text-center m-0'>Ou</p>
						</div>
						<div className='input-group col-4'>
							<div className='input-group-prepend'>
								<span className='input-group-text'>
									<i className='fas fa-map-marker-alt'></i>
								</span>
							</div>
							<select defaultValue={-1} className='custom-select' onChange={filterCities}>
								<option value={-1}>Toute les villes</option>
								{cities.map((city, index) => (
									<option key={index} value={city.id}>
										{city.value}
									</option>
								))}
							</select>
						</div>
					</Row>
				</div>
				{filteredPharmacies.map((pharmacy, index) => (
					<PharmacyCard key={index} className='mb-4' pharmacy={pharmacy} />
				))}
			</>
		</Container>
	);
}

export default Pharmacies;
