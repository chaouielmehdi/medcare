import React from 'react';
import './header.css';
import logo from '../../assets/img/logo.png';

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="d-flex justify-content-between w-100">
				<div>
					<a className="navbar-brand d-flex align-items-center" href="/">
						<img src={logo} width="30" alt="logo" className="mr-2" />
						<span className="c-green font-weight-bold">MedCare 2.0</span>
					</a>
				</div>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">
								Acceuil
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								A propos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Espace Médcin
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Espace Pharmacie
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Connexion
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								FAQ
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Contactez-nous
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
