import styled, { css } from 'styled-components'

const sidebarTransform = {
  collapse: () => css`
    width: 70px;

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
  display: flex;
  align-items: center;
  justify-content: end;
`
