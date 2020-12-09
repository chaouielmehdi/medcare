import React, { FC, ReactElement } from 'react';
import Icon from '../Icon/Icon';

interface IRatingProps {
	value: number;
}

const Rating: FC<IRatingProps> = ({ value }): ReactElement => {
	let stars: JSX.Element[] = [];

	for (let index = 0; index < 5; index++) {
		if (index < value) {
			stars.push(<Icon key={index} name="star" className="c-green" type="solid" />);
		} else {
			stars.push(<Icon key={index} name="star" className="c-green" type="regular" />);
		}
	}

	return <>{stars}</>;
};

export default Rating;
