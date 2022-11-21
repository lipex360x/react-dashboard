import { mockDataContacts } from '@/data/mockData'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

import { TableColumns } from './'

import * as S from './styles'

export const TeamTable = () => {
  return (
    <S.Container>
      <DataGrid
        rows={mockDataContacts}
        columns={TableColumns}
        components={{ Toolbar: GridToolbar }}
      />
    </S.Container>
  )
}
