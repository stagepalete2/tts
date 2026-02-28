import styles from './QuickActions.module.scss'

const actions = [
	{
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
				<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
				<line x1="12" y1="19" x2="12" y2="23"></line>
				<line x1="8" y1="23" x2="16" y2="23"></line>
			</svg>
		),
		label: 'TTS Gemini',
		desc: 'Google AI voices',
		color: '#4285F4',
		bg: '#EEF3FF',
		route: '/tts-gemini'
	},
	{
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
				<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
				<line x1="12" y1="19" x2="12" y2="23"></line>
				<line x1="8" y1="23" x2="16" y2="23"></line>
			</svg>
		),
		label: 'TTS Cloud',
		desc: 'Cloud-based synthesis',
		color: '#0EA5E9',
		bg: '#E0F6FF',
		route: '/tts-cloud'
	},
	{
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="2" y="9" width="2" height="6" rx="1" fill="currentColor" />
				<rect x="5" y="5" width="2" height="14" rx="1" fill="currentColor" />
				<rect x="8" y="7" width="2" height="10" rx="1" fill="currentColor" />
				<rect x="11" y="2" width="2" height="20" rx="1" fill="currentColor" />
				<rect x="14" y="7" width="2" height="10" rx="1" fill="currentColor" />
				<rect x="17" y="5" width="2" height="14" rx="1" fill="currentColor" />
				<rect x="20" y="9" width="2" height="6" rx="1" fill="currentColor" />
			</svg>
		),
		label: 'Browse Voices',
		desc: 'All available voices',
		color: '#8B5CF6',
		bg: '#F3EEFF',
		route: '/tts-voices'
	},
	{
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
				<polyline points="3 3 3 8 8 8"></polyline>
				<polyline points="12 7 12 12 15 15"></polyline>
			</svg>
		),
		label: 'History',
		desc: 'All past generations',
		color: '#10B981',
		bg: '#EAFAF4',
		route: '/tts-history'
	},
]

const QuickActions = () => {
	return (
		<div className={styles.container}>
			{actions.map((action, i) => (
				<div key={i} className={styles.card} style={{'--accent': action.color, '--bg': action.bg}}>
					<div className={styles.icon_wrap}>
						{action.icon}
					</div>
					<div className={styles.text}>
						<span className={styles.label}>{action.label}</span>
						<span className={styles.desc}>{action.desc}</span>
					</div>
					<div className={styles.arrow}>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</div>
				</div>
			))}
		</div>
	)
}

export default QuickActions