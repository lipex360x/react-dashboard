import styled, { css } from 'styled-components'

import { SidebarItemProps } from './SidebarItem'

type ItemProps = { isActive: boolean } & Pick<SidebarItemProps, 'isCollapesed'>

const itemTransform = {
  collapsed: () => css`
    justify-content: center;

    span {
      display: none;
    }
  `,
}

export const Item = styled.div<ItemProps>`
  ${({ theme, isCollapesed, isActive }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    width: 100%;
    margin-top: ${theme.spacing.base};
    font-size: ${theme.fontSize.sm};
    justify-content: left;

    color: ${!isActive ? theme.colors.grey[500] : theme.colors.grey[100]};

    svg {
      font-size: ${theme.fontSize.xl};
    }

    &:hover {
      color: ${theme.colors.grey[100]};

      svg {
        font-size: ${theme.fontSize['2xl']};
        transition: font-size ${theme.transition.fast};
      }
    }

    ${isCollapesed && itemTransform.collapsed}
  `}
`
