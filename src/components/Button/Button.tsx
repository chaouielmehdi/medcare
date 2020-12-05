import React, { FC, ReactElement } from 'react';
import { IProps } from '../../types/IProps';

export type ButtonType =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'
	| 'link';

interface IButtonProps {
	type?: ButtonType;
	icon?: string;
	onClick?: (event: React.MouseEvent) => void;
}

const Button: FC<IProps & IButtonProps> = ({ children, className, icon, type, onClick }): ReactElement => {
	const buttonClass = [className, 'btn', type ? 'btn-' + type : 'btn-light'].join(' ');
	const iconClass = 'mr-2 fas fa-' + icon;

	return (
		<button onClick={onClick} type="button" className={buttonClass}>
			{icon && <i className={iconClass}></i>}
			{children}
		</button>
	);
};

export default Button;
