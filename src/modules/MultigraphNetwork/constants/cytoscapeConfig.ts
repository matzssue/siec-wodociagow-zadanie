import { MutableRefObject } from 'react';
import cytoscape from 'cytoscape';

import { EdgeData, NodesData } from '../types';

export const cytoscapeConfig = (
  elements: (EdgeData | NodesData)[],
  cytoscapeContainerRef: MutableRefObject<null>,
) => {
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
          'font-size': '25px',
          'text-margin-y': -5,
          'border-width': '10px',
          'border-color': 'grey',
          'border-opacity': 0.7,
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
          'font-size': '15px',
          'line-color': 'gray',
          'target-arrow-shape': 'triangle',
          'target-arrow-color': 'white',
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
};
