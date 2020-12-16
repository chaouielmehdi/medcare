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
	valid?: boolean;
	defaultValue?: string | number;
	value?: string | number;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps & IInputProps> = ({
	placeholder,
	icon,
	iconPos,
	type,
	className,
	width,
	disabled,
	valid,
	defaultValue,
	value,
	onChange,
}): ReactElement => {
	const iconPosition = 'input-group-' + iconPos;
	const iconClass = 'fas fa-' + icon;
	const inputClass = className + ' form-control ' + (valid ? '' : 'is-invalid');

	return (
		<>
			{iconPos === 'prepend' && (
				<div className={iconPosition}>
					<span className="input-group-text">{icon && <i className={iconClass}></i>}</span>
				</div>
			)}
			<input
				type={type}
				className={inputClass}
				placeholder={placeholder}
				style={{ width }}
				disabled={disabled}
				onChange={onChange}
				defaultValue={defaultValue}
				value={value}
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
