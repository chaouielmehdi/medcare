import "./App.css";
import Header from "./pages/header/header";
import Footer from "./pages/footer/footer";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Doctors from "./pages/search/doctors/doctors";

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
