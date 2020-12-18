import { FC, ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ROUTE } from '../../App';
import { IProps } from '../../types/IProps';

interface IProtectedRouteProps {
	path: string;
	condition: boolean;
}

export const ProtectedRoute: FC<IProps & IProtectedRouteProps> = ({
	path,
	condition,
	children,
}): ReactElement => {
	if (condition) {
		return <Route path={path} children={children} />;
	}

	return <Redirect to={ROUTE.HOME} />;
};
