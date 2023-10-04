import { Bar } from 'react-chartjs-2';

import { ManagedObjectData } from '../../types';

import styles from './ObjectCard.module.scss';

export const ObjectCard = ({ active, inactive, name, total }: ManagedObjectData) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Obiekty "${name}"`,
      },
    },
  };

  const data = {
    labels: [name],
    datasets: [
      {
        label: 'Aktywne',
        data: [active],
        backgroundColor: '#137813',
      },
      {
        label: 'Nieaktywne',
        data: [inactive],
        backgroundColor: '#de1b1b',
      },
    ],
  };

  return (
    <li className={styles['object-card']}>
      <p className={styles.title}>{name}</p>
      <div className={styles.count}>
        <span>Łącznie: {total}</span>
        <span className={styles.active}>Aktywne: {active}</span>
        <span className={styles.inactive}>Nieaktywne: {inactive}</span>
      </div>
      <div>
        <Bar data={data} options={options} />
      </div>
    </li>
  );
};
