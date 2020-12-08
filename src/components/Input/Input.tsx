import { type } from "os";
import React, { FC, ReactElement } from "react";
import { IProps } from "../../types/IProps";

export type InputType = "text" | "checkbox" | "radio";
export type iconPosition = "prepend" | "append";

interface IInputProps {
	type?: InputType;
	icon?: string;
	iconPos?: iconPosition;
	label: string;
	onClick?: (event: React.MouseEvent) => void;
}

const Input: FC<IProps & IInputProps> = ({ placeholder, label, icon, iconPos, type }): ReactElement => {
	const placeholderText = placeholder;
	const iconPosition = ["input-group-", iconPos].join("");
	const iconClass = "fas fa-" + icon;

	return (
		<>
			{iconPos == "prepend" && (
				<div className={iconPosition}>
					<span className="input-group-text" id="basic-addon1">
						{icon && iconPos && <i className={iconClass}></i>}
					</span>
				</div>
			)}
			<input type={type} className="form-control" placeholder={placeholderText} aria-label={label} />
			{iconPos == "append" && (
				<div className={iconPosition}>
					<span className="input-group-text" id="basic-addon1">
						{icon && iconPos && <i className={iconClass}></i>}
					</span>
				</div>
			)}
		</>
	);
};

export default Input;
