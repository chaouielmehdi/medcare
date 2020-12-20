import React, { FC, ReactElement } from 'react';
import DoctorFemale from '../../assets/img/Doctor-Female.png';
import DoctorMale from '../../assets/img/Doctor-Male.png';
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
			<div className="box-shadow border-radius d-flex justify-content-center mt-3 p-3">
				<div className="d-flex justify-content-around container-fluid p-1">
					<div className="col-2 d-flex align-items-center justify-content-center">
						<img src={DoctorFemale} width="100" alt="doctor" />
					</div>

					<div className="col-8 d-flex flex-column">
						<div>
							<p className="card-name">Dr. Sanae Imrani</p>
						</div>
						<div>
							<p className="m-0">
								<span className="font-weight-bold">Type de consultation :</span> consultation
								en ligne
							</p>
							<p className="m-0">
								<span className="font-weight-bold">Date de consultation :</span> 16 Novembre
								2020 à 15:30
							</p>
							<p className="m-0">
								<span className="font-weight-bold">Raison :</span> Mal de dent.
							</p>
							<p className="m-0">
								<span className="font-weight-bold">Lien de consultation :</span>
								<a href="https://meet.google.com/vbx-njnv-wfv">
									https://meet.google.com/vbx-njnv-wfv
								</a>
							</p>
						</div>
						<div className="mt-auto">
							<p className="m-0 mt-3 font-weight-bold c-green">
								Votre demande de rendez-vous est confirmée
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="box-shadow border-radius container-fluid d-flex justify-content-center mt-3 p-3">
				<div className="d-flex justify-content-around container-fluid m-1 p-1">
					<div className="col-2 d-flex align-items-center justify-content-center">
						<img src={DoctorMale} width="100" alt="doctor" />
					</div>

					<div className="col-8 d-flex flex-column">
						<div>
							<p className="card-name">Dr. Imad Ait Taleb</p>
						</div>
						<div>
							<p className="m-0">
								<span className="font-weight-bold">Type de consultation :</span> consultation
								en cabinet
							</p>
							<p className="m-0">
								<span className="font-weight-bold">Date de consultation :</span> 16 Novembre
								2020 à 11:30
							</p>
							<p className="m-0">
								<span className="font-weight-bold">Raison :</span> Détatrage dentaire.
							</p>
						</div>
						<div className="mt-auto">
							<p className="m-0 mt-3 font-weight-bold text-danger">
								Votre demande de rendez-vous est refusée
							</p>
						</div>
					</div>
				</div>
			</div>

			{cards.map((card, index) => (
				<div className="box-shadow border-radius container-fluid d-flex justify-content-center mt-3 p-3">
					<div className="d-flex justify-content-around container-fluid m-1 p-1">
						<div className="col-2 d-flex align-items-center justify-content-center ">
							<span className="c-green icon-medium">
								<Icon className="mr-2" name="clinic-medical" />
							</span>
						</div>

						<div className="col-4 d-flex flex-column">
							{/* <div>
								<p className="card-name">Pharmacie El Bayrouni</p>
							</div> */}
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
								<p className="m-0 mt-3 font-weight-bold c-black">
									Votre demande est en cours
								</p>
							</div>
						</div>
						<div className="col-3 d-flex flex-column">
							<div className="d-flex justify-content-between m-0 p-0">
								<div>
									<p className="font-weight-bold">Medicament</p>
								</div>
								<div>
									<p className="font-weight-bold">Qte</p>
								</div>
							</div>
							{card.content?.map((content, index) => (
								<div className="d-flex justify-content-between m-0 p-0">
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
			{/* <div>
							<p className="card-name">Pharmacie El Bayrouni</p>
						</div>
						<div>
							<p className="m-0">
								<span className="font-weight-bold">Date de commande :</span> 22 Novembre 2020
								à 16:43
							</p>
							<p className="m-0">
								<span className="font-weight-bold">Raison :</span> Détatrage dentaire.
							</p>
						</div>
						<div className="mt-auto">
							<p className="m-0 mt-3 font-weight-bold c-green">Votre demande est acceptée</p>
						</div> */}
		</>
	);
};

export default MessageriePatientCard;
