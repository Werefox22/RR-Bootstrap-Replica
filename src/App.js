import './App.css';
import TopBar from './components/TopBar';
import Banner from './components/Banner';
import Stores from './components/Stores';

// this exercise was a pain for some reason
// css is not my favorite

function App() {
	return (
		<div className="App">
			<TopBar />
			<Banner />
			<Stores />
		</div>
	);
}

export default App;
