import React, { FC, ReactElement } from 'react';
import { Doctor, Gender } from '../../models/Doctor';
import Row from '../Row/Row';
import Button from '../Button/Button';

import DoctorMale from '../../assets/img/Doctor-Male.png';
import DoctorFemale from '../../assets/img/Doctor-Female.png';
import Icon from '../Icon/Icon';

interface IConsBtnProps {
	type: 'video' | 'cabinet' | 'home';
	label: string;
	icon: string;
}

interface IDoctorCardProps {
	className?: string;
	doctor: Doctor;
	makeAppointment: (doctorId: number, type: IConsBtnProps['type']) => void;
}

const DoctorCard: FC<IDoctorCardProps> = ({ className, doctor, makeAppointment }): ReactElement => {
	const imgSrc: string = doctor.gender === Gender.Male ? DoctorMale : DoctorFemale;

	const fields = () =>
		doctor.fields.map((field, index) => (
			<span key={index} className="badge badge-light border mr-2">
				{field.value}
			</span>
		));

	const handleConsultationClick = (doctorId: number, type: IConsBtnProps['type']) => () => {
		makeAppointment(doctorId, type);
	};

	const consultationButton = ({ type, label, icon }: IConsBtnProps) =>
		doctor.consultation[type].available && (
			<Button onClick={handleConsultationClick(doctor.id, type)} icon={icon} className="mr-2">
				<>
					{label}
					{doctor.consultation[type].price
						? ' (' + doctor.consultation[type].price + ' MAD)'
						: ' (non précis)'}
				</>
			</Button>
		);

	return (
		<div className={className}>
			<Row flex={{ align: 'center', justify: 'between' }} className="p-4">
				<div className="col-2 d-flex justify-content-center pl-0 pr-4">
					<img src={imgSrc} width="100" alt="Doctor" />
				</div>
				<div className="col-10 border-left">
					<h2 className="c-green">Dr. {doctor.name}</h2>

					<Row flex={{ align: 'start', justify: 'between' }} isShadowed={false}>
						<div className="col-6 p-0">
							<span className="d-block my-1">
								<Icon name="briefcase-medical" className="mr-2" />
								{fields()}
							</span>
							<span className="d-block my-1">
								<Icon name="map-marker-alt" className="mr-2" />
								{doctor.address}
							</span>
						</div>
						<div className="col-6 border-left p-0 pl-3">
							<span className="d-block my-1">
								<Icon name="phone" className="mr-2" />
								{doctor.phone}
							</span>
							<span className="d-block my-1">
								<Icon name="envelope" className="mr-2" />
								{doctor.email}
							</span>
						</div>
					</Row>

					<Row flex={{ align: 'start', justify: 'between' }} isShadowed={false}>
						<div className="col-12 p-0 mt-4">
							{consultationButton({ type: 'cabinet', icon: 'building', label: 'Au cabinet' })}
							{consultationButton({ type: 'video', icon: 'video', label: 'En video' })}
							{consultationButton({ type: 'home', icon: 'home', label: 'A domicile' })}
						</div>
					</Row>
				</div>
			</Row>
		</div>
	);
};

export default DoctorCard;
