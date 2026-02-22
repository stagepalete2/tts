import styles from './History.module.scss'


const HistoryCard = ({item}) => {

	return (
		<div className={styles.card}>
			
			<div className={styles.card_header}>
				<span className={styles.voice_badge}>{item.voice}</span>
				<span className={styles.date}>{item.date}</span>
			</div>

			<div className={styles.prompt_wrapper}>
				<p className={styles.prompt}>{item.prompt}</p>
			</div>

			<div className={styles.card_footer}>
				<button className={styles.play_btn}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<polygon points="5 3 19 12 5 21 5 3"></polygon>
					</svg>
					{item.duration}
				</button>
				
				<div className={styles.actions}>
					<button className={styles.icon_btn} title="Скачать">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
							<polyline points="7 10 12 15 17 10"></polyline>
							<line x1="12" y1="15" x2="12" y2="3"></line>
						</svg>
					</button>
				</div>
			</div>

		</div>
	)
};

export default HistoryCard;