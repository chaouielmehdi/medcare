import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import About from './pages/about/about';
import Cart from './pages/cart/cart';
import Connexion from './pages/connexion/connexion';
import Contact from './pages/contact/contact';
import FAQ from './pages/FAQ/FAQ';
import Footer from './pages/footer/footer';
import Header from './pages/header/header';
import Home from './pages/home/home';
import Messagerie from './pages/messagerie/messagerie';
import Doctors from './pages/search/doctors/doctors';
import Medicines from './pages/search/medicines/medicines';
import Pharmacies from './pages/search/pharmacies/pharmacies';
import SignupDoctor from './pages/signup/doctor/signupdoctor';
import SignupPatient from './pages/signup/patient/signuppatient';
import SignupPharmacien from './pages/signup/pharmacien/signuppharmacien';
import { cartService } from './services/cartService';
import { patientService } from './services/patientService';

export enum ROUTE {
	HOME = '/home',
	ABOUT = '/about',
	DOCTORS = '/doctors',
	PHARMACIES = '/pharmacies',
	MEDICINES = '/medicines',
	FAQ = '/FAQ',
	CONTACT_US = '/contact-us',
	SIGN_UP_DOCTOR = '/sign-up-doctor',
	SIGN_UP_PATIENT = '/sign-up-patient',
	SIGN_UP_PHARMACIEN = '/sign-up-pharmacien',
	LOGIN = '/login',
	MESSAGERIE = '/messagerie',
	CART = '/cart',
}

const App = () => {
	const isConnected = patientService.isConnected();
	const [cartCount, setCartCount] = useState(cartService.getAll() ? cartService.getAll().length : 0);

	const handleSetCartCount = (): void => {
		setCartCount(cartService.getAll() ? cartService.getAll().length : 0);
	};

	return (
		<Router>
			<Header cartCount={cartCount} />
			<div className="main py-5">
				<Switch>
					<Route exact path="/">
						<Redirect to={ROUTE.HOME} />
					</Route>

					<Route path={ROUTE.HOME} children={<Home />} />
					<Route path={ROUTE.ABOUT} children={<About />} />
					<Route path={ROUTE.DOCTORS} children={<Doctors />} />
					<Route path={ROUTE.PHARMACIES} children={<Pharmacies />} />
					<Route
						path={ROUTE.MEDICINES + '/:pharmacyId?'}
						children={<Medicines setCartCount={handleSetCartCount} />}
					/>
					<ProtectedRoute
						condition={isConnected}
						path={ROUTE.MESSAGERIE}
						children={<Messagerie />}
					/>
					<ProtectedRoute condition={!isConnected} path={ROUTE.LOGIN} children={<Connexion />} />
					<Route path={ROUTE.FAQ} children={<FAQ />} />
					<Route path={ROUTE.CONTACT_US} children={<Contact />} />
					<Route path={ROUTE.SIGN_UP_DOCTOR} children={<SignupDoctor />} />
					<Route path={ROUTE.SIGN_UP_PATIENT} children={<SignupPatient />} />
					<Route path={ROUTE.SIGN_UP_PHARMACIEN} children={<SignupPharmacien />} />
					<Route path={ROUTE.CART} children={<Cart setCartCount={handleSetCartCount} />} />

					<Route path="*">
						<Redirect to={ROUTE.HOME} />
					</Route>
				</Switch>
				<ToastContainer />
			</div>
			<Footer />
		</Router>
	);
};

export default App;
