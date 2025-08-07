export const getDataRickMorty = async () => {
	const getAllCharacters = await fetch('https://rickandmortyapi.com/api/character');
	if (!getAllCharacters.ok) {
		console.error('Falló');
	}

	const dataCharacters = await getAllCharacters.json();
	const dataResults = dataCharacters.results;

	return dataResults;
};

export const getDataById = async (id) => {
	const getAllCharactersId = await fetch('https://rickandmortyapi.com/api/character/' + id);
	if (!getAllCharactersId.ok) {
		console.error('Falló');
	}

	const dataCharactersId = await getAllCharactersId.json();
	console.log(dataCharactersId);

	return dataCharactersId;
};
