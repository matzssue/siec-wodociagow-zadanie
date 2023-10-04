import { ReactNode } from 'react';

import styles from './Box.module.scss';

export const Box = ({ children }: { children: ReactNode }) => (
  <div className={styles.box}>{children}</div>
);
