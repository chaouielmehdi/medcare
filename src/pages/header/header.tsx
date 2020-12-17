import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTE } from '../../App';
import logo from '../../assets/img/logo.png';

interface ILink {
	label: string;
	path: string;
}

function Header() {
	const links: ILink[] = [
		{ path: ROUTE.HOME, label: 'Acceuil' },
		{ path: ROUTE.ABOUT, label: 'A propos' },
		{ path: ROUTE.DOCTORS, label: 'Médcins' },
		{ path: ROUTE.PHARMACIES, label: 'Pharmacies' },
		{ path: ROUTE.MEDICINES, label: 'Médicaments' },
		{ path: ROUTE.LOGIN, label: 'Connexion' },
		{ path: ROUTE.FAQ, label: 'FAQ' },
		{ path: ROUTE.CONTACT_US, label: 'Contactez-nous' },
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
					{links.map((link, index) => (
						<NavLink
							to={link.path}
							key={index}
							className="link mx-2"
							activeClassName="active-link"
						>
							{link.label}
						</NavLink>
					))}
				</div>
			</div>
		</nav>
	);
}

export default Header;
