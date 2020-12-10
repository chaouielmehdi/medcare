import React, { FC, ReactElement } from 'react';
import { IProps } from '../../types/IProps';

type InputType = 'text' | 'checkbox' | 'radio' | 'number';
type IconPosition = 'prepend' | 'append';

interface IInputProps {
	type?: InputType;
	icon?: string;
	iconPos?: IconPosition;
	width?: number;
	placeholder?: string;
	disabled?: boolean;
}

const Input: FC<IProps & IInputProps> = ({
	placeholder,
	icon,
	iconPos,
	type,
	className,
	width,
	disabled,
}): ReactElement => {
	const iconPosition = 'input-group-' + iconPos;
	const iconClass = 'fas fa-' + icon;

	return (
		<>
			{iconPos === 'prepend' && (
				<div className={iconPosition}>
					<span className="input-group-text">{icon && <i className={iconClass}></i>}</span>
				</div>
			)}
			<input
				type={type}
				className={className + ' form-control'}
				placeholder={placeholder}
				style={{ width }}
				disabled={disabled}
			/>
			{iconPos === 'append' && (
				<div className={iconPosition}>
					<span className="input-group-text">{icon && <i className={iconClass}></i>}</span>
				</div>
			)}
		</>
	);
};

export default Input;
