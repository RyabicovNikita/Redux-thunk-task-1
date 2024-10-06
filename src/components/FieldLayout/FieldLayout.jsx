import { useSelector } from 'react-redux';
import styles from './FieldLayout.module.css';
import { selectFields } from '../../services/selectors';

export function FieldLayout({ handleClick }) {
	const fields = useSelector(selectFields);
	return (
		<div className={styles['fields-container']}>
			{fields?.length &&
				fields.map((item, index) => (
					<button
						key={index}
						className={`${styles['fields-container__field']} col-4`}
						onClick={() => handleClick(index)}
					>
						{item}
					</button>
				))}
		</div>
	);
}
