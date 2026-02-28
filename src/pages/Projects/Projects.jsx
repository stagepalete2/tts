import { useState } from 'react'
import styles from './Projects.module.scss'

import Group from '@/components/Group/Group'
import useDocMeta from '@/hooks/useDocMeta'
import List from './components/List/List'
import ProjectCard from './components/Project/ProjectCard'
import QuickActions from './components/QuickActions/QuickActions'
import Search from './components/Search/Search'

const mockProjects = [
	{
		id: 1,
		title: 'Tavern Story',
		preview: 'Inside an ordinary tavern, various adventurers were gathered, filling the room with noise and movement. Some were laughing loudly, others were drinking, and some were deeply focused on their own work. At one of the tables sat a young man, quietly writing notes in a notebook. He was carefully documenting his ideas, formulas, and observations abo...',
		createdAt: 'Created last week',
		owner: 'Owner',
	},
	{
		id: 2,
		title: 'Product Intro',
		preview: 'Welcome to TTS Studio — the most powerful text-to-speech platform available today. Generate realistic voices for your videos, podcasts, and applications in seconds.',
		createdAt: 'Created 3 days ago',
		owner: 'Owner',
	},
	{
		id: 3,
		title: 'News Bulletin',
		preview: 'Внимание! Пожалуйста, прослушайте это важное объявление перед началом работы. Сегодня в студии...',
		createdAt: 'Created yesterday',
		owner: 'Owner',
	},
]

const Projects = () => {
	const [view, setView] = useState('grid')
	const [query, setQuery] = useState('')

	useDocMeta('Projects', '/favicons/projects.png')

	const filtered = mockProjects.filter(p =>
		p.title.toLowerCase().includes(query.toLowerCase()) ||
		p.preview.toLowerCase().includes(query.toLowerCase())
	)

	return (
		<div className={styles.container}>
			<div className={styles.banner}>
				<div className={styles.info_text}>
					<h1>Projects</h1>
					<p>You have <strong>{mockProjects.length} projects</strong> created. Your recent projects</p>
				</div>
				<button className={styles.new_gen_btn}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
						<line x1="12" y1="5" x2="12" y2="19"></line>
						<line x1="5" y1="12" x2="19" y2="12"></line>
					</svg>
					New project
				</button>
			</div>

			<QuickActions />

			<div className={styles.bottom_grid}>
				<Group label='Recent Projects'>
					<Search
						onSearch={setQuery}
						onViewChange={setView}
						view={view}
					/>
					<List view={view}>
						{filtered.length > 0 ? (
							filtered.map(p => <ProjectCard key={p.id} project={p} />)
						) : (
							<p className={styles.empty}>No projects found</p>
						)}
					</List>
				</Group>
			</div>
		</div>
	)
}

export default Projects