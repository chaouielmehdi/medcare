import React from 'react';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import Row from '../../components/Row/Row';
import './cart.css';

function Cart() {
	return (
		<Container>
			<Row flex={{ align: 'center' }} className=" d-flex flex-column p-4">
				<div className="border container-fluid px-5">
					<div className="border head-text text-center my-3">
						<p>BIENVENUE DANS VOTRE ESPACE !</p>
						<p>Flan ben fertelan</p>
					</div>
					<div className="border border-case head-title text-center py-2">
						<p className="m-0">MON PANIER</p>
					</div>

					<div className="border d-flex justify-content-around my-3">
						<div className="border col-8 d-flex flex-column my-3">
							<div className="border block-style my-3">side 1</div>
							<div className="border d-flex flex-column p-2 my-3">
								<p>
									Envoyer la photo de votre ordonnance qui vient de vous être prescrite :{' '}
								</p>
								<form>
									<div className="custom-file">
										{/* <label>Example file input</label>
										<Input type="file" className="form-control-file" /> */}
										<input type="file" className="custom-file-input" />
										<label className="custom-file-label">
											<i className="fa fa-upload mx-2"></i>
											Importer votre ordonnance...
										</label>
									</div>
								</form>
							</div>
						</div>
						<div className="border col-4 d-flex flex-column my-3">
							<div className="border block-style my-3">
								<p className="head-section">LIVRAISON A DOMICILE</p>
								<form className="d-flex flex-column m-3">
									<div>
										<p>Cochez votre choix : </p>
									</div>
									<div className="d-flex justify-content-start">
										<Input
											className="radio-check mx-2 mb-2"
											type="radio"
											name="radioTest"
											height={20}
											width={20}
										></Input>
										<label>Frais de livraison inclus</label>
									</div>

									<div className="d-flex justify-content-start ">
										<Input
											className=" mx-2 mb-2"
											type="radio"
											name="radioTest"
											height={20}
											width={20}
										></Input>
										<label>Frais de livraison non inclus</label>
									</div>
								</form>
							</div>
							<div className="border block-style my-3">
								<p className="head-section">MODE DE PAIEMENT</p>
								<form className="d-flex flex-column m-3">
									<div>
										<p>Cochez votre choix : </p>
									</div>
									<div className="d-flex justify-content-start">
										<Input
											className="radio-check mx-2 mb-2"
											type="radio"
											name="radioTest"
											height={20}
											width={20}
										></Input>
										<label>Paiement en ligne</label>
									</div>

									<div className="d-flex justify-content-start ">
										<Input
											className=" mx-2 mb-2"
											type="radio"
											name="radioTest"
											height={20}
											width={20}
										></Input>
										<label>Paiement en espece à la livraison</label>
									</div>
								</form>
							</div>
							<div className="border block-style my-3">
								<p className="head-section">RESUME DE LA COMMANDE</p>
								<div className="border d-flex flex-column">
									<div className="border d-flex justify-content-around">
										<div className="border d-flex flex-column">
											<p>Sous Total : </p>
											<p>Livraison : </p>
										</div>
										<div className="border d-flex flex-column">
											<p>121 dhs</p>
											<p>25 dhs</p>
										</div>
									</div>
									<hr style={{ width: '280px', border: '1px solid #ccc' }} />
									<div className="border d-flex justify-content-around">
										<p>Total : </p>
										<p>146 dhs</p>
									</div>
									<div className="border d-flex align-items-start ml-4 mt-2">
										<input type="checkbox" className="form-check-input" />
										<p style={{ fontSize: '12px' }}>
											J'ai lu et j'accepte les Conditions Générales
										</p>
									</div>
									<div className="border d-flex justify-content-center">
										<Button className="button-style" type="light">
											Commander
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Row>
		</Container>
	);
}

export default Cart;
