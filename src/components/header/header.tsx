import React from "react";
import "./header.css";

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-info">

				<div>
					<a className="navbar-brand" href="#">
						MedCare 2.0
					</a>
				</div>
				<div className="collapse navbar-collapse" id="navbarSupportedContent" >
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Acceuil
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								A propos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Espace Médcin
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Espace Pharmacie
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Connexion
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								FAQ
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contactez-nous
							</a>
						</li>
					</ul>
				</div>
		</nav>
	);
}

export default Header;
