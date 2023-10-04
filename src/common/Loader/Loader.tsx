import styles from './Loader.module.scss';
export const Loader = () => {
  return (
    <div className={styles['loading-container']}>
      <span className={styles.loader}></span>
      <span className={styles['loader-text']}>Please wait</span>
    </div>
  );
};
