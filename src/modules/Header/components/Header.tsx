import { NavLink } from 'react-router-dom';

import { navigationLinks } from '../constants/navigationLinks';

import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        {navigationLinks.map(({ link, linkName }) => (
          <li key={linkName}>
            <NavLink to={`${link}`} className={({ isActive }) => (isActive ? styles.active : '')}>
              {linkName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
