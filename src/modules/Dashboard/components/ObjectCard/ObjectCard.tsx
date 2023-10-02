import styles from './ObjectCard.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ManagedObjectData } from '../../types';

export const ObjectCard = ({ name, active, inactive, total }: ManagedObjectData) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        <Bar options={options} data={data} />
      </div>
    </li>
  );
};
