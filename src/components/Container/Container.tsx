import React, { FC, ReactElement } from 'react';
import { IProps } from '../../types/IProps';

const Container: FC<IProps> = ({ children, className }): ReactElement => {
	return <div className={'container-fluid ' + className}>{children}</div>;
};

export default Container;
