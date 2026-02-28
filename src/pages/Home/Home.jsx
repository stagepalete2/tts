
import styles from './Home.module.scss'

import FavoriteVoices from './components/FavoriteVoices/FavoriteVoices'
import Group from './components/Group/Group'
import History from './components/History/History'
import CreateProject from './components/Project/Create/CreateProject'
import Project from './components/Project/Project'
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
			<Group label='Workspace'>
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<CreateProject />
			</Group>

			<div className={styles.content}>
				<Group label='History'>
					{mockHistory.map((item, index) => (
						<History item={item} key={item.id}/>
					))}
				</Group>
				<Group label='Statistics'>
					<UsageStat />
					<FavoriteVoices />
				</Group>
			</div>
		</div>
	)
}

export default Home