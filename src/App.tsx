import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import About from './pages/about/about';
import Footer from './pages/footer/footer';
import Header from './pages/header/header';
import Home from './pages/home/home';
import Doctors from './pages/search/doctors/doctors';
import Medicines from './pages/search/medicines/medicines';
import Pharmacies from './pages/search/pharmacies/pharmacies';
import SignupDoctor from './pages/signup/doctor/signupdoctor';
import SignupPatient from './pages/signup/patient/signuppatient';
import SignupPharmacien from './pages/signup/pharmacien/signuppharmacien';

export enum ROUTE {
	HOME = '/home',
	ABOUT = '/about',
	DOCTORS = '/doctors',
	PHARMACIES = '/pharmacies',
	MEDICINES = '/medicines',
	LOGIN = '/login',
	FAQ = '/FAQ',
	CONTACT_US = '/contact-us',
	SIGNUPDOCTOR = '/sign-up-doctor',
	SIGNUPPATIENT = '/sign-up-patient',
	SIGNUPPHARMACIEN = '/sign-up-pharmacien',
}

const App = () => {
	// const [isConnected, setIsConnected] = useState(true);

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
					<Route path={ROUTE.SIGNUPDOCTOR} children={<SignupDoctor />} />
					<Route path={ROUTE.SIGNUPPATIENT} children={<SignupPatient />} />
					<Route path={ROUTE.SIGNUPPHARMACIEN} children={<SignupPharmacien />} />

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
