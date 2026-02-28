import { useState } from 'react'
import styles from './UsageStat.module.scss'

const weekData = [
	{ day: 'Mo', val: 35 },
	{ day: 'Tu', val: 72 },
	{ day: 'We', val: 48 },
	{ day: 'Th', val: 91 },
	{ day: 'Fr', val: 60 },
	{ day: 'Sa', val: 24 },
	{ day: 'Su', val: 55 },
]
const maxVal = Math.max(...weekData.map(d => d.val))

const UsageStat = () => {
	const [hovered, setHovered] = useState(null)

    const stats = {
        totalGenerated: 125400,
        requestsCount: 412,
        lastSession: "2,540 symbols"
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div>
                    <h3>API Usage</h3>
                    <p className={styles.subtitle}>This month</p>
                </div>
                <div className={styles.indicator} title="API Active"></div>
            </div>

            <div className={styles.statItem}>
                <p className={styles.value}>{stats.totalGenerated.toLocaleString()} <span>symbols</span></p>
                <div className={styles.progress_bar}>
                    <div className={styles.progress_fill} style={{width: '62%'}}></div>
                </div>
                <p className={styles.progress_label}>62% of monthly limit</p>
            </div>

            <div className={styles.chart}>
                {weekData.map((d, i) => (
                    <div
                        key={i}
                        className={styles.bar_col}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {hovered === i && (
                            <span className={styles.tooltip}>{d.val}</span>
                        )}
                        <div
                            className={`${styles.bar} ${hovered === i ? styles.bar_active : ''}`}
                            style={{height: `${(d.val / maxVal) * 100}%`}}
                        ></div>
                        <span className={styles.day}>{d.day}</span>
                    </div>
                ))}
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
    );
};

export default UsageStat;