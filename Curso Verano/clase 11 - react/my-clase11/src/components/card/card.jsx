function Card({ name }) {
	return (
		<div className='container mt-5'>
			<div className='card'>
				<div className='card-body'>{name}</div>
			</div>
		</div>
	);
}

export default Card;
