import { useDispatch, useSelector } from 'react-redux';
import { WIN_PATTERNS } from '../../constants';
import { ACTIONS } from '../../services/actions';
import { FieldLayout } from '../FieldLayout/FieldLayout';
import { selectCurrentPlayer, selectFields, selectIsGameEnded } from '../../services/selectors';

export function Field() {
	const dispatch = useDispatch();
	const currentPlayer = useSelector(selectCurrentPlayer);
	const fields = useSelector(selectFields);
	const isGameEnded = useSelector(selectIsGameEnded);
	const checkWinner = (newFields) => {
		let winnerMsg;
		if (WIN_PATTERNS.some((item) => item.every((i) => newFields[i] === 'X'))) {
			winnerMsg = 'Player X won!';
		} else if (WIN_PATTERNS.some((item) => item.every((i) => newFields[i] === '0'))) {
			winnerMsg = 'Player Y won!';
		} else if (newFields.every((item) => item !== '')) {
			winnerMsg = 'Game over. Draw!';
		}
		return winnerMsg;
	};
	function handleClick(index) {
		const newFields = JSON.parse(JSON.stringify(fields));
		if (newFields[index] === '' && !isGameEnded) {
			console.log(isGameEnded);
			newFields[index] = currentPlayer;
			dispatch({
				type: ACTIONS.UPDATE_FIELDS,
				payload: { fields: newFields },
			});
			dispatch({
				type: ACTIONS.CHANGE_CURRENT_PLAYER,
				payload: currentPlayer === 'X' ? '0' : 'X',
			});
			const winner = checkWinner(newFields);
			if (winner) dispatch({ type: ACTIONS.SHOW_WINNER, payload: winner });
		}
	}
	return <FieldLayout handleClick={handleClick} />;
}
