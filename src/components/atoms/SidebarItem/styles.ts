import styled, { css } from 'styled-components'

import { SidebarItemProps } from './SidebarItem'

type ItemProps = { isActive: boolean } & Pick<SidebarItemProps, 'isCollapesed'>

export const Item = styled.div<ItemProps>`
  ${({ theme, isCollapesed }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    width: 100%;
    margin-top: ${theme.spacing.base};
    font-size: ${theme.fontSize.sm};
    justify-content: ${!isCollapesed ? 'left' : 'center'};

    color: ${theme.colors.grey[400]};

    &:hover {
      color: ${theme.colors.grey[100]};
    }

    svg {
      font-size: ${theme.fontSize['2xl']};
    }
  `}
`