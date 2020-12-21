import React, { FC, ReactElement } from 'react';
import DoctorFemale from '../../assets/img/Doctor-Female.png';
import DoctorMale from '../../assets/img/Doctor-Male.png';
import { doctors, Gender } from '../../models/Doctor';
import { medicines } from '../../models/Medicine';
import { appointmentService } from '../../services/appointmentService';
import { patientService } from '../../services/patientService';
import Empty from '../Empty/Empty';
import Icon from '../Icon/Icon';
import './MessageriePatientCard.css';

interface IMessageriePatientCardProps {
	className?: string;
}

const MessagerieDoctorCard: FC<IMessageriePatientCardProps> = ({ className }): ReactElement => {
	const patient = patientService.getConnected();
	const cards = appointmentService.get() || [];
	const findName = (doctorID: number | undefined) => {
		const doctor = doctors.find((doctor) => doctorID === doctor.id);
		return doctor?.name;
	};
	const drIsMale = (doctorID: number | undefined) => {
		const doctor = doctors.find((doctor) => doctorID === doctor.id);

		return doctor?.gender === Gender.Male;
	};

	return (
		<>
			{cards.map((card, index) => (
				<div className="box-shadow border-radius d-flex justify-content-center mt-3 p-3">
					<div className="d-flex justify-content-around container-fluid p-1">
						<div className="col-2 d-flex align-items-center justify-content-center">
							<img
								src={drIsMale(card.doctorId) ? DoctorMale : DoctorFemale}
								width="100"
								alt="doctor"
							/>
						</div>

						<div className="col-8 d-flex flex-column">
							<div>
								{/* <p className="card-name">Dr. Sanae Imrani</p> */}
								<p className="card-name">Dr. {findName(card.doctorId)}</p>
							</div>
							<div>
								<p className="m-0">
									<span className="font-weight-bold">Type de consultation :</span>{' '}
									{card.consultationType === 'cabinet' ? 'consultation en cabinet' : ''}
									{card.consultationType === 'video' ? 'consultation en ligne' : ''}
									{card.consultationType === 'home' ? 'consultation a domicile' : ''}
									{/* consultation en ligne */}
								</p>
								<p className="m-0">
									<span className="font-weight-bold">Date de consultation :</span>
									{card.date}
								</p>
								<p className="m-0">
									<span className="font-weight-bold">Raison :</span> {card.reason}
								</p>
							</div>
							<div className="mt-auto">
								<p className="m-0 mt-3 font-weight-bold text-info">
									Votre demande de rendez-vous est en cours
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default MessagerieDoctorCard;
