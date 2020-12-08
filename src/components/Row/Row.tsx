import React, { FC, ReactElement } from "react";
import { IProps } from "../../types/IProps";

interface IRowProps {
	isShadowed?: boolean;
	flex?: {
		justify?: "start" | "end" | "center" | "between" | "around";
		align?: "start" | "end" | "center" | "baseline" | "stretch";
	};
}

const Row: FC<IProps & IRowProps> = ({ children, className, isShadowed = true, flex }): ReactElement => {
	let flexClass = " ";

	if (flex) {
		flexClass += [
			"d-flex",
			flex.align ? "align-items-" + flex.align : "",
			flex.justify ? "justify-content-" + flex.justify : "",
		].join(" ");
	}

	const rowClass: string = [className, "row", "m-0", "border-radius", isShadowed ? "box-shadow" : ""].join(" ");

	return <div className={rowClass + flexClass}>{children}</div>;
};

export default Row;
