import React, { FC, ReactElement } from 'react';
import { medicines } from '../../models/Medicine';
import { orderService } from '../../services/orderService';
import { patientService } from '../../services/patientService';
import Icon from '../Icon/Icon';
import './MessageriePatientCard.css';

interface IMessageriePatientCardProps {
	className?: string;
}

const MessageriePatientCard: FC<IMessageriePatientCardProps> = ({ className }): ReactElement => {
	const patient = patientService.getConnected();
	const orders = orderService.getAll() || [];
	const cards = orders.filter((order) => patient.id === order.owner);
	const findMeds = (medId: number | undefined) => {
		const medFound = medicines.find((med) => medId === med.id);
		return medFound?.name;
	};
	return (
		<>
			{cards.map((card, index) => (
				<div
					key={index}
					className="box-shadow border-radius container-fluid d-flex justify-content-center mt-3 p-3"
				>
					<div className="d-flex justify-content-around container-fluid m-1 p-1">
						<div className="col-1 d-flex align-items-center justify-content-center ">
							<span className="c-green icon-medium">
								<Icon className="mr-2" name="clinic-medical" />
							</span>
						</div>

						<div className="col-4 d-flex flex-column">
							<div>
								<p className="m-0">
									<span className="font-weight-bold">Date de commande :</span> {card.date}.
								</p>
								<p className="m-0">
									<span className="font-weight-bold">Total de la commande :</span>{' '}
									{card.total}.
								</p>
							</div>
							<div className="mt-auto">
								<p className="m-0 mt-3 font-weight-bold text-info">
									Votre commande est en cours de traitement
								</p>
							</div>
						</div>
						<div className="col-3 d-flex flex-column">
							<div className="d-flex border-bottom justify-content-between m-0 p-0 mb-2">
								<div>
									<p className="font-weight-bold mb-2">Medicament</p>
								</div>
								<div>
									<p className="font-weight-bold mb-2">Qte</p>
								</div>
							</div>
							{card.content?.map((content, index) => (
								<div key={index} className="d-flex justify-content-between m-0 p-0">
									<div>
										<span>{findMeds(content.medicineId)}</span>
									</div>
									<div>
										<span>{content.quantity}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default MessageriePatientCard;
