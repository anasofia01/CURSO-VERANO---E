import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import UserPage from './pages/user';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/user' element={<UserPage />} />
		</Routes>
	);
}

export default App;
