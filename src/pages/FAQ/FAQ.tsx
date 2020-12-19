import { useState } from 'react';
import { Card, CardBody, Collapse } from 'reactstrap';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Icon from '../../components/Icon/Icon';
import './FAQ.css';
function FAQ() {
	const faqs = [
		{
			question: 'Question 1',
			answer: 'answer 1',
		},
		{
			question: 'Question 2',
			answer: 'answer 2',
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
					<div className="faq-wrapper">
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
