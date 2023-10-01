export type ManagedObjects = {
  name: string;
  typeOfObject: string;
  creationDate: string;
  status: string;
};

const typeOfObjects = {
  refinery: 'OCZYSZCZALNIA',
  source: 'ŹRÓDŁO',
  station: 'STACJA',
};

export const objects = [
  {
    name: 'Oczyszczalnia wielka',
    typeOfObject: typeOfObjects.refinery,
    creationDate: new Date('1999-07-11T23:20:21.817Z').toLocaleDateString(),
    status: 'OK',
  },
  {
    name: 'Źródło czerwone',
    typeOfObject: typeOfObjects.source,
    creationDate: new Date('2020-05-12T23:50:21.817Z').toLocaleDateString(),
    status: 'ERROR',
  },
  {
    name: 'Stacja przesyłowa',
    typeOfObject: typeOfObjects.station,
    creationDate: new Date('2017-02-14T23:53:21.817Z').toLocaleDateString(),
    status: 'OK',
  },
  {
    name: 'Oczyszczalnia mała',
    typeOfObject: typeOfObjects.refinery,
    creationDate: new Date('2002-12-12T23:50:21.817Z').toLocaleDateString(),
    status: 'OK',
  },
  {
    name: 'Żródło zielone',
    typeOfObject: typeOfObjects.source,
    creationDate: new Date('2021-05-22T23:50:21.817Z').toLocaleDateString(),
    status: 'ERROR',
  },
];
