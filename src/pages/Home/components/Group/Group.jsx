
import styles from './Group.module.scss'

const Group = ({children, label}) => {
	return (
		<div className={styles.container}>
			<p className={styles.group_name}>
				{label}
			</p>
			<div className={[styles.content]}>
				{children}
			</div>
		</div>
	)
}

export default Group