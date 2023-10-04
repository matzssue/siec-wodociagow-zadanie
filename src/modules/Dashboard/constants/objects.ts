export const typeOfObjects = {
  refinery: 'OCZYSZCZALNIA',
  source: 'ŹRÓDŁO',
  station: 'STACJA',
} as const;

export enum StationStatus {
  ok = 'OK',
  error = 'ERROR',
}

export type ManagedObjects = {
  creationDate: string;
  name: string;
  status: StationStatus.ok | StationStatus.error;
  typeOfObject: (typeof typeOfObjects)[keyof typeof typeOfObjects];
};

export const objects: ManagedObjects[] = [
  {
    name: 'Oczyszczalnia wielka',
    typeOfObject: typeOfObjects.refinery,
    creationDate: new Date('1999-07-11T23:20:21.817Z').toLocaleDateString(),
    status: StationStatus.ok,
  },
  {
    name: 'Źródło czerwone',
    typeOfObject: typeOfObjects.source,
    creationDate: new Date('2020-05-12T23:50:21.817Z').toLocaleDateString(),
    status: StationStatus.error,
  },
  {
    name: 'Stacja przesyłowa',
    typeOfObject: typeOfObjects.station,
    creationDate: new Date('2017-02-14T23:53:21.817Z').toLocaleDateString(),
    status: StationStatus.ok,
  },
  {
    name: 'Oczyszczalnia mała',
    typeOfObject: typeOfObjects.refinery,
    creationDate: new Date('2002-12-12T23:50:21.817Z').toLocaleDateString(),
    status: StationStatus.ok,
  },
  {
    name: 'Żródło zielone',
    typeOfObject: typeOfObjects.source,
    creationDate: new Date('2021-05-22T23:50:21.817Z').toLocaleDateString(),
    status: StationStatus.error,
  },
];
