import { useSelector } from 'react-redux';
import styles from './Information.module.css';
import { selectCurrentPlayer, selectIsGameEnded } from '../../services/selectors';

export function Information() {
	return <InformationLayout />;
}

function InformationLayout() {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const playerInfo = <span className={styles['info__player']}>{currentPlayer}</span>;
	return (
		<>
			{!isGameEnded && <p className={styles['info']}>Player: {playerInfo}</p>}
			{isGameEnded && playerInfo}
		</>
	);
}
