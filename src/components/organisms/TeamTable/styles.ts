import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 75vh;

    .MuiDataGrid-root {
      border: none;
    }

    .MuiDataGrid-cell {
      background-color: green;
    }

    .MuiDataGrid-columnHeaders {
      background-color: blue;
    }

    .MuiDataGrid-virtualScroller {
      background-color: red;
    }

    .MuiDataGrid-footerContainer {
      background-color: orange;
    }

    .MuiCheckbox-root {
      color: ${theme.colors.greenAccent[200]} !important;
    }
  `}
`
