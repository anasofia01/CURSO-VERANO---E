function Card({ episode }) {
	return (
		<div className='container mt-5'>
			<div className='card mb-5' style={{ width: '18rem' }}>
				<div className='card-body'>
					<h5 className='card-title'>{episode.name}</h5>
					<h6 className='card-subtitle mb-2 text-body-secondary'>{episode.air_date}</h6>
					<p className='card-text'>Número de Episodio: {episode.episode}</p>
					<p className='card-text'>Fecha de creación: {episode.created}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
