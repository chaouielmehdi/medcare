import React from "react";
import "./home.css";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";

import Doctor1 from "../../assets/img/Doctor1.png";
import Pharmacien from "../../assets/img/Pharmacien.png";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Home() {
	return (
		<Container>
			<Row isShadowed={true} isBorderedRadius={true} className="d-flex align-items-center p-4">
				<div className="col-7 text-center align-self-center my-3">
					<div className="h-25 ">
						<Button className="mx-2" icon="building" type="light">
							Au cabinet
						</Button>
						<Button className="mx-2" icon="video" type="light">
							En video
						</Button>
						<Button className="mx-2" icon="home" type="light">
							A domicile
						</Button>
					</div>

					<div className=" m-5">
						<div className="input-group mb-3">
							<Input
								placeholder="Chercher un médecin"
								label="searchDoctor"
								icon="user-md"
								iconPos="prepend"
							></Input>
						</div>
						<p className="text-center">Ou</p>
						<div className="input-group mb-3">
							<Input
								placeholder="Choisir une spécialité"
								label="searchSpecialite"
								icon="briefcase-medical"
								iconPos="prepend"
							></Input>
						</div>
						<p className="text-center">Ou</p>
						<div className="input-group mb-3">
							<Input
								placeholder="Choisir une ville"
								label="searchDoctor"
								icon="map-marker-alt"
								iconPos="prepend"
							></Input>
						</div>
						<div>
							<Button className="ml-5" icon="search" type="light">
								Chercher
							</Button>
						</div>
					</div>
				</div>

				<div className=" col-5  text-center my-3">
					<p>Trouvez votre médcin et prenez rendez-vous ! </p>
					<div className="doctor1 rounded m-5">
						<img src={Doctor1} alt="" />
					</div>
				</div>
			</Row>

			<Row isShadowed={true} isBorderedRadius={true} className="d-flex align-items-center p-4 mt-3">
				<div className=" col-5  text-center my-3">
					<p>Trouvez votre pharmacie et commandez vos produits de santé ! </p>
					<div className="doctor1 rounded m-5">
						<img src={Pharmacien} alt="" />
					</div>
				</div>

				<div className="col-7 text-center align-self-center my-3">
					<div className=" m-5">
						<div className="input-group mb-3">
							<Input
								placeholder="Chercher une pharmacie"
								label="searchPharmacie"
								icon="cart-plus"
								iconPos="prepend"
							></Input>
							<Button className="ml-5" icon="search" type="light">
								Chercher
							</Button>
						</div>
						<div className="input-group mb-3">
							<Input
								placeholder="Chercher un produit"
								label="searchProduct"
								icon="capsules"
								iconPos="prepend"
							></Input>
							<Button className="ml-5" icon="search" type="light">
								Chercher
							</Button>
						</div>
					</div>
				</div>
			</Row>

			<Row isShadowed={true} isBorderedRadius={false} className="section-block d-flex flex-column p-4 mt-3">
				<div>
					<div className="head-text text-center my-3">
						<p>Téléconsultation via MedCare 2.0, comment ça marche ? </p>
					</div>

					<div className="d-flex justify-content-around">
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3">
							<p className="font-txt">Inscrivez-vous à notre plateforme MedCare 2.0</p>
						</div>
						<div className="d-flex align-items-center text-center my-3">
							<i className="fas fa-arrow-circle-right fa-3x"></i>
						</div>
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3">
							<p className="font-txt">Cherchez un professionnel de santé </p>
						</div>
						<div className="d-flex align-items-center text-center my-3">
							<i className="fas fa-arrow-circle-right fa-3x"></i>
						</div>
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3">
							<p className="font-txt">Prenez votre rendez-vous!</p>
						</div>
					</div>
				</div>
			</Row>
			<Row isShadowed={true} isBorderedRadius={false} className="section-block d-flex flex-column p-4 mt-3">
				<div>
					<div className="head-text text-center my-3">
						<p>Télépharmacie via MedCare 2.0, comment ça marche ? </p>
					</div>

					<div className="d-flex justify-content-around">
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3">
							<p className="font-txt">Inscrivez-vous à notre plateforme MedCare 2.0</p>
						</div>
						<div className="d-flex align-items-center text-center my-3">
							<i className="fas fa-arrow-circle-right fa-3x"></i>
						</div>
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3">
							<p className="font-txt">Cherchez votre produit de santé ou votre pharmacie</p>
						</div>
						<div className="d-flex align-items-center text-center my-3">
							<i className="fas fa-arrow-circle-right fa-3x"></i>
						</div>
						<div className="box-border d-flex align-items-center text-center rounded-lg my-3">
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
