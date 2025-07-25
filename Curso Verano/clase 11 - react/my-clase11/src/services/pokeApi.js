export async function getAllPokemos() {
	const getDataPokemons = await fetch('https://pokeapi.co/api/v2/pokemon/');
	if (!getDataPokemons.ok) {
		console.error('Falló');
	}
	const dataPokemons = await getDataPokemons.json();
	const resultsPokemon = dataPokemons.results;

	console.log(resultsPokemon);
	return resultsPokemon;
}

export async function filterPokemon(name) {
	const getFilterPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
	if (!getFilterPokemon) {
		console.error('Falló');
	}

	const dataFilter = await getFilterPokemon.json();
	return dataFilter;
}
