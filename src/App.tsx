<<<<<<< HEAD
import "./App.css";
import Header from "./pages/header/header";
import Footer from "./pages/footer/footer";
import About from "./pages/about/about";
import Home from "./pages/home/home";
=======
import './App.css';
import Header from './pages/header/header';
import About from './pages/about/about';
import Home from './pages/home/home';
import Doctors from './pages/search/doctors/doctors';
>>>>>>> 03ff8f9601570c63cfeda351b06b73f9c6091cd9

const App = () => {
	return (
		<>
			<Header />
			<div className="py-5">
				{/* <Home /> */}
				{/* <About /> */}
				<Doctors />
			</div>
			<Footer />
		</>
	);
};

export default App;
