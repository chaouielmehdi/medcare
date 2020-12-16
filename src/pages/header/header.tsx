import React from 'react';
import logo from '../../assets/img/logo.png';

interface ILink {
	label: string;
	url: string;
}

function Header() {
	const links: ILink[] = [
		{ url: '', label: 'Acceuil' },
		{ url: '', label: 'A propos' },
		{ url: '', label: 'Médcins' },
		{ url: '', label: 'Pharmacies' },
		{ url: '', label: 'Médicaments' },
		{ url: '', label: 'Connexion' },
		{ url: '', label: 'FAQ' },
		{ url: '', label: 'Contactez-nous' },
	];

	return (
		<nav className="navbar navbar-expand-lg navbar-light box-shadow">
			<div className=" d-flex justify-content-between w-100">
				<div>
					<a className="navbar-brand d-flex align-items-center" href="/">
						<img src={logo} width="30" alt="logo" className="mr-2" />
						<span className="c-green font-weight-bold">MedCare 2.0</span>
					</a>
				</div>
				<div>
					<ul className="navbar-nav mr-auto">
						{links.map((link, index) => (
							<li key={index} className="nav-item">
								<a className="nav-link" href={link.url}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
