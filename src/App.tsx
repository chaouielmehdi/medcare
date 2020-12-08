import Header from './pages/header/header';
import About from './pages/about/about';
import Home from './pages/home/home';
import Doctors from './pages/search/doctors/doctors';
import Pharmacies from './pages/search/pharmacies/pharmacies';

const App = () => {
	return (
		<>
			<Header />
			<div className="py-5">
				{/* <Home /> */}
				{/* <About /> */}
				{/* <Doctors /> */}
				<Pharmacies />
			</div>
		</>
	);
};

export default App;
