import Header from './pages/header/header';
import About from './pages/about/about';
import Home from './pages/home/home';
import Doctors from './pages/search/doctors/doctors';
import Pharmacies from './pages/search/pharmacies/pharmacies';
import Footer from './pages/footer/footer';
import Medicines from './pages/search/medicines/medicines';
import React from 'react';
import Contact from './pages/contact/contact';
import Connexion from './pages/connexion/connexion';

const App = () => {
	return (
		<>
			<Header />
			<div className='main py-5'>
				{/* <Home /> */}
				{/* <About /> */}
				{/* <Doctors /> */}
				{/* <Pharmacies /> */}
				{/* <Medicines /> */}
				{/* <Contact /> */}
				<Connexion />
			</div>
			<Footer />
		</>
	);
};

export default App;
