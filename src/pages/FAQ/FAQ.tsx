import { useState } from 'react';
import { Card, CardBody, Collapse } from 'reactstrap';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Icon from '../../components/Icon/Icon';

function FAQ() {
	const faqs = [
		{
			question: "Qu'est-ce que MedCare 2.0 ?",
			answer: (
				<div>
					MedCare 2.0 est une plateforme web de télémédecine, de vente en ligne et de livraison à
					domicile des produits de santé, MedCare 2.0 met en contact trois acteurs, le patient, le
					médecin et le pharmacien. Notre plateforme joue donc le rôle d’intermédiaire en ligne qui
					met en relation ces trois utilisateurs. Elle ne possède ni les produits ni les services
					eux-mêmes à l’exception de l’activité de la livraison à domicile des produits de santé qui
					est assurée par ses propres moyens humains et matériels, tout cela en respectant
					parfaitement le cadre légal de ces actes.
				</div>
			),
		},
		{
			question: 'Comment puis-je prendre un rendez-vous ?',
			answer: (
				<div>
					L'usage de MedCare 2.0 est très facile ; il suffit de choisir le médecin et le créneau qui
					vous conviennent. Et vous remplissez ensuite les champs qui apparaissent à l’écran, et
					votre rendez-vous sera confirmé en quelques minutes !
				</div>
			),
		},
		{
			question: "J'utilise un agenda papier, est-il facile de passer à MedCare 2.0 ?",
			answer: (
				<div>
					Il suffit de décider de la date à partir de laquelle vous prendrez rendez-vous sur notre
					portail et d'y ajouter les rendez-vous déjà pris sur votre agenda papier. Vous pouvez
					alors commencer à utiliser MedCare 2.0 sans attendre. Si vous avez un fort taux de
					remplissage jusqu'à la fin du mois, le mieux serait de commencer à immédiatement saisir en
					ligne pour les rendez-vous à compter du mois prochain. Si votre base de patients est sous
					format électronique, aucune ressaisie ne sera nécessaire.
				</div>
			),
		},
		{
			question: "Que va m'apporter ce service ?",
			answer: (
				<div>
					Au-delà des optimisations élémentaires liées à l'utilisation d'un agenda partagé
					informatique, il soulagera énormément votre travail en réduisant substantiellement la
					prise de rendez-vous par téléphone. Les secrétaires auront désormais davantage de temps
					pour s'occuper de taches moins fastidieuses et plus rentables.
				</div>
			),
		},
		{
			question: 'Quel équipement informatique me faut-il pour pouvoir utiliser MedCare 2.0 ?',
			answer: (
				<div>
					La plateforme MedCare 2.0 est optimisé pour les navigateurs les plus utilisés et récents,
					tels que Mozilla Firefox, Google Chrome et Internet Explorer et peut donc être utilisé
					avec une machine tournante sous Windows ou Mac OS X.
				</div>
			),
		},
		{
			question: 'Qui peut accéder aux informations que nous recueillons ?',
			answer: (
				<div>
					Les informations échangées entre le médecin et le patient sont des informations
					confidentielles, seuls le patient et son médecin peuvent les accéder.
				</div>
			),
		},
		{
			question: 'Pourquoi MedCare 2.0 ?',
			answer: (
				<div>
					Parce que notre plateforme offre :
					<ul>
						<li>Prise de rendez-vous en ligne 24h/7j</li>
						<li>Gestion de vos rendez-vous en ligne et au cabinet</li>
						<li>Personnalisation des paramètres des rendez-vous (label, catégorie...)</li>
						<li>
							Personnalisation des paramètres de prix et de durée de vos consultations vidéo
						</li>
						<li>Paiement en ligne des honoraires des consultations vidéo</li>
						<li>Chiffrement de bout en bout des vidéos et données relatives aux consultations</li>
					</ul>
				</div>
			),
		},
	];

	const [isOpen, setIsOpen] = useState<boolean[]>(new Array(faqs.length).fill(false));

	const toggle = (index: number) => () => {
		const newIsOpen = [...isOpen];

		newIsOpen.forEach((_, i) => {
			if (index === i) {
				newIsOpen[index] = !newIsOpen[index];
			} else {
				newIsOpen[i] = false;
			}
		});

		setIsOpen(newIsOpen);
	};

	return (
		<Container>
			{faqs.map((faq, index) => (
				<div key={index} className="w-100 d-flex justify-content-center">
					<div style={{ width: '60%' }}>
						<Button onClick={toggle(index)} className="w-100 c-grey my-2">
							<>
								{faq.question}
								<Icon
									name={'arrow-circle-' + (isOpen[index] ? 'up' : 'down')}
									className="ml-2"
								/>
							</>
						</Button>
						<Collapse isOpen={isOpen[index]}>
							<Card>
								<CardBody>{faq.answer}</CardBody>
							</Card>
						</Collapse>
					</div>
				</div>
			))}
		</Container>
	);
}

export default FAQ;
