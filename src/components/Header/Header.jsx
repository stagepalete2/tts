import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.container}>
            <nav className={styles.navigation}>
				
				<div className={styles.link_group}>
					<button className={styles.link}>
						<img src="/icons/menu.png" alt="" className={styles.icon} />
					</button>

					<button className={styles.link}>
						TTS Studio
					</button>
				</div>

				<div className={styles.link_group}>
					<button className={[styles.link, styles.button].join(' ')}>
						History
					</button>
					<button className={[styles.link, styles.button].join(' ')}>
						Prompt
					</button>
				</div>
				
            </nav>
        </header>
    );
};

export default Header;