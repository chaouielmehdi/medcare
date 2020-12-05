import React, { FC, ReactElement } from 'react';
import { IProps } from '../../types/IProps';

interface IRowProps {
	isShadowed?: boolean;
	isBorderedRadius?: boolean;
}

const Row: FC<IProps & IRowProps> = ({ children, className, isShadowed, isBorderedRadius }): ReactElement => {
	const rowClass: string = [
		'row',
		'm-1',
		className,
		isShadowed ? 'box-shadow' : '',
		isBorderedRadius ? 'border-radius' : '',
	].join(' ');

	return <div className={rowClass}>{children}</div>;
};

export default Row;
