import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/slices/counterSlices';

function Counter() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.count);
	return (
		<div className='contenedor'>
			<h1>Contador: {count}</h1>
			<button onClick={() => dispatch(increment())}>Incrementar</button>
			<button onClick={() => dispatch(decrement())}>Decrementar</button>
		</div>
	);
}

export default Counter;
