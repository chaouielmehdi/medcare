import React from 'react';
import Button, { ButtonType } from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import { smoothScroll } from '../../services/smoothScroll';

import './contact.css';

function Contact() {
	return (
		<Container>
			<Row flex={{ align: 'center' }} className='section-block d-flex flex-column p-4 mt-3'>
				<div>
					<div className='head-text text-center my-3'>
						<p>Vous avez une question à nous poser ? </p>
					</div>
				</div>
				{/* <div className='col-4 text-center align-self-center my-3'> */}
				<div>
					<div className='my-3'>
						<p>Besoin d'aide ? </p>
						<p>Gangnez du temps en formulant votre question en ligne afain que nous vous aidions ! </p>
					</div>
					<div className='d-flex justify-content-around'></div>
				</div>
			</Row>

			<Row flex={{ align: 'center' }} className='p-4 mt-5'></Row>
		</Container>
	);
}

export default Contact;
