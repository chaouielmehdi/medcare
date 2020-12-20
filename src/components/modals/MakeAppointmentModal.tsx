import { format, addDays } from 'date-fns';
import React, { FC, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { doctors } from '../../models/Doctor';
import Row from '../Row/Row';

interface IAddToCardProps {
	className?: string;
	isOpen?: boolean;
	toggle: (event?: React.MouseEvent) => void;
	data?: {
		doctorId: number;
		type: 'video' | 'cabinet' | 'home';
	};
}

interface Appointment {
	doctorId?: number;
	consultationType?: 'video' | 'cabinet' | 'home';
	date?: string;
	reason?: string;
}

const MakeAppointmentModal: FC<IAddToCardProps> = ({ className, isOpen, toggle, data }) => {
	const doctor = doctors.find((doctor) => doctor.id === data?.doctorId);

	let consultation = '';
	if (data?.type === 'cabinet') {
		consultation = 'Au cabinet';
	} else if (data?.type === 'video') {
		consultation = 'En vidéo';
	} else if (data?.type === 'home') {
		consultation = 'A domicile';
	}

	let consultationPrice: string = 'non précis';
	if (data?.type && doctor?.consultation[data?.type].price) {
		consultationPrice = doctor?.consultation[data?.type].price + ' Dhs';
	}

	const now = format(addDays(new Date(), 1), "yyyy-MM-dd'T'HH:mm:ss");

	const [appointment, setAppointment] = useState<Appointment>({
		consultationType: data?.type,
		doctorId: data?.doctorId,
	});

	const handleDateChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const date = event.target.value;
		const newAppointment = { ...appointment, date };
		setAppointment(newAppointment);
	};

	return (
		<>
			<Modal isOpen={isOpen} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Prendre un rendez-vous</ModalHeader>
				<ModalBody>
					<Row isShadowed={false} flex={{ align: 'center', justify: 'center' }} className="mt-2">
						<h2 className="c-green">Dr. {doctor?.name}</h2>
					</Row>
					<Row isShadowed={false} className="mt-3">
						<span className="font-weight-bold" style={{ width: 120 }}>
							Consultation :
						</span>
						<span className="ml-1">{consultation}</span>
					</Row>
					<Row isShadowed={false} className="mt-3">
						<span className="font-weight-bold" style={{ width: 120 }}>
							Prix :
						</span>
						<span className="ml-1">{consultationPrice}</span>
					</Row>
					<Row isShadowed={false} className="mt-3" flex={{ align: 'center' }}>
						<span className="font-weight-bold" style={{ width: 120 }}>
							Date :
						</span>
						<input
							style={{ width: 250 }}
							className="form-control ml-1"
							type="datetime-local"
							min={now}
							onChange={handleDateChanged}
						/>
					</Row>
					<Row isShadowed={false} className="mt-3" flex={{ align: 'start' }}>
						<span className="font-weight-bold" style={{ width: 120 }}>
							Raison :
						</span>
						<textarea className="form-control ml-1" style={{ width: 250 }} />
					</Row>
				</ModalBody>
				<ModalFooter>
					<div className="d-flex justify-content-between align-items-center w-100">footer</div>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default MakeAppointmentModal;