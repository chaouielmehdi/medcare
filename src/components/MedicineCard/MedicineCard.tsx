import React, { FC, ReactElement } from 'react';
import { Medicine } from '../../models/Medicine';
import Row from '../Row/Row';

import medicineImage from '../../assets/img/medicine.png';
import { IProps } from '../../types/IProps';
import Input from '../Input/Input';

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

	return (
		<div className={className}>
			<div className="box-shadow border-radius p-3">
				<CenteredRow>
					<h4>{medicine.pharmacyName}</h4>
				</CenteredRow>
				<CenteredRow>
					<img src={medicineImage} alt="medicine" width="120" />
				</CenteredRow>
				<CenteredRow>
					<span className="c-green">{medicine.name}</span>
				</CenteredRow>
				<CenteredRow>
					<span>{medicine.description}</span>
				</CenteredRow>
				<Row
					isShadowed={false}
					flex={{ align: 'center', justify: 'between' }}
					className="font-weight-bold mt-2"
				>
					<span className="c-green">En stock</span>
					<span>{medicine.price} Dhs</span>
				</Row>
				<hr />
				<Row isShadowed={false} flex={{ align: 'center', justify: 'between' }} className="mt-2">
					<div>
						Quantité <Input label="Quantité" />
					</div>
					<div>{medicine.price} Dhs</div>
				</Row>
			</div>
		</div>
	);
};

export default MedicineCard;
