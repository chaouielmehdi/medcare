import Header from './pages/header/header';
import About from './pages/about/about';
import Home from './pages/home/home';
import Doctors from './pages/search/doctors/doctors';
import Pharmacies from './pages/search/pharmacies/pharmacies';
import Footer from './pages/footer/footer';
<<<<<<< HEAD
import Contact from './pages/contact/contact';
=======
import Medicines from './pages/search/medicines/medicines';
>>>>>>> 77fcc92f02ae28d373dbb3199d57b4807b824e9a

const App = () => {
	return (
		<>
			<Header />
<<<<<<< HEAD
			<div className='py-5'>
				{/*<Home /> */}
				{/* <About /> */}
				{/* <Doctors /> */}
				{/* <Pharmacies /> */}
				<Contact />
=======
			<div className="main py-5">
				{/* <Home /> */}
				{/* <About /> */}
				{/* <Doctors /> */}
				{/* <Pharmacies /> */}
				<Medicines />
>>>>>>> 77fcc92f02ae28d373dbb3199d57b4807b824e9a
			</div>
			<Footer />
		</>
	);
};

export default App;
