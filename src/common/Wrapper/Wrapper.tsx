import { ReactNode } from 'react';

import styles from './Wrapper.module.scss';
export const Wrapper = ({ children }: { children: ReactNode }) => (
  <main className={styles.wrapper}>{children}</main>
);
