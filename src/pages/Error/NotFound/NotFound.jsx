import styles from './NotFound.module.scss'

const NotFound = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.errorCode}>404</h1>
            
            <div className={styles.content}>
                <h2>Oops! The page is lost.</h2>
                <p>
                    It looks like we can't find what you're looking for in TTS Studio.
					The link may be out of date or contain a typo.
                </p>
                
                <a href="/" className={styles.homeButton}>
                    Return to home
                </a>
            </div>
        </main>
    );
};

export default NotFound;