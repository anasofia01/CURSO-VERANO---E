import { useEffect, useState } from 'react';
import { getAllPokemos } from '../../services/pokeApi';
import Card from '../../components/card/card';

function Home() {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const getDataPokemons = async () => {
			const dataPokemons = await getAllPokemos();
			setPokemons(dataPokemons);
		};

		getDataPokemons();
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				{pokemons.map((pokemon) => (
					<div className='col-4'>
						<Card name={pokemon.name} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
