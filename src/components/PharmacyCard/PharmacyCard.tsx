import React, { FC, ReactElement } from 'react';
import { Pharmacy } from '../../models/Pharmacy';
import Row from '../Row/Row';

import Rating from '../Rating/Rating';
import Icon from '../Icon/Icon';

interface IPharmacyCardProps {
	className?: string;
	pharmacy: Pharmacy;
}

const PharmacyCard: FC<IPharmacyCardProps> = ({ className, pharmacy }): ReactElement => {
	const getNumberFromDate = (date: Date): number => {
		const hours = date.getHours();
		const minutes = date.getMinutes() / 60;

		return hours + minutes;
	};

	const getDateAsString = (value: number): string => {
		const hours = Math.floor(value);
		const minutes = (value - Math.floor(value)) * 60;

		return hours + 'h' + minutes;
	};

	const getOpenedOrClosed = (start: number, end: number): JSX.Element => {
		const now = getNumberFromDate(new Date());

		if (now < start || end < now) {
			return <span className="text-danger">Fermée</span>;
		}

		return <span className="c-green">Ouverte</span>;
	};

	return (
		<div className={className}>
			<Row flex={{ align: 'center', justify: 'between' }} className="p-4">
				<div className="col-2 d-flex justify-content-center pl-0 pr-4">
					<span className="c-green icon-medium">
						<Icon className="mr-2" name="clinic-medical" />
					</span>
				</div>
				<div className="col-10 border-left">
					<h2 className="c-green">{pharmacy.name}</h2>

					<Row flex={{ align: 'start', justify: 'between' }} isShadowed={false}>
						<div className="col-6 p-0">
							<span className="d-block my-1">
								<Icon className="mr-2" name="user" />
								{pharmacy.ownerName}
							</span>
							<span className="d-block my-1">
								<Icon className="mr-2" name="map-marker-alt" />
								{pharmacy.address}
							</span>
							<span className="d-block my-1">
								<Rating value={pharmacy.rating} />
							</span>
						</div>
						<div className="col-6 border-left p-0 pl-3">
							<span className="d-block my-1">
								<Icon className="mr-2" name="phone" />
								{pharmacy.phone}
							</span>
							<span className="d-block my-1">
								<Icon className="mr-2" name="envelope" />
								{pharmacy.email}
							</span>
							<span className="d-block my-1">
								{getOpenedOrClosed(pharmacy.schedule.start, pharmacy.schedule.end)}
								<span className="ml-2">
									(Du Lundi à Vendredi : {getDateAsString(pharmacy.schedule.start)} -
									{getDateAsString(pharmacy.schedule.end)})
								</span>
							</span>
						</div>
					</Row>
				</div>
			</Row>
		</div>
	);
};

export default PharmacyCard;
