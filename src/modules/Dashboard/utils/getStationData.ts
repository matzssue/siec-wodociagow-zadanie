import { ManagedObjects } from '../constants/objects';
import { ManagedObjectData } from '../types';

export const getObjectsData = (objects: ManagedObjects[]) => {
  const objectsData = objects.map((object) => {
    const active = object.status === 'OK' ? 1 : 0;
    const inactive = object.status === 'ERROR' ? 1 : 0;

    return {
      name: object.typeOfObject,
      active,
      inactive,
      total: active + inactive,
    };
  });

  const reducedObjects: ManagedObjectData[] = [];

  objectsData.forEach((object) => {
    const existingObject = reducedObjects.find((el) => el.name === object.name);
    if (existingObject) {
      existingObject.active += object.active;
      existingObject.inactive += object.inactive;
      existingObject.total += object.total;
    } else {
      reducedObjects.push({ ...object });
    }
  });

  const totalActive = reducedObjects.reduce((acc, current) => {
    return acc + current.active;
  }, 0);
  const totalInactive = reducedObjects.reduce((acc, current) => {
    return acc + current.inactive;
  }, 0);

  const totalObjects = objects.length;

  return {
    objectsData: reducedObjects,
    totalObjects,
    totalActive,
    totalInactive,
  };
};
