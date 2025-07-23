import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getInfoCharacters } from './services/dataApi';

const info = await getInfoCharacters();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
