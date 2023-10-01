import styles from './MultigraphNetwork.module.scss';
import cytoscape from 'cytoscape';
import { useEffect, useRef } from 'react';
import { getMultigraphData } from '../utils/getMultigraphData';
import { matrixNodes } from '../constants/nodes';
import { matrix } from '../constants/matrix';

export const MultigraphNetwork = () => {
  const elements = getMultigraphData(matrix, matrixNodes);

  const cytoscapeContainerRef = useRef(null);

  useEffect(() => {
    const cy = cytoscape({
      container: cytoscapeContainerRef.current,
      elements,
      minZoom: 0.5,
      maxZoom: 5,
      layout: {
        name: 'breadthfirst',
        directed: true,
      },
      style: [
        {
          selector: 'node',
          style: {
            height: 80,
            width: 80,
            shape: 'ellipse',
            'background-fit': 'cover',
            'taxi-direction': 'auto',
            content: 'data(label)',
            'border-width': '10px',
            'border-color': 'grey',
            'border-opacity': 0.7,
            'text-margin-y': -5,
            'font-size': '25px',
            color: 'white',
            'font-weight': 'bolder',
          },
        },
        {
          selector: 'edge',
          style: {
            'taxi-direction': 'downward',
            'text-margin-y': -10,
            'curve-style': 'bezier',
            content: 'data(label)',
            'line-color': 'gray',
            'target-arrow-shape': 'triangle',
            'target-arrow-color': 'white',
            'font-size': '15px',
            color: 'white',
          },
        },
        {
          selector: '#oczyszczalnia-wielka',
          style: {
            'background-image': 'https://i.ibb.co/tq2ZMsj/duza-oczyszczalnia.jpg',
          },
        },
        {
          selector: '#zrodlo-czerwone',
          style: {
            backgroundColor: 'red',
          },
        },
        {
          selector: '#zrodlo-zielone',
          style: {
            backgroundColor: 'green',
          },
        },
        {
          selector: '#stacja-przesylowa',
          style: {
            'background-image': 'https://i.ibb.co/BTr0HMz/stacja.jpg',
          },
        },
        {
          selector: '#oczyszczalnia-mala',
          style: {
            'background-image': 'https://i.ibb.co/SJJGZRs/mala-oczyszczalniajpg.jpg',
          },
        },
      ],
    });

    cy.on('click', 'node', function (e) {
      console.log(e.target.id());
    });

    return () => {
      cy.destroy();
    };
  }, [elements]);

  return <div className={styles['multigraph-container']} ref={cytoscapeContainerRef}></div>;
};
