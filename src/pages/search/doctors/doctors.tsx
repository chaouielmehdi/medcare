import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import DoctorCard from '../../../components/DoctorCard/DoctorCard';
import Empty from '../../../components/Empty/Empty';
import Input from '../../../components/Input/Input';
import MakeAppointmentModal from '../../../components/modals/MakeAppointmentModal';
import Row from '../../../components/Row/Row';
import { Doctor, doctors } from '../../../models/Doctor';
import { cities, doctorFields, IdValueData } from '../../../models/IdValueData';
import {
	doctorFilterService,
	IDoctorFilterType as IDoctorFilter,
	IDoctorFilterType,
} from '../../../services/doctorFilterService';

function Doctors() {
	let defaultDoctorFilter: IDoctorFilter = doctorFilterService.get();
	if (!defaultDoctorFilter) {
		defaultDoctorFilter = {
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
		};
	}

	doctorFilterService.remove();

	// -----------------
	// doctor filters
	// -----------------
	const [doctorFilter, setDoctorFilter] = useState<IDoctorFilterType>(defaultDoctorFilter);
	const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);

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

	useEffect(() => {
		const filterByConsultation = (doctor: Doctor): boolean => {
			return (
				(doctor.consultation.cabinet.available &&
					doctor.consultation.cabinet.available === doctorFilter.consultation.cabinet.available) ||
				(doctor.consultation.home.available &&
					doctor.consultation.home.available === doctorFilter.consultation.home.available) ||
				(doctor.consultation.video.available &&
					doctor.consultation.video.available === doctorFilter.consultation.video.available)
			);
		};

		const filterByName = (doctor: Doctor): boolean => {
			return doctor.name.toLowerCase().includes(doctorFilter.doctorName?.toLowerCase() || '');
		};

		const filterByField = (doctor: Doctor): boolean => {
			if (!doctorFilter.selectedField) {
				return true;
			}

			const field = doctor.fields.find((field) => {
				return field.id === doctorFilter.selectedField?.id;
			});

			return field ? true : false;
		};

		const filterByCity = (doctor: Doctor): boolean => {
			return doctor.address
				.toLowerCase()
				.includes(doctorFilter.selectedCity?.value?.toLowerCase() || '');
		};

		const newDoctors = doctors.filter((doctor) => {
			return (
				filterByConsultation(doctor) &&
				filterByName(doctor) &&
				filterByField(doctor) &&
				filterByCity(doctor)
			);
		});

		setFilteredDoctors(newDoctors);
	}, [doctorFilter]);

	// Modal management
	const [appointmentModalData, setAppointmentModalData] = useState<{
		doctorId: number;
		type: 'video' | 'cabinet' | 'home';
	}>();

	const [modal, setModal] = useState<boolean>(false);
	const toggle = () => setModal(!modal);

	const makeAppointment = (doctorId: number, type: 'video' | 'cabinet' | 'home'): void => {
		setAppointmentModalData({ doctorId, type });
		toggle();
	};

	return (
		<Container>
			<>
				<div className="head-text text-center">
					<p>Trouvez votre médecin</p>
				</div>
				<div className="mb-5">
					<Row isShadowed={false} flex={{ justify: 'center', align: 'center' }}>
						<Button
							onClick={handleConsultationSelected('cabinet')}
							className="mx-2"
							icon="building"
							type={doctorFilter.consultation.cabinet.available ? 'info' : 'light'}
						>
							Au cabinet
						</Button>
						<Button
							onClick={handleConsultationSelected('video')}
							className="mx-2"
							icon="video"
							type={doctorFilter.consultation.video.available ? 'info' : 'light'}
						>
							En vidéo
						</Button>
						<Button
							onClick={handleConsultationSelected('home')}
							className="mx-2"
							icon="home"
							type={doctorFilter.consultation.home.available ? 'info' : 'light'}
						>
							A domicile
						</Button>
					</Row>
					{!doctorFilter.consultation.home.available &&
						!doctorFilter.consultation.video.available &&
						!doctorFilter.consultation.cabinet.available && (
							<Row isShadowed={false} flex={{ justify: 'center', align: 'center' }}>
								<span className="text-danger mt-2" style={{ fontSize: 14 }}>
									Selectionnez au moins un élément pour avoir un résultat!
								</span>
							</Row>
						)}
					<Row isShadowed={false} flex={{ justify: 'around', align: 'center' }} className="mt-3">
						<div className="input-group col-4">
							<Input
								onChange={handleDoctorChanged}
								placeholder="Chercher un médecin"
								icon="user-md"
								iconPos="prepend"
								defaultValue={doctorFilter.doctorName}
							/>
						</div>
						<div className="input-group col-4">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-stethoscope"></i>
								</span>
							</div>
							<select
								className="custom-select"
								defaultValue={doctorFilter.selectedField?.id}
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
						<div className="input-group col-4">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-map-marker-alt"></i>
								</span>
							</div>
							<select
								className="custom-select"
								defaultValue={doctorFilter.selectedCity?.id}
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
					</Row>
				</div>

				<Empty show={!filteredDoctors.length} />

				{filteredDoctors.map((doctor, index) => (
					<DoctorCard
						makeAppointment={makeAppointment}
						key={index}
						className="mb-4"
						doctor={doctor}
					/>
				))}

				<MakeAppointmentModal data={appointmentModalData} toggle={toggle} isOpen={modal} />
			</>
		</Container>
	);
}

export default Doctors;
