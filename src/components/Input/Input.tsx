import React, { FC, ReactElement } from 'react';
import { IProps } from '../../types/IProps';

type InputType = 'text' | 'checkbox' | 'radio';
type IconPosition = 'prepend' | 'append';

interface IInputProps {
	type?: InputType;
	icon?: string;
	iconPos?: IconPosition;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	defaultValue?: number;
}

const Input: FC<IProps & IInputProps> = ({
	placeholder,
	icon,
	iconPos,
	type,
	onChange,
	defaultValue,
}): ReactElement => {
	const iconPosition = 'input-group-' + iconPos;
	const iconClass = 'fas fa-' + icon;

	return (
		<>
			{iconPos === 'prepend' && (
				<div className={iconPosition}>
					<span className='input-group-text'>{icon && <i className={iconClass}></i>}</span>
				</div>
			)}
			<input
				type={type}
				className='form-control'
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={defaultValue}
			/>
			{iconPos === 'append' && (
				<div className={iconPosition}>
					<span className='input-group-text'>{icon && <i className={iconClass}></i>}</span>
				</div>
			)}
		</>
	);
};

export default Input;
