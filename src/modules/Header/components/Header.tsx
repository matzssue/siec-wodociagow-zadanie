import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { navigationLinks } from '../constants/navigationLinks';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {navigationLinks.map(({ link, linkName }) => {
            return (
              <li key={linkName}>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : '')}
                  to={`${link}`}
                >
                  {linkName}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
