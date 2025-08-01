import { useNavigate } from 'react-router-dom';

function UserPage() {
	const navigate = useNavigate();
	const goToUser = () => {
		// navigate('/blog');
		navigate(-1);
		const userId = 4;
	};

	return (
		<div>
			<button onClick={goToUser}>Ir a blog</button>
		</div>
	);
}

export default UserPage;
