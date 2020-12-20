import React, { FC, ReactElement } from 'react';
import { IProps } from '../../types/IProps';

type InputType = 'text' | 'checkbox' | 'radio' | 'number' | 'password' | 'file';
type IconPosition = 'prepend' | 'append';

interface IInputProps {
	id?: string;
	name?: string;
	type?: InputType;
	icon?: string;
	iconPos?: IconPosition;
	width?: number;
	height?: number;
	placeholder?: string;
	disabled?: boolean;
	valid?: boolean;
	defaultValue?: string | number;
	value?: string | number;
	checked?: boolean | undefined;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps & IInputProps> = ({
	id,
	name,
	placeholder,
	icon,
	iconPos,
	type,
	className,
	width,
	height,
	disabled,
	valid,
	defaultValue,
	value,
	checked,
	onChange,
}): ReactElement => {
	const iconPosition = 'input-group-' + iconPos;
	const iconClass = 'fas fa-' + icon;
	const inputClass = className + ' form-control ' + (valid === false ? 'is-invalid' : '');
	const getIcon = () => (
		<div className={iconPosition}>
			<span className="input-group-text d-flex justify-content-center" style={{ width: '40px' }}>
				{icon && <i className={iconClass}></i>}
			</span>
		</div>
	);

	return (
		<>
			{iconPos === 'prepend' && getIcon()}
			<input
				id={id}
				name={name}
				type={type}
				className={inputClass}
				placeholder={placeholder}
				style={{ width, height }}
				disabled={disabled}
				onChange={onChange}
				defaultValue={defaultValue}
				value={value}
				checked={checked}
			/>
			{iconPos === 'append' && getIcon()}
		</>
	);
};

export default Input;
