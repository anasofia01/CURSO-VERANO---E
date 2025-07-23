export async function getInfoCharacters() {
	const getDataCharacters = await fetch('https://rickandmortyapi.com/api/character');

	if (!getDataCharacters.ok) {
		console.log('Falló');
	}

	const dataCharacters = await getDataCharacters.json();
	const dataResults = dataCharacters.results;
	console.log(dataResults);
	return dataResults;
}
