import styles from './DashboardMenu.module.scss';
import { getObjectsData } from '../../utils/getStationData';
import { ObjectCard } from '../ObjectCard/ObjectCard';
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
import { TotalObjects } from '../TotalObjects/TotalObjects';
import { objects } from '../../constants/objects';

export const DashboardMenu = () => {
  const { objectsData, totalObjects, totalActive, totalInactive } = getObjectsData(objects);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Liczba obiektów',
      },
    },
  };

  const data = {
    labels: ['Wszystkie obiekty'],
    datasets: [
      {
        label: 'Aktywne',
        data: [totalActive],
        backgroundColor: '#137813',
      },
      {
        label: 'Nieaktywne',
        data: [totalInactive],
        backgroundColor: '#de1b1b',
      },
    ],
  };

  return (
    <div className={styles.menu}>
      <h1>Panel</h1>
      <div className={styles['total-objects']}>
        <TotalObjects
          totalActive={totalActive}
          totalInactive={totalInactive}
          totalObjects={totalObjects}
        />
        <div className={styles.bar}>
          <Bar options={options} data={data} />
        </div>
      </div>

      <ul className={styles['objects-list']}>
        {objectsData.map((obj, i) => {
          return <ObjectCard key={i} {...obj} />;
        })}
      </ul>
    </div>
  );
};
