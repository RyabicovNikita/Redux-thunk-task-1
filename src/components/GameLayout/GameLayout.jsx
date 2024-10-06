import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import styles from './GameLayout.module.css';
import { useDispatch } from 'react-redux';

export const GameLayout = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch({
			type: 'RESTART_GAME',
		});
	};
	return (
		<div className={styles['tic-tac-toe']}>
			<button className={styles.btnStartNewGame} onClick={handleClick}>
				Start new game
			</button>
			<Information />
			<Field />
		</div>
	);
};

GameLayout.propTypes = {
	fields: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	startNewGame: PropTypes.func,
};
