import styled, { css } from 'styled-components'

type SidebarProps = {
  isCollapsed: boolean
}

const sidebarTransform = {
  collapse: () => css`
    width: 50px;
  `,
}

export const Container = styled.div<SidebarProps>`
  ${({ theme, isCollapsed }) => css`
    height: 100vh;
    background: ${theme.colors.primary[400]};
    padding: ${theme.spacing.xs} ${theme.spacing.base};
    width: 200px;

    transition: background-color, width ${theme.transition.fast};

    ${isCollapsed && sidebarTransform.collapse}
  `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
