import React, { useEffect, useState } from 'react';
import Container from '../../../components/Container/Container';
import Empty from '../../../components/Empty/Empty';
import Input from '../../../components/Input/Input';
import PharmacyCard from '../../../components/PharmacyCard/PharmacyCard';
import Row from '../../../components/Row/Row';
import { cities, IdValueData } from '../../../models/IdValueData';
import { pharmacies, Pharmacy } from '../../../models/Pharmacy';
import { pharmacyFilterService } from '../../../services/pharmacyFilterService';

function Pharmacies() {
	const getDefaultInputValue = (): string => {
		let defaultInputValue = pharmacyFilterService.get() || '';

		pharmacyFilterService.remove();

		return defaultInputValue;
	};

	const defaultInputValue = getDefaultInputValue();

	const [filteredPharmacies, setPharmacies] = useState(pharmacies);
	const [selectedCity, setSelectedCity] = useState<IdValueData>();
	const [pharmacyName, setPharmacyName] = useState<string>(defaultInputValue);

	const getCity = (id: number): IdValueData | undefined => {
		return cities.find((city) => id === city.id);
	};

	const handleCityChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const cityId = +event.target.value;
		const city = getCity(cityId);

		setSelectedCity(city);
	};

	const handlePharmacyChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setPharmacyName(value);
	};

	useEffect(() => {
		const filterByCity = (pharmacies: Pharmacy[]): Pharmacy[] => {
			const cityName = selectedCity?.value;

			if (cityName) {
				return pharmacies.filter((pharmacy) =>
					pharmacy.address.toLowerCase().includes(cityName.toLowerCase())
				);
			}

			return pharmacies;
		};

		const filterByPharmacy = (pharmacies: Pharmacy[]): Pharmacy[] => {
			if (pharmacyName) {
				return pharmacies.filter((pharmacy) =>
					pharmacy.name.toLowerCase().includes(pharmacyName.toLowerCase())
				);
			}

			return pharmacies;
		};

		const newPharmacies = filterByCity(filterByPharmacy(pharmacies));
		setPharmacies(newPharmacies);
	}, [selectedCity, pharmacyName]);

	return (
		<Container>
			<div className="mb-5">
				<div className="head-text text-center">
					<p>Trouvez votre pharmacie</p>
				</div>
				<Row isShadowed={false} flex={{ justify: 'center', align: 'center' }} className="mb-5">
					<div className="input-group col-4">
						<Input
							placeholder="Entrer le nom de la pharmacie"
							icon="clinic-medical"
							iconPos="prepend"
							onChange={handlePharmacyChanged}
							defaultValue={defaultInputValue}
						/>
					</div>
					<div className="col-1">
						<p className="text-center m-0">Ou</p>
					</div>
					<div className="input-group col-4">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<i className="fas fa-map-marker-alt"></i>
							</span>
						</div>
						<select
							className="custom-select"
							value={selectedCity?.id}
							onChange={handleCityChanged}
						>
							<option>Toute les villes</option>
							{cities.map((city, index) => (
								<option key={index} value={city.id}>
									{city.value}
								</option>
							))}
						</select>
					</div>
				</Row>
			</div>
			<>
				<Empty show={!filteredPharmacies.length} />

				{filteredPharmacies.map((pharmacy, index) => (
					<div key={index} className="mb-4">
						<PharmacyCard pharmacy={pharmacy} />
					</div>
				))}
			</>
		</Container>
	);
}

export default Pharmacies;
