import { getObjectsData } from './getObjectsData';
import { StationStatus, typeOfObjects } from '../constants/objects';
import { describe, test, expect } from 'vitest';
const objects = [
  {
    name: 'Oczyszczalnia wielka',
    typeOfObject: typeOfObjects.refinery,
    creationDate: new Date('1999-07-11T23:20:21.817Z').toLocaleDateString(),
    status: StationStatus.ok,
  },
  {
    name: 'Źródło zielone',
    typeOfObject: typeOfObjects.source,
    creationDate: new Date('2020-05-12T23:50:21.817Z').toLocaleDateString(),
    status: StationStatus.error,
  },
  {
    name: 'Źródło żółte',
    typeOfObject: typeOfObjects.source,
    creationDate: new Date('2020-05-12T23:50:21.817Z').toLocaleDateString(),
    status: StationStatus.ok,
  },
  {
    name: 'Źródło białe',
    typeOfObject: typeOfObjects.station,
    creationDate: new Date('2020-05-12T23:50:21.817Z').toLocaleDateString(),
    status: StationStatus.ok,
  },
  {
    name: 'Źródło czerwone',
    typeOfObject: typeOfObjects.source,
    creationDate: new Date('2020-05-12T23:50:21.817Z').toLocaleDateString(),
    status: StationStatus.error,
  },
];

describe('getObjectsData function', () => {
  test('should correctly calculate number of objects and return them', () => {
    const results = getObjectsData(objects);
    expect(results.totalActive).toBe(3);
    expect(results.totalInactive).toBe(2);
    expect(results.totalObjects).toBe(objects.length);

    const refinery = results.objectsData.find((obj) => obj.name === typeOfObjects.refinery);
    const source = results.objectsData.find((obj) => obj.name === typeOfObjects.source);
    const station = results.objectsData.find((obj) => obj.name === typeOfObjects.station);

    expect(refinery).toBeDefined();
    expect(source).toBeDefined();
    expect(station).toBeDefined();

    expect(refinery!.active).toBe(1);
    expect(refinery!.inactive).toBe(0);
    expect(refinery!.total).toBe(1);

    expect(source!.active).toBe(1);
    expect(source!.inactive).toBe(2);
    expect(source!.total).toBe(3);

    expect(station!.active).toBe(1);
    expect(station!.inactive).toBe(0);
    expect(station!.total).toBe(1);
  });

  test('should handle empty input', () => {
    const results = getObjectsData([]);

    expect(results.totalActive).toBe(0);
    expect(results.totalInactive).toBe(0);
    expect(results.totalObjects).toBe(0);
  });
});
