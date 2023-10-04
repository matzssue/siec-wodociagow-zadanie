import { Bar } from 'react-chartjs-2';

import { objects } from '../../constants/objects';
import { getObjectsData } from '../../utils/getObjectsData';
import { ObjectCard } from '../ObjectCard/ObjectCard';
import { TotalObjects } from '../TotalObjects/TotalObjects';

import styles from './DashboardMenu.module.scss';

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

export const DashboardMenu = () => {
  const { objectsData, totalActive, totalInactive, totalObjects } = getObjectsData(objects);

  const data = {
    labels: ['Wszystkie obiekty'],
    datasets: [
      {
        backgroundColor: '#137813',
        data: [totalActive],
        label: 'Aktywne',
      },
      {
        backgroundColor: '#de1b1b',
        data: [totalInactive],
        label: 'Nieaktywne',
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
          <Bar data={data} options={options} />
        </div>
      </div>

      <ul className={styles['objects-list']}>
        {objectsData.map((obj, i) => (
          <ObjectCard key={obj.name + i} {...obj} />
        ))}
      </ul>
    </div>
  );
};
