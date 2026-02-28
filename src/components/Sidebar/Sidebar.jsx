import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;

    const handleClick = (route) => {
        navigate(route);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside className={`${styles.container} ${isOpen ? styles.open : styles.closed}`}>
            <div className={`${styles.link} ${styles.primary}`} onClick={toggleSidebar}>
                    {isOpen ? (
						<div className={styles.link_content}>
							<span>TTS Studio</span>
						</div>
					) : (
						<div className={styles.link_content}>
							<span>TTS</span>
						</div>
					)}
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg" 
							width="20" 
							height="20" 
							viewBox="0 0 20 20" 
							fill="none" 
							stroke="currentColor" 
							strokeWidth="2" 
							strokeLinecap="round" 
							strokeLinejoin="round"
						>
							<polyline points="15 18 9 12 15 6"></polyline>
						</svg>
					) : (
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							width="24" 
							height="24" 
							viewBox="0 0 24 24" 
							fill="none" 
							stroke="currentColor" 
							strokeWidth="2" 
							strokeLinecap="round" 
							strokeLinejoin="round"
						>
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					)}
            </div>

            <div className={styles.link_group}>
                <div className={styles.link} onClick={() => {handleClick('/')}}>
                    <div className={`${styles.link_content} ${currentPath === '/' && styles.active}`}>
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span className={styles.text}>Home</span>
                    </div>
                </div>

                <div className={styles.link} onClick={() => {handleClick('/projects')}}>
                    <div className={`${styles.link_content} ${currentPath === '/projects' && styles.active}`}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className={styles.text}>Projects</span>
                    </div>
                </div>
            </div>

            <div className={styles.link_group}>
                <div className={styles.group_name}>
                    <p className={styles.text}>Playground</p>
                </div>
                
                <div className={styles.link} onClick={() => {handleClick('/tts-gemini')}}>
                    <div className={`${styles.link_content} ${currentPath === '/tts-gemini' && styles.active}`}>
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                        <span className={styles.text}>TTS Gemini</span>
                    </div>
                </div>

                <div className={styles.link} onClick={() => {handleClick('/tts-cloud')}}>
                    <div className={`${styles.link_content} ${currentPath === '/tts-cloud' && styles.active}`}>
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                        <span className={styles.text}>TTS Cloud</span>
                    </div>
                </div>

                <div className={styles.link} onClick={() => {handleClick('/tts-history')}}>
                    <div className={`${styles.link_content} ${currentPath === '/tts-history' && styles.active}`}>
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                            <polyline points="3 3 3 8 8 8"></polyline>
                            <polyline points="12 7 12 12 15 15"></polyline>
                        </svg>
                        <span className={styles.text}>History</span>
                    </div>
                </div>
            </div>


            <div className={styles.link_group}>
                <div className={styles.group_name}>
                    <p className={styles.text}>Additional</p>
                </div>
                
                <div className={styles.link} onClick={() => {handleClick('/tts-voices')}}>
                    <div className={`${styles.link_content} ${currentPath === '/tts-voices' && styles.active}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="9" width="2" height="6" rx="1" fill="currentColor" />
                            <rect x="5" y="5" width="2" height="14" rx="1" fill="currentColor" />
                            <rect x="8" y="7" width="2" height="10" rx="1" fill="currentColor" />
                            <rect x="11" y="2" width="2" height="20" rx="1" fill="currentColor" />
                            <rect x="14" y="7" width="2" height="10" rx="1" fill="currentColor" />
                            <rect x="17" y="5" width="2" height="14" rx="1" fill="currentColor" />
                            <rect x="20" y="9" width="2" height="6" rx="1" fill="currentColor" />
                        </svg>
                        <span className={styles.text}>Voices</span>
                    </div>
                </div>
            </div>


            <div className={styles.link_group}>
                <div className={styles.group_name}>
                    <p className={styles.text}>Personal</p>
                </div>
                
                <div className={styles.link} onClick={() => {handleClick('/settings')}}>
                    <div className={`${styles.link_content} ${currentPath === '/settings' && styles.active}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        <span className={styles.text}>Settings</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;