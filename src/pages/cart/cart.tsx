import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE } from '../../App';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Empty from '../../components/Empty/Empty';
import Icon from '../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import Row from '../../components/Row/Row';
import { medicines } from '../../models/Medicine';
import { cartService } from '../../services/cartService';
import { orderService } from '../../services/orderService';
import { patientService } from '../../services/patientService';
import { storageService } from '../../services/storageService';
import './cart.css';

function Cart(props: { setCartCount: () => void }) {
	const history = useHistory();

	// livraisonChecked
	const [livraison, setLivraison] = useState(true);
	const livraisonChecked = (checked: boolean) => () => {
		setLivraison(checked);
	};

	const cart = cartService.getAll() || [];
	const medsCartDefault = cart.map((element) => {
		const foundMed = medicines.find((medicine) => element.medicineId === medicine.id);
		return foundMed;
	});
	const [medsCart, setMedsCart] = useState(medsCartDefault);
	const patient = patientService.getConnected();
	const deleteItem = (medicineId: number | undefined) => {
		return () => {
			if (medicineId) {
				cartService.deleteElement(medicineId);
				const newCart = cartService.getAll();
				const newMedsCart = newCart.map((element) => {
					const foundMed = medicines.find((medicine) => element.medicineId === medicine.id);
					return foundMed;
				});

				props.setCartCount();

				setMedsCart(newMedsCart);
				let newTotal = 0;
				newMedsCart.forEach((element, index) => {
					if (element && newCart) {
						newTotal += element?.price * newCart[index].quantity!;
					}
				});
				setTotal(newTotal);
			}
		};
	};
	let totalDefault = 0;
	medsCart.forEach((element, index) => {
		if (element && cart) {
			totalDefault += element?.price * cart[index].quantity!;
		}
	});
	const [total, setTotal] = useState(totalDefault);
	const [check, setCheck] = useState(false);
	const checkcondition = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.checked;
		console.log(value);
		let newValue;
		if (value) {
			newValue = true;
		} else {
			newValue = false;
		}
		setCheck(newValue);
	};
	const handleSubmit = () => {
		let cart = cartService.getAll() || [];

		orderService.passOrder({ owner: patient.id, content: cart, total: total, date: dateTime() });

		storageService.cart.remove();
		setMedsCart([]);
		props.setCartCount();
		history.push(ROUTE.MESSAGERIE);
	};
	function dateTime(): string {
		let today = new Date();
		let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		let time = today.getHours() + ':' + today.getMinutes();
		let dateTime = date + ' à ' + time;
		return dateTime;
	}
	return (
		<Container>
			<Row isShadowed={false} flex={{ align: 'center' }} className="d-flex flex-column p-4">
				<div className="container-fluid px-5">
					<div className="head-text text-center my-3">
						<p>BIENVENUE DANS VOTRE ESPACE !</p>
						<p>{patient.name}</p>
					</div>
					<div className="border-case head-title border-radius text-center py-2">
						<p className="m-0">MON PANIER</p>
					</div>

					<Empty show={!medsCart.length} className="my-4" />

					{medsCart.length !== 0 && (
						<div className="d-flex justify-content-around my-3">
							<div className="w-100 d-flex flex-column my-3">
								{medsCart.map((medicine, index) => (
									<div
										className="box-shadow border-radius d-flex justify-content-between my-3 p-3"
										key={'cart-item' + index}
									>
										<div className="col-3 d-flex">
											<img src={medicine?.imageUrl} width="150" alt="medicine" />
										</div>

										<div className="col-8 d-flex flex-column border-left">
											<div>
												<p
													className="c-green font-weight-bold m-0"
													style={{ fontSize: 20 }}
												>
													{medicine?.name}
												</p>
											</div>
											<div>
												<p>{medicine?.description}</p>
											</div>
											<div className="d-flex justify-content-between mt-auto">
												<p>
													<span className="font-weight-bold">Qantité : </span>
													{cart[index].quantity}
												</p>
												<p>
													<span className="font-weight-bold">Prix unitaire :</span>{' '}
													{medicine?.price} Dhs
												</p>
											</div>
										</div>
										<div className="col-1 d-flex align-items-start justify-content-end">
											<Button type="danger" onClick={deleteItem(medicine?.id)}>
												<Icon name="trash-alt" />
											</Button>
										</div>
									</div>
								))}
								<div className="d-flex flex-column my-3">
									<p>
										Envoyer la photo de votre ordonnance qui vient de vous être prescrite
										:
									</p>
									<form>
										<div className="custom-file">
											<input type="file" className="custom-file-input" />
											<label className="custom-file-label">
												<i className="fa fa-upload mx-2"></i>
												Importer votre ordonnance...
											</label>
										</div>
									</form>
								</div>
							</div>
							<div className="col-4 d-flex flex-column mt-3">
								<div className="border-radius box-shadow mt-3 p-2">
									<p className="head-section">LIVRAISON A DOMICILE</p>
									<div>
										<p>Cochez votre choix : </p>
									</div>
									<div className="d-flex justify-content-start">
										<Input
											id="frais-inclus"
											className="radio-check mx-2 mb-2"
											type="radio"
											name="radioTest"
											height={20}
											width={20}
											checked={livraison}
											onChange={livraisonChecked(true)}
										/>
										<label htmlFor="frais-inclus">Frais de livraison inclus</label>
									</div>

									<div className="d-flex justify-content-start ">
										<Input
											id="frais-ninclus"
											className=" mx-2 mb-2"
											type="radio"
											name="radioTest"
											height={20}
											width={20}
											checked={!livraison}
											onChange={livraisonChecked(false)}
										/>
										<label htmlFor="frais-ninclus">Frais de livraison non inclus</label>
									</div>
								</div>
								<div className="border-radius box-shadow mt-3 p-2">
									<p className="head-section">MODE DE PAIEMENT</p>
									<form className="d-flex flex-column m-3">
										<div>
											<p>Cochez votre choix : </p>
										</div>
										<div className="d-flex justify-content-start">
											<Input
												id="p-online"
												className="radio-check mx-2 mb-2"
												type="radio"
												name="radioTest"
												height={20}
												width={20}
											/>
											<label htmlFor="p-online">Paiement en ligne</label>
										</div>

										<div className="d-flex justify-content-start ">
											<Input
												id="p-delivery"
												className=" mx-2 mb-2"
												type="radio"
												name="radioTest"
												height={20}
												width={20}
											/>
											<label htmlFor="p-delivery">
												Paiement en espece à la livraison
											</label>
										</div>
									</form>
								</div>
								<div className="border-radius box-shadow mt-3 p-2">
									<p className="head-section">RESUME DE LA COMMANDE</p>
									<div className="d-flex flex-column">
										<div className="d-flex justify-content-around">
											<div className="d-flex flex-column">
												<p>Sous Total : </p>
												<p>Livraison : </p>
											</div>
											<div className="d-flex flex-column">
												<p>{total} Dhs</p>
												<p>{livraison ? '14.5' : '0'} Dhs</p>
											</div>
										</div>
										<hr style={{ width: '280px', border: '1px solid #ccc' }} />
										<div className="d-flex justify-content-around">
											<p>Total : </p>
											<p>{total + (livraison ? 14.5 : 0)} Dhs</p>
										</div>
										<div className="d-flex align-items-start ml-4 mt-2">
											<input
												id="readGC"
												type="checkbox"
												className="form-check-input"
												onChange={checkcondition}
											/>
											<label htmlFor="readGC" style={{ fontSize: '12px' }}>
												J'ai lu et j'accepte les Conditions Générales
											</label>
										</div>
										<div className="d-flex justify-content-center">
											<Button
												className="button-style"
												type="light"
												onClick={handleSubmit}
												disabled={!check}
											>
												Commander
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</Row>
		</Container>
	);
}

export default Cart;
