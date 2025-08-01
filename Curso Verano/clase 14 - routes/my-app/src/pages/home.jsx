import { useState, useEffect } from 'react';
import { getDataRickMorty } from '../services/getDataRickMorty';
import CardCharacter from '../components/cardComponent/card';

function Home() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const getCharacters = async () => {
			const data = await getDataRickMorty();
			setCharacters(data);
		};

		getCharacters();
	}, []);

	return (
		<div>
			{characters.map((character) => (
				<CardCharacter key={character.id} character={character} />
			))}
		</div>
	);
}

export default Home;
