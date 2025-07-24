import { useEffect, useState } from 'react';
import Card from '../../components/card/card';
import { getAllEpisodes } from '../../services/rick&mortyApi';

function Home() {
	const [episodes, setEpisodes] = useState([]);

	useEffect(() => {
		const getEpisodes = async () => {
			try {
				const resultsEpisodes = await getAllEpisodes();
				setEpisodes(resultsEpisodes);
			} catch (error) {
				console.error();
			}
		};
		getEpisodes();
	}, []);

	console.log('Hola', episodes);

	return (
		<div className='container'>
			<div className='d-flex justify-content-center flex-wrap gap-4'>
				{episodes.map((episode) => (
					<Card episode={episode} />
				))}
			</div>
		</div>
	);
}

export default Home;
