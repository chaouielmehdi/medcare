import React from 'react';
import Button, { ButtonType } from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';

import logo from '../../assets/img/logo.png';

import './about.css';
import { smoothScroll } from '../../services/smoothScroll';

interface IButton {
	label: string;
	type?: ButtonType;
	icon?: string;
	url: string;
}

function About() {
	const buttons: IButton[] = [
		{
			label: 'Patient',
			type: 'light',
			icon: 'user-injured',
			url: 'PATIENT',
		},
		{
			label: 'Médecin',
			type: 'light',
			icon: 'user-md',
			url: 'DOCTOR',
		},
		{
			label: 'Pharmacien',
			type: 'light',
			icon: 'clinic-medical',
			url: 'PHARMACY',
		},
	];

	const handleClick = (id: string) => {
		return () => smoothScroll(id);
	};

	return (
		<Container>
			<Row isShadowed={true} isBorderedRadius={true} className="d-flex align-items-center p-4">
				<div className="col-7">
					<h3 className="pt-4 c-green">Medcare 2.0: Santé et confort, qui dit mieux ?</h3>
					<p>
						MedCare 2.0 est une entreprise marocaine qui se situe à Tanger et qui met en contact,
						par le biais d'une plateforme numérique de télémédecine, de vente en ligne et de
						livraison à domicile des produits de santé, trois acteurs (patient, médecin et
						pharmacien)
					</p>

					<div className="d-flex justify-content-center mt-5">
						{buttons.map((button, index) => (
							<Button
								key={index}
								onClick={handleClick(button.url)}
								type={button.type}
								icon={button.icon}
								className="mx-3"
							>
								{button.label}
							</Button>
						))}
					</div>
				</div>

				<div className="col-5 text-center">
					<img src={logo} width="200" alt="logo" className="mr-2" />
					<h1 className="c-green font-weight-bold">MedCare 2.0</h1>
					<p className="c-grey">Santé et confort, qui dit mieux ?</p>
				</div>
			</Row>
			<Row isShadowed={true} isBorderedRadius={true} className="d-flex align-items-center p-4 mt-5">
				<div className="col-5 text-center" id="PATIENT">
					<i className="fas fa-user-injured icon-large c-green"></i>
				</div>

				<div className="col-7">
					<h3 className="pt-4 c-green">POUR LE PATIENT</h3>
					<h5>Prise de rendez-vous en ligne</h5>
					<ul>
						<li>Recherche des médecins par nom, par spécialité, ou par localisation</li>
						<li>Consultation des différentes informations sur les médecins</li>
						<li>Affichage de l'agenda des horaires de leurs disponibilités</li>
						<li>Réception d’une notification accompagnée du lien de la visioconférence</li>
						<li>Annulation d'un rendez-vous</li>
						<li>Accés à l'historique de vos rendez-vous</li>
					</ul>

					<h5>Achat en ligne des produits de santé</h5>
					<ul>
						<li>Recherche des pharmacies par nom et par localisation</li>
						<li>Consultation des différentes informations sur les pharmacies</li>
						<li>
							Affichage de l'état d'ouverture des pharmacies et la disponibilité en temps réel
							de leurs produits
						</li>
						<li>Passation des commandes chez une pharmacie de votre choix</li>
						<li>
							Facilitation des transactions par paiement en ligne avec la carte bancaire de
							votre choix Livraison à domicile des produits de santé
						</li>
					</ul>
				</div>
			</Row>
			<Row isShadowed={true} isBorderedRadius={true} className="d-flex align-items-center p-4 mt-5">
				<div className="col-7" id="DOCTOR">
					<h3 className="pt-4 c-green">POUR LE MEDECIN</h3>
					<h5>Prise de rendez-vous en ligne</h5>
					<ul>
						<li>Recherche des médecins par nom, par spécialité, ou par localisation</li>
						<li>Consultation des différentes informations sur les médecins</li>
						<li>Affichage de l'agenda des horaires de leurs disponibilités</li>
						<li>Réception d’une notification accompagnée du lien de la visioconférence</li>
						<li>Annulation d'un rendez-vous</li>
						<li>Accés à l'historique de vos rendez-vous</li>
					</ul>

					<h5>Achat en ligne des produits de santé</h5>
					<ul>
						<li>Recherche des pharmacies par nom et par localisation</li>
						<li>Consultation des différentes informations sur les pharmacies</li>
						<li>
							Affichage de l'état d'ouverture des pharmacies et la disponibilité en temps réel
							de leurs produits
						</li>
						<li>Passation des commandes chez une pharmacie de votre choix</li>
						<li>
							Facilitation des transactions par paiement en ligne avec la carte bancaire de
							votre choix Livraison à domicile des produits de santé
						</li>
					</ul>
				</div>
				<div className="col-5 text-center">
					<i className="fas fa-user-md icon-large c-green"></i>
				</div>
			</Row>

			<Row isShadowed={true} isBorderedRadius={true} className="d-flex align-items-center p-4 mt-5">
				<div className="col-5 text-center" id="PHARMACY">
					<i className="fas fa-clinic-medical icon-large c-green"></i>
				</div>
				<div className="col-7">
					<h3 className="pt-4 c-green">POUR LE PHARMACIEN</h3>
					<h5>Prise de rendez-vous en ligne</h5>
					<ul>
						<li>Recherche des médecins par nom, par spécialité, ou par localisation</li>
						<li>Consultation des différentes informations sur les médecins</li>
						<li>Affichage de l'agenda des horaires de leurs disponibilités</li>
						<li>Réception d’une notification accompagnée du lien de la visioconférence</li>
						<li>Annulation d'un rendez-vous</li>
						<li>Accés à l'historique de vos rendez-vous</li>
					</ul>

					<h5>Achat en ligne des produits de santé</h5>
					<ul>
						<li>Recherche des pharmacies par nom et par localisation</li>
						<li>Consultation des différentes informations sur les pharmacies</li>
						<li>
							Affichage de l'état d'ouverture des pharmacies et la disponibilité en temps réel
							de leurs produits
						</li>
						<li>Passation des commandes chez une pharmacie de votre choix</li>
						<li>
							Facilitation des transactions par paiement en ligne avec la carte bancaire de
							votre choix Livraison à domicile des produits de santé
						</li>
					</ul>
				</div>
			</Row>
		</Container>
	);
}

export default About;
