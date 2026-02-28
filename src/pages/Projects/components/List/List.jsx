import styles from './List.module.scss'

const List = ({ children, view = 'grid' }) => {
	return (
		<div className={`${styles.container} ${view === 'list' ? styles.list_view : styles.grid_view}`}>
			{children}
		</div>
	)
}

export default List