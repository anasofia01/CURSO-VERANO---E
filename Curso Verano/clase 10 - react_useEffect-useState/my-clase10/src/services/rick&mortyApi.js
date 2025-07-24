export async function getAllEpisodes() {
	const getDataEpisodes = await fetch('https://rickandmortyapi.com/api/episode');

	if (!getDataEpisodes.ok) {
		console.log('Falló');
	}

	const dataEpisodes = await getDataEpisodes.json();
	const dataResults = dataEpisodes.results;

	console.log(dataResults);
	return dataResults;
}
