import { useState, useEffect } from 'react';
import { getDataRickMorty } from '../services/getDataRickMorty';
import CardCharacter from '../components/cardComponent/card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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
		<Container>
			<Grid container spacing={3}>
				{characters.map((character) => (
					<Grid item xs={6}>
						<CardCharacter key={character.id} character={character} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default Home;
