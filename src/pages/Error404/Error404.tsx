import { NavLink } from 'react-router-dom';

import styles from './Error404.module.scss';

export const Error404 = () => (
  <div className={styles['error404-container']}>
    <h1>404</h1>
    <p>Strona nie znaleziona</p>
    <NavLink to={'/'}>Wróć do strony głównej</NavLink>
  </div>
);
