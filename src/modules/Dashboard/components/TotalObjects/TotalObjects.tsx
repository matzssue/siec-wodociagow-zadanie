import styles from './TotalObjects.module.scss';

type TotalObjectsProps = {
  totalActive: number;
  totalInactive: number;
  totalObjects: number;
};

export const TotalObjects = ({ totalActive, totalInactive, totalObjects }: TotalObjectsProps) => (
  <div className={styles['total-objects-data']}>
    <span className={styles.all}>Liczba wszystkich objektów: {totalObjects}</span>
    <span className={styles.active}>Aktywnych: {totalActive}</span>
    <span className={styles.inactive}>Nieaktywnych: {totalInactive}</span>
  </div>
);
