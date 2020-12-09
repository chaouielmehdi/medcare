import React from 'react';
import './pharmacies.css';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import Input from '../../../components/Input/Input';
import PharmacyCard from '../../../components/PharmacyCard/PharmacyCard';
import Row from '../../../components/Row/Row';
import { pharmacies } from '../../../models/Pharmacy';

function Pharmacies() {
	return (
		<Container>
			<>
				<div className='mb-5'>
					<div className='head-text text-center my-3'>
						<p>Trouvez votre pharmacie</p>
					</div>
					<Row isShadowed={false} flex={{ justify: 'around', align: 'center' }} className='mb-5'>
						<div className='input-group col-4 ml-5'>
							<Input
								placeholder='Entrer le nom de la pharmacie'
								icon='clinic-medical'
								iconPos='prepend'
							/>
						</div>
						<div className=' col-1'>
							<p className='text-center m-0'>Ou</p>
						</div>
						<div className='input-group col-4 '>
							<div className='input-group-prepend'>
								<span className='input-group-text'>
									<i className='fas fa-map-marker-alt'></i>
								</span>
							</div>
							<select className='custom-select' id='inputGroupSelect01'>
								<option selected>Choisir une ville...</option>
								<option value='1'>One</option>
								<option value='2'>Two</option>
								<option value='3'>Three</option>
							</select>
						</div>
						<div className='input-group col-2'>
							<Button className='mr-5' icon='search' type='light'>
								Chercher
							</Button>
						</div>
					</Row>
				</div>
				{pharmacies.map((pharmacy, index) => (
					<PharmacyCard key={index} className='mb-4' pharmacy={pharmacy} />
				))}
			</>
		</Container>
	);
}

export default Pharmacies;
