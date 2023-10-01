import styles from './ObjectTable.module.scss';
import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { createTheme, ThemeProvider } from '@mui/material';
import { MRT_Localization_PL } from 'material-react-table/locales/pl';
import { ManagedObjects, objects } from 'src/modules/Dashboard/constants/objects';

export const ObjectTable = () => {
  const columns = useMemo<MRT_ColumnDef<ManagedObjects>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nazwa objektu',
        size: 200,
      },
      {
        accessorKey: 'typeOfObject',
        header: 'Typ objektu',
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

  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#f3f3f3',
          },
          secondary: {
            main: '#f3f3f3',
          },
          info: {
            main: '#D12727',
          },
          background: {
            default: '#1d1d1d',
          },
        },
        typography: {
          button: {
            textTransform: 'none',
            fontSize: '1.2rem',
          },
        },
        components: {
          MuiTableHead: {
            styleOverrides: {
              root: {
                backgroundColor: 'yellow',
              },
            },
          },
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                fontSize: '1.1rem',
              },
            },
          },
          MuiSwitch: {
            styleOverrides: {
              thumb: {
                color: '#137813',
              },
            },
          },
        },
      }),
    [],
  );

  return (
    <div className={styles['table-container']}>
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          enableColumnActions
          enableColumnDragging={true}
          localization={MRT_Localization_PL}
          columns={columns}
          data={objects}
        />
      </ThemeProvider>
    </div>
  );
};
