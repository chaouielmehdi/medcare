import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE } from '../../App';
import Doctor1 from '../../assets/img/Doctor1.png';
import Pharmacien from '../../assets/img/Pharmacien.png';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import Row from '../../components/Row/Row';
import { cities, doctorFields, IdValueData } from '../../models/IdValueData';
import { doctorFilterService, IDoctorFilterType } from '../../services/doctorFilterService';
import './home.css';

function Home() {
	const history = useHistory();

	// -----------------
	// doctor filters
	// -----------------
	const [doctorFilter, setDoctorFilter] = useState<IDoctorFilterType>({
		consultation: {
			cabinet: {
				available: true,
			},
			video: {
				available: true,
			},
			home: {
				available: true,
			},
		},
	});

	const handleConsultationSelected = (selected: 'cabinet' | 'video' | 'home') => () => {
		const newDoctorFilter = { ...doctorFilter };

		newDoctorFilter.consultation[selected].available = !newDoctorFilter.consultation[selected].available;

		setDoctorFilter(newDoctorFilter);
	};

	const handleDoctorChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDoctorFilter((prevState) => {
			return { ...prevState, doctorName: event.target.value };
		});
	};

	const getCity = (id: number): IdValueData | undefined => {
		return cities.find((city) => id === city.id);
	};

	const handleCityChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const cityId = +event.target.value;
		const city = getCity(cityId);

		const newDoctorFilter = { ...doctorFilter };
		newDoctorFilter.selectedCity = city;

		setDoctorFilter(newDoctorFilter);
	};

	const getField = (id: number): IdValueData | undefined => {
		return doctorFields.find((field) => id === field.id);
	};

	const handleFieldChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const fieldId = +event.target.value;
		const field = getField(fieldId);

		const newDoctorFilter = { ...doctorFilter };
		newDoctorFilter.selectedField = field;

		setDoctorFilter(newDoctorFilter);
	};

	const handleSearchDoctor = () => {
		doctorFilterService.add(doctorFilter);
		history.push(ROUTE.DOCTORS);
	};

	// -----------------
	// pharmacy filters
	// -----------------

	return (
		<Container>
			<Row isShadowed={true} className="d-flex align-items-center p-4">
				<div className="col-7 text-center align-self-center my-3">
					<div className="h-25">
						<Button
							onClick={handleConsultationSelected('cabinet')}
							className="mx-2"
							icon="building"
							type={doctorFilter.consultation?.cabinet.available ? 'info' : 'light'}
						>
							Au cabinet
						</Button>
						<Button
							onClick={handleConsultationSelected('video')}
							className="mx-2"
							icon="video"
							type={doctorFilter.consultation?.video.available ? 'info' : 'light'}
						>
							En video
						</Button>
						<Button
							onClick={handleConsultationSelected('home')}
							className="mx-2"
							icon="home"
							type={doctorFilter.consultation?.home.available ? 'info' : 'light'}
						>
							A domicile
						</Button>
					</div>

					<div className=" m-5">
						<div className="input-group mb-3">
							<Input
								onChange={handleDoctorChanged}
								placeholder="Chercher un médecin"
								icon="user-md"
								iconPos="prepend"
							/>
						</div>
						<p className="text-center">Ou</p>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-stethoscope"></i>
								</span>
							</div>
							<select
								defaultValue={-1}
								className="custom-select"
								value={doctorFilter.selectedField?.id}
								onChange={handleFieldChanged}
							>
								<option value={-1}>Choisir une spécialité ...</option>
								{doctorFields.map((field, index) => (
									<option key={index} value={field.id}>
										{field.value}
									</option>
								))}
							</select>
						</div>
						<p className="text-center">Ou</p>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-map-marker-alt"></i>
								</span>
							</div>
							<select
								defaultValue={-1}
								className="custom-select"
								value={doctorFilter.selectedCity?.id}
								onChange={handleCityChanged}
							>
								<option value={-1}>Toute les villes</option>
								{cities.map((city, index) => (
									<option key={index} value={city.id}>
										{city.value}
									</option>
								))}
							</select>
						</div>
						<div>
							<Button onClick={handleSearchDoctor} icon="search" type="light">
								Chercher
							</Button>
						</div>
					</div>
				</div>

				<div className=" col-5  text-center my-3">
					<p className="head-text">Trouvez votre médecin et prenez rendez-vous ! </p>
					<div className="doctor1 rounded m-5">
						<img src={Doctor1} alt="" />
					</div>
				</div>
			</Row>

			<Row isShadowed={true} className="d-flex align-items-center p-4 mt-5">
				<div className=" col-5  text-center my-3">
					<p className="head-text">Trouvez votre pharmacie et commandez vos produits de santé ! </p>
					<div className="doctor1 rounded m-5">
						<img src={Pharmacien} alt="" />
					</div>
				</div>

				<div className="col-7 text-center align-self-center my-3">
					<div className=" m-5">
						<div className="input-group mb-3">
							<Input placeholder="Chercher une pharmacie" icon="cart-plus" iconPos="prepend" />
							<Button className="ml-5" icon="search" type="light">
								Chercher
							</Button>
						</div>
						<div className="input-group mb-3">
							<Input placeholder="Chercher un produit" icon="capsules" iconPos="prepend" />
							<Button className="ml-5" icon="search" type="light">
								Chercher
							</Button>
						</div>
					</div>
				</div>
			</Row>

			<Row isShadowed={true} className="section-block d-flex flex-column p-4 mt-5">
				<div>
					<div className="head-text text-center my-3">
						<p>Téléconsultation via MedCare 2.0, comment ça marche ? </p>
					</div>

					<div className="d-flex justify-content-around">
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3 p-3">
							<p className="font-txt">Inscrivez-vous à notre plateforme MedCare 2.0</p>
						</div>
						<div className="d-flex align-items-center text-center my-3">
							<i className="fas fa-arrow-circle-right fa-3x"></i>
						</div>
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3 p-3">
							<p className="font-txt">Cherchez un professionnel de santé </p>
						</div>
						<div className="d-flex align-items-center text-center my-3">
							<i className="fas fa-arrow-circle-right fa-3x"></i>
						</div>
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3 p-3">
							<p className="font-txt">Prenez votre rendez-vous!</p>
						</div>
					</div>
				</div>
			</Row>
			<Row isShadowed={true} className="section-block d-flex flex-column p-4 mt-5">
				<div>
					<div className="head-text text-center my-3">
						<p>Télépharmacie via MedCare 2.0, comment ça marche ? </p>
					</div>

					<div className="d-flex justify-content-around">
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3 p-3">
							<p className="font-txt">Inscrivez-vous à notre plateforme MedCare 2.0</p>
						</div>
						<div className="d-flex align-items-center text-center my-3">
							<i className="fas fa-arrow-circle-right fa-3x"></i>
						</div>
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3 p-3">
							<p className="font-txt">Cherchez votre produit de santé ou votre pharmacie</p>
						</div>
						<div className="d-flex align-items-center text-center my-3">
							<i className="fas fa-arrow-circle-right fa-3x"></i>
						</div>
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3 p-3">
							<p className="font-txt">
								Commandez vos produits de santé 7j/7avec possibilité de livraison à domicile!
							</p>
						</div>
					</div>
				</div>
			</Row>
		</Container>
	);
}

export default Home;
