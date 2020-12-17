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
	name?: string;
}

const Input: FC<IProps & IInputProps> = ({
	placeholder,
	icon,
	iconPos,
	type,
	className,
	width,
	disabled,
	name,
}): ReactElement => {
	const iconPosition = 'input-group-' + iconPos;
	const iconClass = 'fas fa-' + icon;
	const inputClassName = className + (type !== 'radio' ? ' form-control' : '');
	const getIcon = () => (
		<div className={iconPosition}>
			<span className='input-group-text d-flex justify-content-center' style={{ width: '40px' }}>
				{icon && <i className={iconClass}></i>}
			</span>
		</div>
	);

	return (
		<>
			{iconPos === 'prepend' && getIcon()}
			<input
				type={type}
				className={inputClassName}
				placeholder={placeholder}
				style={{ width }}
				disabled={disabled}
				name={name}
			/>
			{iconPos === 'append' && getIcon()}
		</>
	);
};

export default Input;
