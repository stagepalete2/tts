import styles from './UsageStat.module.scss'

const UsageStat = () => {
    const stats = {
        totalGenerated: 125400,
        requestsCount: 412,
        lastSession: "2540 symbols."
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>API Stats</h3>
                <div className={styles.indicator} title="API Active"></div>
            </div>

            <div className={styles.statsList}>
                <div className={styles.statItem}>
                    <p className={styles.label}>Total generated</p>
                    <p className={styles.value}>{stats.totalGenerated.toLocaleString()} <span>symbols</span></p>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.footerRow}>
                    <div className={styles.miniStat}>
                        <p className={styles.label}>Requests</p>
                        <p className={styles.miniValue}>{stats.requestsCount}</p>
                    </div>
                    <div className={styles.miniStat}>
                        <p className={styles.label}>Last Prompt</p>
                        <p className={styles.miniValue}>{stats.lastSession}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsageStat;