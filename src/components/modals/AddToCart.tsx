import React, { FC, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Medicine } from '../../models/Medicine';
import { cartService } from '../../services/cartService';
import { IProps } from '../../types/IProps';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Row from '../Row/Row';

interface IAddToCardProps {
	className?: string;
	isOpen?: boolean;
	medicine?: Medicine;
	toggle: (event?: React.MouseEvent) => void;
}

const AddToCartModal: FC<IAddToCardProps> = ({ className, isOpen, medicine, toggle }) => {
	const [quantity, setQuantity] = useState<number>(1);

	const handleQuantityChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = +event.target.value;
		setQuantity(value);
	};

	const isValidQuantity = (value: number): boolean => {
		if (!value || value <= 0) {
			return false;
		}

		return true;
	};

	const getTotal = () => {
		if (isValidQuantity(quantity)) {
			return (medicine?.price || 0) * quantity;
		}
		return '-';
	};

	const handleAddToCart = () => {
		cartService.addToCart({ medicineId: medicine?.id, quantity });
		toggle();
	};

	const CenteredRow: FC<IProps> = ({ children }) => (
		<Row isShadowed={false} flex={{ align: 'center', justify: 'center' }} className="mt-2">
			{children}
		</Row>
	);

	return (
		<>
			<Modal isOpen={isOpen} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Ajouter au panier</ModalHeader>
				<ModalBody>
					<CenteredRow>
						<h4 className="text-center">{medicine?.pharmacyName}</h4>
					</CenteredRow>
					<CenteredRow>
						<img src={medicine?.imageUrl} alt="medicine" height="120" />
					</CenteredRow>
					<CenteredRow>
						<span className="text-center c-green font-weight-bold">{medicine?.name}</span>
					</CenteredRow>
					<CenteredRow>
						<span className="text-center">{medicine?.description}</span>
					</CenteredRow>
				</ModalBody>
				<ModalFooter>
					<div className="d-flex justify-content-between align-items-center w-100">
						<div className="d-flex align-items-start">
							<span className={(isValidQuantity(quantity) ? '' : 'text-danger') + ' mt-2'}>
								Quantité :
							</span>
							<Input
								width={70}
								type="number"
								className="ml-2"
								valid={isValidQuantity(quantity)}
								onChange={handleQuantityChanged}
								value={quantity}
							/>
						</div>
						<span className="font-weight-bold">{getTotal()} Dhs</span>
						<div>
							<Button
								onClick={handleAddToCart}
								disabled={!isValidQuantity(quantity)}
								icon="shopping-cart"
								type="info"
							>
								Ajouter au panier
							</Button>
						</div>
					</div>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default AddToCartModal;
