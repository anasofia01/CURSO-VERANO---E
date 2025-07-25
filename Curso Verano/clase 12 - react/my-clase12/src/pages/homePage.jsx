import CardComponent from '../components/cardComponent/cardComponent';
import ErrorComponent from '../components/errorComponent/errorComponent';

function HomePage({ error }) {
	if (error) {
		return <ErrorComponent />;
	} else {
		return <CardComponent />;
	}

	// return (
	// 	<div className='container mt-5'>
	// 		{error ? <ErrorComponent /> : <CardComponent />}
	// 		<p></p>
	// 	</div>
	// );
}

export default HomePage;
