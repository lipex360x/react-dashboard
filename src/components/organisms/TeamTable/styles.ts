import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 75vh;

    .MuiDataGrid-root {
      border: none;
    }

    .MuiDataGrid-cell {
      border-bottom: 'none';
    }

    .MuiDataGrid-columnHeaders {
      background-color: ${theme.colors.blueAccent[700]};
    }

    .MuiDataGrid-columnSeparator {
      color: ${theme.colors.primary[100]} !important;
    }

    .MuiDataGrid-panel {
      background-color: ${theme.colors.primary[200]} !important;
    }

    .MuiDataGrid-cellContent {
      color: ${theme.colors.primary[100]};
    }

    .MuiDataGrid-virtualScroller {
      background-color: ${theme.colors.primary[400]};
    }

    .name-column--cell {
      color: green;
    }

    .MuiDataGrid-footerContainer {
      background-color: ${theme.colors.blueAccent[700]};
    }

    .MuiCheckbox-root {
      color: ${theme.colors.greenAccent[200]} !important;
    }
  `}
`
