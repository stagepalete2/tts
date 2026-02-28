import { useState } from 'react'
import styles from './Search.module.scss'

const Search = ({ onSearch, onViewChange, view = 'grid' }) => {
	const [query, setQuery] = useState('')
	const [activeFilter, setActiveFilter] = useState('all')

	const filters = [
		{ id: 'all', label: 'All projects' },
		{ id: 'recent', label: 'Recent' },
		{ id: 'mine', label: 'My projects' },
	]

	const handleSearch = (e) => {
		setQuery(e.target.value)
		onSearch?.(e.target.value)
	}

	return (
		<div className={styles.container}>
			<div className={styles.search_row}>
				<div className={styles.search_wrap}>
					<svg className={styles.search_icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<circle cx="11" cy="11" r="8"></circle>
						<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
					</svg>
					<input
						className={styles.input}
						type="text"
						placeholder="Search projects..."
						value={query}
						onChange={handleSearch}
					/>
					{query && (
						<button className={styles.clear_btn} onClick={() => { setQuery(''); onSearch?.('') }}>
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
					)}
				</div>

				<div className={styles.view_toggle}>
					<button
						className={`${styles.view_btn} ${view === 'grid' ? styles.active : ''}`}
						onClick={() => onViewChange?.('grid')}
						title="Grid view"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<rect x="3" y="3" width="7" height="7"></rect>
							<rect x="14" y="3" width="7" height="7"></rect>
							<rect x="3" y="14" width="7" height="7"></rect>
							<rect x="14" y="14" width="7" height="7"></rect>
						</svg>
					</button>
					<button
						className={`${styles.view_btn} ${view === 'list' ? styles.active : ''}`}
						onClick={() => onViewChange?.('list')}
						title="List view"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="8" y1="6" x2="21" y2="6"></line>
							<line x1="8" y1="12" x2="21" y2="12"></line>
							<line x1="8" y1="18" x2="21" y2="18"></line>
							<line x1="3" y1="6" x2="3.01" y2="6"></line>
							<line x1="3" y1="12" x2="3.01" y2="12"></line>
							<line x1="3" y1="18" x2="3.01" y2="18"></line>
						</svg>
					</button>
				</div>
			</div>

			<div className={styles.filters}>
				{filters.map(f => (
					<button
						key={f.id}
						className={`${styles.filter_chip} ${activeFilter === f.id ? styles.active : ''}`}
						onClick={() => setActiveFilter(f.id)}
					>
						{f.id === 'all' && (
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
						)}
						{f.id === 'recent' && (
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
								<polyline points="3 3 3 8 8 8"></polyline>
								<polyline points="12 7 12 12 15 15"></polyline>
							</svg>
						)}
						{f.id === 'mine' && (
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
						)}
						{f.label}
					</button>
				))}
			</div>
		</div>
	)
}

export default Search