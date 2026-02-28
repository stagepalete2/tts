import styles from './ProjectCard.module.scss'

const ProjectCard = ({ project }) => {
	const {
		title = 'Untitled Project',
		preview = '',
		createdAt = 'Created last week',
	} = project || {}

	return (
		<div className={styles.card}>
			<div className={styles.thumbnail}>
				{preview ? (
					<p className={styles.preview_text}>{preview}</p>
				) : (
					<div className={styles.empty_preview}>
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
							<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
							<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
							<line x1="12" y1="19" x2="12" y2="23"></line>
							<line x1="8" y1="23" x2="16" y2="23"></line>
						</svg>
						<span>No preview</span>
					</div>
				)}
			</div>
			<div className={styles.footer}>
				<p className={styles.meta}>
					<span className={styles.title}>{title}</span>
					<span className={styles.dot}>·</span>
					<span className={styles.date}>{createdAt}</span>
				</p>
			</div>
		</div>
	)
}

export default ProjectCard