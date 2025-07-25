function CardComponent() {
	return (
		<div className='container mt-5'>
			<div className='card' style={{ width: '18rem' }}>
				<img
					src='https://c.files.bbci.co.uk/E97C/production/_128027795_gettyimages-636379014.jpg'
					className='card-img-top'
					alt='love-img'
				/>
				<div className='card-body'>
					<h5 className='card-title'>Card title</h5>
					<p className='card-text'>
						Some quick example text to build on the card title and make up the bulk of the card’s content.
					</p>
					<a href='#' className='btn btn-primary'>
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

export default CardComponent;
