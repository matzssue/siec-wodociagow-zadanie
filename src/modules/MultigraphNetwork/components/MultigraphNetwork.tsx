import { useEffect, useRef } from 'react';

import { cytoscapeConfig } from '../constants/cytoscapeConfig';
import { matrix } from '../constants/matrix';
import { matrixNodes } from '../constants/nodes';
import { getMultigraphData } from '../utils/getMultigraphData';

import styles from './MultigraphNetwork.module.scss';

export const MultigraphNetwork = () => {
  const elements = getMultigraphData(matrix, matrixNodes);

  const cytoscapeContainerRef = useRef(null);

  useEffect(() => {
    cytoscapeConfig(elements, cytoscapeContainerRef);
  }, [elements]);

  return <div className={styles['multigraph-container']} ref={cytoscapeContainerRef} />;
};
