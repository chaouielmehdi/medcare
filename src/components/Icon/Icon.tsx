import React, { FC, ReactElement } from 'react';

interface IIconProps {
	name: string;
	className?: string;
	type?: 'regular' | 'solid';
}

const Icon: FC<IIconProps> = ({ name, className, type = 'solid' }): ReactElement => {
	const iconClass = [className, type === 'regular' ? 'far' : 'fas', 'fa-' + name].join(' ');

	return <i className={iconClass}></i>;
};

export default Icon;
