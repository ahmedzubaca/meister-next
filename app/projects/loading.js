import styles from './loading.module.css';

export default function ProjectsLoadingPage() {
  const loadingStyle = {
    width: '100%', 
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right,rgba(110, 110, 110, 0.7) 36%, rgba(101, 70, 70, 0.7) 36%, rgba(101, 70, 70, 0.7) 64%, rgba(110, 110, 110, 0.7) 64%)'    
    
  }
  return(
    <p className={styles.loading}> Loading projects...</p>
  )
}