import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import About from './pages/about/about';
import Connexion from './pages/connexion/connexion';
import Contact from './pages/contact/contact';
import FAQ from './pages/FAQ/FAQ';
import Footer from './pages/footer/footer';
import Header from './pages/header/header';
import Home from './pages/home/home';
import Doctors from './pages/search/doctors/doctors';
import Medicines from './pages/search/medicines/medicines';
import Pharmacies from './pages/search/pharmacies/pharmacies';
import SignupDoctor from './pages/signup/doctor/signupdoctor';
import SignupPatient from './pages/signup/patient/signuppatient';
import SignupPharmacien from './pages/signup/pharmacien/signuppharmacien';
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
}

const App = () => {
	const [isConnected, setIsConnected] = useState(patientService.isConnected());

	return (
		<Router>
			<Header />
			<div className="main py-5">
				<Switch>
					<Route exact path="/">
						<Redirect to={ROUTE.HOME} />
					</Route>

					<Route path={ROUTE.HOME} children={<Home />} />
					<Route path={ROUTE.ABOUT} children={<About />} />
					<Route path={ROUTE.DOCTORS} children={<Doctors />} />
					<Route path={ROUTE.PHARMACIES} children={<Pharmacies />} />
					<Route path={ROUTE.MEDICINES + '/:pharmacyId?'} children={<Medicines />} />
					<Route path={ROUTE.CONTACT_US} children={<Contact />} />

					<Route path={ROUTE.LOGIN} children={<Connexion />} />
					<Route path={ROUTE.FAQ} children={<FAQ />} />
					<Route path={ROUTE.CONTACT_US} children={<Contact />} />

					<Route path={ROUTE.SIGN_UP_DOCTOR} children={<SignupDoctor />} />
					<Route path={ROUTE.SIGN_UP_PATIENT} children={<SignupPatient />} />
					<Route path={ROUTE.SIGN_UP_PHARMACIEN} children={<SignupPharmacien />} />

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
