import './App.css';
import Header from './pages/header/header';
import About from './pages/about/about';
import Home from './pages/home/home';

const App = () => {
	return (
		<>
			<Header />
			<div className="py-5">
				<Home />
				{/* <About /> */}
			</div>
		</>
	);
};

export default App;
