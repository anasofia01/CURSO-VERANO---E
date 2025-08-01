import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CharacterDetails from './pages/characterDetails';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/character/:id' element={<CharacterDetails />} />
		</Routes>
	);
}

export default App;
