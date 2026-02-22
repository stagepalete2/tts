import styles from './Project.module.scss'

const Project = () => {
	return (
		<div className={styles.container}>
			<div className={styles.thumbnail}>
				<img src="/icons/microphone.png" alt="" className={styles.icon}/>
			</div>
			<p className={styles.label}>Untitled Project</p>
		</div>
	)
}

export default Project