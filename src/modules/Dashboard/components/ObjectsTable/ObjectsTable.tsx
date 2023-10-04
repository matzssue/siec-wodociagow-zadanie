import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { MRT_Localization_PL } from 'material-react-table/locales/pl';
import { ManagedObjects, objects } from 'src/modules/Dashboard/constants/objects';

import styles from './ObjectTable.module.scss';

export const ObjectsTable = () => {
  const columns = useMemo<MRT_ColumnDef<ManagedObjects>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nazwa obiektu',
        size: 200,
      },
      {
        accessorKey: 'typeOfObject',
        header: 'Typ obiektu',
        size: 200,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 100,
      },
      {
        accessorKey: 'creationDate',
        header: 'Data stworzenia',
        size: 150,
      },
    ],
    [],
  );

  return (
    <div className={styles['table-container']}>
      <MaterialReactTable
        enableColumnActions
        columns={columns}
        data={objects}
        enableColumnDragging={true}
        localization={MRT_Localization_PL}
      />
    </div>
  );
};
