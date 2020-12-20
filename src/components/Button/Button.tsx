import React, { FC, ReactElement } from 'react';
import { IProps } from '../../types/IProps';

export type ButtonType =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'outline-danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'
	| 'link';

interface IButtonProps {
	type?: ButtonType;
	icon?: string;
	disabled?: boolean;
	width?: number;
	height?: number;
	onClick?: (event: React.MouseEvent) => void;
}

const Button: FC<IProps & IButtonProps> = ({
	children,
	className,
	icon,
	type = 'light',
	disabled,
	width,
	height,
	onClick,
}): ReactElement => {
	const buttonClass = className + ' btn btn-' + type + (type === 'light' ? ' border' : '');
	const iconClass = 'mr-2 fas fa-' + icon;

	return (
		<button
			disabled={disabled}
			style={{ width, height }}
			onClick={onClick}
			type="button"
			className={buttonClass}
		>
			{icon && <i className={iconClass}></i>}
			{children}
		</button>
	);
};

export default Button;
