import { getMultigraphData } from './getMultigraphData';
import { describe, test, expect } from 'vitest';
import { EdgeData, NodesData } from '../types';

const matrix = [
  [0, 1, 1],
  [-1, 0, -1],
  [1, -1, 0],
];
const nodes = [
  { id: 'oczyszczalnia', label: 'Oczyszczalnia' },
  { id: 'budA', label: 'budA' },
  { id: 'budB', label: 'budB' },
];

describe('getMultigraphData function', () => {
  test('should return an array of edge and nodes data', () => {
    const results = getMultigraphData(matrix, nodes);
    // Expect the results to be array
    expect(Array.isArray(results)).toBe(true);
  });
  test('should correctly map edge and nodes data'),
    () => {
      const results = getMultigraphData(matrix, nodes);

      const expectedEdgeData: EdgeData[] = [
        {
          data: {
            id: 'budB-budA',
            source: 'budB',
            target: 'budA',
            label: 'z budB do budA',
          },
        },
        {
          data: {
            id: 'oczyszczalnia-budB',
            source: 'oczyszczalnia',
            target: 'budB',
            label: 'z Oczyszczalnia do budB ',
          },
        },
        {
          data: {
            id: 'oczyszczalnia-budA',
            source: 'oczyszczalnia',
            target: 'budA',
            label: 'z Oczyszczalnia do budA ',
          },
        },
      ];

      const expectedNodeData: NodesData[] = [
        {
          data: {
            id: 'oczyszczalnia',
            label: 'Oczyszczalnia',
          },
        },
        {
          data: {
            id: 'budA',
            label: 'budA',
          },
        },
        {
          data: {
            id: 'budB',
            label: 'budB',
          },
        },
      ];

      expect(results).toEqual(expect.arrayContaining([...expectedEdgeData, ...expectedNodeData]));
    };
});
