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
			<div className='row'>
				{episodes.map((episode) => (
					<div className='col-3'>
						<Card episode={episode} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
