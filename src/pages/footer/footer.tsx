import React from 'react';
import logo from '../../assets/img/logo.png';
import Row from '../../components/Row/Row';

interface ILink {
	label: string;
	url: string;
}

function Footer() {
	const links: ILink[] = [
		{ url: '', label: 'politique de confidentialité' },
		{ url: '', label: 'Copyright © 2020, tous droits réservés' },
		{ url: '', label: "Condition générale d'utilisation" },
	];

	return (
		<div className="mb-4">
			<Row flex={{ justify: 'center' }} isShadowed={false}>
				<a className="align-items-center" href="/">
					<img src={logo} width="30" alt="logo" className="mr-2" />
					<span className="c-green font-weight-bold">MedCare 2.0</span>
				</a>
			</Row>
			<Row flex={{ justify: 'around' }} isShadowed={false}>
				{links.map((link, index) => (
					<a key={index} className="c-grey mt-4" href={link.url}>
						{link.label}
					</a>
				))}
			</Row>
		</div>
	);
}

export default Footer;
