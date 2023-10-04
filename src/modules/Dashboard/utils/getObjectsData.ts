import { ManagedObjects, StationStatus } from '../constants/objects';
import { ManagedObjectData } from '../types';

export const getObjectsData = (objects: ManagedObjects[]) => {
  const { reducedObjects, totalActive, totalInactive } = objects.reduce(
    (
      acc: { reducedObjects: ManagedObjectData[]; totalActive: number; totalInactive: number },
      object: ManagedObjects,
    ) => {
      const active = object.status === StationStatus.ok ? 1 : 0;

      const inactive = object.status === StationStatus.error ? 1 : 0;

      const existingObject = acc.reducedObjects.find((el) => el.name === object.typeOfObject);
      if (existingObject) {
        existingObject.active += active;
        existingObject.inactive += inactive;
        existingObject.total += active + inactive;
      } else {
        acc.reducedObjects.push({
          name: object.typeOfObject,
          active,
          inactive,
          total: active + inactive,
        });
      }

      acc.totalActive += active;
      acc.totalInactive += inactive;

      return acc;
    },
    { reducedObjects: [], totalActive: 0, totalInactive: 0 },
  );

  const totalObjects = objects.length;

  return {
    objectsData: reducedObjects,
    totalObjects,
    totalActive,
    totalInactive,
  };
};
