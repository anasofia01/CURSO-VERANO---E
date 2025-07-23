import Card from './components/card-component/card';
import Formulario from './components/formulario-component/formulario';

function App() {
	return (
		<div className='App'>
			<Card />
			<Formulario cantidad={'Ingresa tu info'} nombre={'Amapolita'} />
		</div>
	);
}

export default App;
