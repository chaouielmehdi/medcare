import React, { FC, ReactElement } from 'react';
import { Medicine } from '../../models/Medicine';
import { cartService } from '../../services/cartService';
import { IProps } from '../../types/IProps';
import Button from '../Button/Button';
import Row from '../Row/Row';

interface IMedicineCardProps {
	className?: string;
	medicine: Medicine;
	showCartModal?: (event: React.MouseEvent) => void;
}

const MedicineCard: FC<IMedicineCardProps> = ({ className, medicine, showCartModal }): ReactElement => {
	let isAddedToCart = false;
	let quantityAddedToCart: number | undefined = 0;
	const cartElement = cartService.getElement(medicine?.id);

	if (cartElement) {
		isAddedToCart = true;
		quantityAddedToCart = cartElement?.quantity;
	}

	const getEnStock = () => {
		if (medicine.quantity > 0) {
			return <span className="c-green">En stock</span>;
		}
		return <span className="text-danger">Non disponible</span>;
	};

	const CenteredRow: FC<IProps> = ({ children }) => (
		<Row isShadowed={false} flex={{ align: 'center', justify: 'center' }} className="mt-2">
			{children}
		</Row>
	);

	return (
		<div className={className}>
			<div className="box-shadow border-radius p-3" style={{ height: '400px' }}>
				<div style={{ height: '50%' }}>
					<CenteredRow>
						<h4 className="text-center">{medicine.pharmacyName}</h4>
					</CenteredRow>
					<CenteredRow>
						<img src={medicine.imageUrl} alt="medicine" height="120" />
					</CenteredRow>
					<CenteredRow>
						<span className="text-center c-green font-weight-bold">{medicine.name}</span>
					</CenteredRow>
					<CenteredRow>
						<span className="text-center">{medicine.description}</span>
					</CenteredRow>
				</div>
				<div className="d-flex align-items-end" style={{ height: '47%' }}>
					<div className="w-100">
						<Row
							isShadowed={false}
							flex={{ align: 'center', justify: 'between' }}
							className="font-weight-bold mt-2"
						>
							{getEnStock()}
							<span>{medicine.price} Dhs</span>
						</Row>
						<hr />
						<div className="d-flex justify-content-center align-items-center w-100 mt-2">
							{!isAddedToCart && (
								<Button
									onClick={showCartModal}
									disabled={medicine.quantity === 0}
									icon="shopping-cart"
									type="info"
								>
									Ajouter au panier
								</Button>
							)}

							{isAddedToCart && (
								<div className="d-flex justify-content-center align-items-center w-100">
									<Button type="link" className="c-green">
										<>Ajouté (Quantité : {quantityAddedToCart})</>
									</Button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MedicineCard;
