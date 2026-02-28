import styles from './FavoriteVoices.module.scss'

const FavoriteVoices = () => {
    const favorites = [
        { id: 1, name: 'Gemini Nova', lang: 'RU' },
        { id: 2, name: 'Cloud Journey', lang: 'EN' },
        { id: 3, name: 'Gemini Echo', lang: 'RU' },
    ];

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>Favourite voice</h3>
                <button className={styles.editBtn}>Edit</button>
            </div>

            <div className={styles.list}>
                {favorites.map(voice => (
                    <div key={voice.id} className={styles.voiceItem}>
                        <div className={styles.avatar}>
                            {voice.name.charAt(0)}
                        </div>
                        <div className={styles.info}>
                            <p className={styles.name}>{voice.name}</p>
                            <p className={styles.meta}>{voice.lang}</p>
                        </div>
                        <button className={styles.useBtn} title="Использовать">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            <button className={styles.allVoicesBtn}>
                Все голоса
            </button>
        </div>
    );
};

export default FavoriteVoices;