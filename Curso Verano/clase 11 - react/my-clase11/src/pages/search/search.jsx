import { useState } from 'react';
import Form from '../../components/form/form';
import { filterPokemon } from '../../services/pokeApi';
import Card from '../../components/card/card';

function SearchPage() {
	const [searchPokemon, setSearchPokemon] = useState(null);

	const filteredPokemon = async (name) => {
		const infoPokemon = await filterPokemon(name);
		setSearchPokemon(infoPokemon);
	};

	return (
		<div className='container mt-5'>
			<Form onSearch={filteredPokemon} />
			{searchPokemon && <Card name={searchPokemon.name} />}
		</div>
	);
}

export default SearchPage;
