import React from 'react';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';

function Cart() {
	return (
		<Container>
			<Row flex={{ align: 'center' }} className=" d-flex flex-column p-4">
				<div>
					<div className="head-text text-center my-3">
						<p>BIENVENUE DANS VOTRE ESPACE !</p>
						<p>Flan ben fertelan</p>
					</div>
					<div className="border-case head-title text-center">
						<p className="head-title ">MON PANIER</p>
					</div>

					<div className="d-flex justify-content-around my-3"></div>
				</div>
			</Row>
		</Container>
	);
}

export default Cart;
