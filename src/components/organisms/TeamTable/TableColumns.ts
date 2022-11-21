import { GridColumns } from '@mui/x-data-grid'

export const TableColumns: GridColumns = [
  { field: 'id', headerName: 'ID' },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    cellClassName: 'column-name',
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    headerAlign: 'left',
    align: 'left',
  },
  { field: 'phone', headerName: 'Phone Number', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
]
