function Card() {
	return (
		<div className='container'>
			<div className='card mt-5' style={{ height: 'auto', width: '25%' }}>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/0/07/French_Bulldog.JPG'
					className='card-img-top'
					alt='frenchie'
				/>
				<div className='card-body'>
					<h5 className='card-title'>Nombre: Amapola</h5>
					<p className='card-text'>Amapola es una peludita de 3 años de la raza frenchie y sufrió maltrato animal.</p>
					<a href='#' className='btn btn-primary'>
						Dale money a Amapola
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
