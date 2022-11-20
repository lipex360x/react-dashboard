import styled, { css } from 'styled-components'

const sidebarTransform = {
  collapse: () => css`
    width: 70px;
    text-align: center;

    header {
      justify-content: center;
    }
  `,
}

type SidebarProps = {
  isCollapsed: boolean
}

export const Container = styled.div<SidebarProps>`
  ${({ theme, isCollapsed }) => css`
    display: flex;
    width: 260px;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${theme.colors.primary[400]};
    padding: ${theme.spacing.xs} ${theme.spacing.base};

    ${isCollapsed && sidebarTransform.collapse}
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: end;
    color: ${theme.colors.grey[300]};
  `}
`

export const Divisor = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.greenAccent[500]};
    font-size: ${theme.fontSize.sm};
    margin-top: ${theme.spacing['3xl']};
  `}
`
