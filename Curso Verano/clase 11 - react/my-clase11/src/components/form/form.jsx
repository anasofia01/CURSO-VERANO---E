import { useState } from 'react';

function Form({ onSearch }) {
	const [name, setName] = useState('');

	const handlerSubmit = (event) => {
		event.preventDefault();

		onSearch(name);
	};

	return (
		<div className='container'>
			<form onSubmit={handlerSubmit}>
				<div className='mb-3'>
					<label className='form-label'>Ingresa el nombre que deseas buscar:</label>
					<input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Form;
