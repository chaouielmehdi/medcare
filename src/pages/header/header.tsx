import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTE } from '../../App';
import logo from '../../assets/img/logo.png';
import Button from '../../components/Button/Button';
import { patientService } from '../../services/patientService';

interface ILink {
	label: string;
	path: string;
	show: boolean;
	isButton?: boolean;
	icon?: string;
}

function Header() {
	const isConnected = patientService.isConnected();

	const links: ILink[] = [
		{
			show: true,
			path: ROUTE.HOME,
			label: 'Acceuil',
		},
		{
			show: true,
			path: ROUTE.ABOUT,
			label: 'A propos',
		},
		{
			show: true,
			path: ROUTE.DOCTORS,
			label: 'Médcins',
		},
		{
			show: true,
			path: ROUTE.PHARMACIES,
			label: 'Pharmacies',
		},
		{
			show: true,
			path: ROUTE.MEDICINES,
			label: 'Médicaments',
		},
		{
			show: true,
			path: ROUTE.FAQ,
			label: 'FAQ',
		},
		{
			show: true,
			path: ROUTE.CONTACT_US,
			label: 'Contactez-nous',
		},
		{
			show: !isConnected,
			isButton: true,
			path: ROUTE.LOGIN,
			icon: 'sign-in-alt',
			label: 'Connexion',
		},
		{
			show: isConnected,
			isButton: true,
			icon: 'envelope',
			path: ROUTE.MESSAGERIE,
			label: 'Messagerie',
		},
	];

	return (
		<nav className="navbar navbar-expand-lg navbar-light box-shadow">
			<div className="d-flex align-items-center justify-content-between w-100">
				<div>
					<Link to="/" className="navbar-brand d-flex align-items-center">
						<img src={logo} width="30" alt="logo" className="mr-2" />
						<span className="c-green font-weight-bold">MedCare 2.0</span>
					</Link>
				</div>
				<div>
					{links.map(
						(link, index) =>
							link.show && (
								<NavLink
									to={link.path}
									key={index}
									className="link mx-2"
									activeClassName="active-link"
								>
									{link.isButton && <Button icon={link.icon}>{link.label}</Button>}
									{!link.isButton && link.label}
								</NavLink>
							)
					)}
				</div>
			</div>
		</nav>
	);
}

export default Header;
