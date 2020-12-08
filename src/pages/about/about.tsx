import React from "react";
import Button, { ButtonType } from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import { smoothScroll } from "../../services/smoothScroll";

import logo from "../../assets/img/logo.png";
import "./about.css";

interface IButton {
	label: string;
	type?: ButtonType;
	icon?: string;
	url: string;
}

function About() {
	const buttons: IButton[] = [
		{
			label: "Patient",
			type: "light",
			icon: "user-injured",
			url: "PATIENT",
		},
		{
			label: "Médecin",
			type: "light",
			icon: "user-md",
			url: "DOCTOR",
		},
		{
			label: "Pharmacien",
			type: "light",
			icon: "clinic-medical",
			url: "PHARMACY",
		},
	];

	const handleClick = (id: string) => {
		return () => smoothScroll(id);
	};

	return (
		<Container>
			<Row flex={{ align: "center" }} className="p-4">
				<div className="col-7">
					<h3 className="pt-4 c-green">Medcare 2.0: Santé et confort, qui dit mieux ?</h3>
					<p>
						MedCare 2.0 est une entreprise marocaine qui se situe à Tanger et qui met en contact, par le
						biais d'une plateforme numérique de télémédecine, de vente en ligne et de livraison à domicile
						des produits de santé, trois acteurs (patient, médecin et pharmacien)
					</p>

					<div className="d-flex justify-content-start mt-5">
						{buttons.map((button, index) => (
							<Button
								key={index}
								onClick={handleClick(button.url)}
								type={button.type}
								icon={button.icon}
								className="mr-3"
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

			<Row flex={{ align: "center" }} className="p-4 mt-5">
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
							Affichage de l'état d'ouverture des pharmacies et la disponibilité en temps réel de leurs
							produits
						</li>
						<li>Passation des commandes chez une pharmacie de votre choix</li>
						<li>
							Facilitation des transactions par paiement en ligne avec la carte bancaire de votre choix
						</li>
					</ul>
					<h5>Livraison à domicile des produits de santé</h5>
				</div>
			</Row>

			<Row flex={{ align: "center" }} className="p-4 mt-5">
				<div className="col-7" id="DOCTOR">
					<h3 className="pt-4 c-green">POUR LE MEDECIN</h3>
					<h5>Gestion de l'agenda des rendez-vous</h5>
					<ul>
						<li>Diffusion de l'agenda des rendez-vous comportant vos disponibilités </li>
						<li>Consultation et modification de votre agenda des rendez-vous </li>
						<li>Réception de notifications en temps réel des prises de rendez-vous en ligne</li>
						<li>Confirmation, refus ou annulation d'un rendez-vous Vous</li>
					</ul>
					<h5>Réalisation de la téléconsultation</h5>
					<ul>
						<li>
							Génération d’un lien de visioconférence différent pour chaque session de téléconsultation
						</li>
						<li>Envoi des ordonnances informatisées </li>
						<li>Paiement en ligne sécurisé</li>
					</ul>
				</div>
				<div className="col-5 text-center">
					<i className="fas fa-user-md icon-large c-green"></i>
				</div>
			</Row>

			<Row flex={{ align: "center" }} className="p-4 mt-5">
				<div className="col-5 text-center" id="PHARMACY">
					<i className="fas fa-clinic-medical icon-large c-green"></i>
				</div>
				<div className="col-7">
					<h3 className="pt-4 c-green">POUR LE PHARMACIEN</h3>
					<h5>Gestion des ventes et des stocks des produits de santé</h5>

					<ul>
						<li>Actualisation de l'état d'ouverture</li>
						<li>Mise à disposition d’une base de données des produits</li>
						<li>Consultation et mise à jour de la base de données</li>
						<li>Réception de notification après chaque commande en lign</li>

						<li>Réception des ordonnances scannées ou bien informatisées</li>
						<li>Acceptation ou refus d'une commande</li>
						<li>Paiement en ligne en toute sécurité</li>
					</ul>

					<h5>Service de livraison à domicile</h5>
				</div>
			</Row>
		</Container>
	);
}

export default About;
