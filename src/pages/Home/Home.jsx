import styles from './Home.module.scss'

import FavoriteVoices from './components/FavoriteVoices/FavoriteVoices'
import Group from './components/Group/Group'
import History from './components/History/History'
import CreateProject from './components/Project/Create/CreateProject'
import Project from './components/Project/Project'
import QuickActions from './components/QuickActions/QuickActions.jsx'
import UsageStat from './components/UsageStat/UsageStat'

const mockHistory = [
	{
		id: 1,
		prompt: "Привет! Это тестовая генерация голоса для проверки качества звучания TTS.",
		voice: "Gemini Nova",
		date: "22 Фев 2026, 14:30",
		duration: "0:04"
	},
	{
		id: 2,
		prompt: "The quick brown fox jumps over the lazy dog. A wonderful serenity has taken possession of my entire soul.",
		voice: "Cloud Journey",
		date: "21 Фев 2026, 10:15",
		duration: "0:08"
	},
	{
		id: 3,
		prompt: "Внимание! Пожалуйста, прослушайте это важное объявление перед началом работы.",
		voice: "Gemini Echo",
		date: "20 Фев 2026, 18:45",
		duration: "0:06"
	}
];

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.welcome_banner}>
				<div className={styles.welcome_text}>
					<h1>Good morning 👋</h1>
					<p>You have <strong>412 API requests</strong> used this month. Your next reset is in 6 days.</p>
				</div>
				<button className={styles.new_gen_btn}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
						<line x1="12" y1="5" x2="12" y2="19"></line>
						<line x1="5" y1="12" x2="19" y2="12"></line>
					</svg>
					New Generation
				</button>
			</div>

			<QuickActions />

			<Group label='Workspace'>
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<CreateProject />
			</Group>

			<div className={styles.bottom_grid}>
				<div className={styles.history_col}>
					<Group label='Recent History'>
						{mockHistory.map((item) => (
							<History item={item} key={item.id}/>
						))}
					</Group>
				</div>
				<div className={styles.stats_col}>
					<Group label='Statistics'>
						<UsageStat />
						<FavoriteVoices />
					</Group>
				</div>
			</div>
		</div>
	)
}

export default Home