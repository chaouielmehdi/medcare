import React, { FC, ReactElement } from 'react';
import { Medicine } from '../../models/Medicine';
import Row from '../Row/Row';

import { IProps } from '../../types/IProps';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface IMedicineCardProps {
	className?: string;
	medicine: Medicine;
}

const MedicineCard: FC<IMedicineCardProps> = ({ className, medicine }): ReactElement => {
	const CenteredRow: FC<IProps> = ({ children }) => (
		<Row isShadowed={false} flex={{ align: 'center', justify: 'center' }} className="mt-2">
			{children}
		</Row>
	);

	const getEnStock = () => {
		if (medicine.quantity > 0) {
			return <span className="c-green">En stock</span>;
		}
		return <span className="text-danger">Non disponible</span>;
	};

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
						<Row
							isShadowed={false}
							flex={{ align: 'center', justify: 'between' }}
							className="mt-2"
						>
							<div className="d-flex align-items-center">
								Quantité :
								<Input
									disabled={medicine.quantity === 0}
									type="number"
									className="ml-2"
									width={70}
								/>
							</div>
							<div>
								<Button disabled={medicine.quantity === 0} icon="shopping-cart" type="info">
									Ajouter au panier
								</Button>
							</div>
						</Row>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MedicineCard;
