import styles from './CreateProject.module.scss'

const CreateProject = () => {
	return (
		<div className={styles.container}>
			<div className={styles.thumbnail}>
				<img src="/icons/add.png" alt="" className={styles.icon}/>
			</div>
			<p className={styles.label}>New Project...</p>
		</div>
	)
}

export default CreateProject