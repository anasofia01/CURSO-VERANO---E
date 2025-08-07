import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataById } from '../services/getDataRickMorty';
import CharacterCardDetail from '../components/characterCard/characterCard';

function CharacterDetails() {
	const { id } = useParams();

	const [character, setCharacter] = useState(null);

	useEffect(() => {
		const getCharacter = async () => {
			console.log('hola');
			const getData = await getDataById(id);
			setCharacter(getData);
		};
		console.log('useEffect');
		getCharacter(id);
	}, [id]);

	return <div>{character && <CharacterCardDetail character={character} />}</div>;
}

export default CharacterDetails;
