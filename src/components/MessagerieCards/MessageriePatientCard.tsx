import React, { FC, ReactElement } from 'react';
import DoctorFemale from '../../assets/img/Doctor-Female.png';
import DoctorMale from '../../assets/img/Doctor-Male.png';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './MessageriePatientCard.css';

interface IMessageriePatientCardProps {
	className?: string;
}

const MessageriePatientCard: FC<IMessageriePatientCardProps> = ({ className }): ReactElement => {
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
							<p className="m-0">Date de consultation : 16 Novembre 2020 à 15:30</p>
							<p className="m-0">Raison : Mal de dent.</p>
							<p className="m-0">Lien de consultation : https://meet.google.com/vbx-njnv-wfv</p>
						</div>
						<div className="mt-auto">
							<p className="m-0 mt-3 font-weight-bold c-green">
								Votre demande de rendez-vous est confirmée
							</p>
						</div>
					</div>
					<div className="col-1 d-flex align-items-start justify-content-end">
						<Button type="danger">
							<Icon name="trash-alt" />
						</Button>
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
							<p className="m-0">Type de consultation : consultation en cabinet</p>
							<p className="m-0">Date de consultation : 16 Novembre 2020 à 11:30</p>
							<p className="m-0">Raison : Détatrage dentaire.</p>
						</div>
						<div className="mt-auto">
							<p className="m-0 mt-3 font-weight-bold text-danger">
								Votre demande de rendez-vous est refusée
							</p>
						</div>
					</div>
					<div className="col-1 d-flex align-items-start justify-content-end">
						<Button type="danger">
							<Icon name="trash-alt" />
						</Button>
					</div>
				</div>
			</div>
			<div className="box-shadow border-radius container-fluid d-flex justify-content-center mt-3 p-3">
				<div className="d-flex justify-content-around container-fluid m-1 p-1">
					<div className="col-2 d-flex align-items-center justify-content-center ">
						<span className="c-green icon-medium">
							<Icon className="mr-2" name="clinic-medical" />
						</span>
					</div>

					<div className="col-8 d-flex flex-column">
						<div>
							<p className="card-name">Pharmacie El Bayrouni</p>
						</div>
						<div>
							<p className="m-0">Date de commande : 22 Novembre 2020 à 16:43</p>
							<p className="m-0">Raison : Détatrage dentaire.</p>
						</div>
						<div className="mt-auto">
							<p className="m-0 mt-3 font-weight-bold c-green">Votre demande est acceptée</p>
						</div>
					</div>
					<div className="col-1 d-flex align-items-start justify-content-end">
						<Button type="danger">
							<Icon name="trash-alt" />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default MessageriePatientCard;
