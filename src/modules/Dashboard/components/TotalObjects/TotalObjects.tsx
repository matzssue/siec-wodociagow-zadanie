import styles from './TotalObjects.module.scss';

type TotalObjectsProps = {
  totalObjects: number;
  totalActive: number;
  totalInactive: number;
};

export const TotalObjects = ({ totalObjects, totalActive, totalInactive }: TotalObjectsProps) => {
  return (
    <div className={styles['total-objects-data']}>
      <span className={styles.all}>Liczba wszystkich objektów: {totalObjects}</span>
      <span className={styles.active}>Aktywnych: {totalActive}</span>
      <span className={styles.inactive}>Nieaktywnych: {totalInactive}</span>
    </div>
  );
};
