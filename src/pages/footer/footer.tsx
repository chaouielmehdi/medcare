import React from "react";
import "./footer.css";
import logo from "../../assets/img/logo.png";

interface ILink {
	label: string;
	url: string;
}

function Footer() {
	const links: ILink[] = [
		{ url: "", label: "politique de confidentialité" },
		{ url: "", label: "Copyright © 2020, tous droits réservés" },
		{ url: "", label: "Condition générale d'utilisation" },
	];

	return (
		<nav className="navbar navbar-expand-lg navbar-light box-shadow">
			<div className="container-fluid-nav align-items-center">
				<div className="border container-fluid ">
					<a className="navbar-brand d-flex align-items-center" href="/">
						<img src={logo} width="30" alt="logo" className="mr-2" />
						<span className="c-green font-weight-bold">MedCare 2.0</span>
					</a>
				</div>
				<div className="navbar-text border">
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

export default Footer;
