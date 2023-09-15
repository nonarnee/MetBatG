import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';

export const NavContent = styled.nav`
  flex-grow: 1;
  padding: 0.5rem;
`;

export const List = styled.ul`
  display: block;
  overflow: visible;
  height: auto;
`;

export const ListItem = styled.li`
  flex-grow: 1;
`;

export const LinkItem = styled(Link, {
  shouldForwardProp: (propName) => propName !== 'active'
})<{ active: boolean }>(
  css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    font-size: 16px;
    color: #514c87;
    border-radius: 0.25rem;
  `,
  ({ active }) => active && css`
    background-color: rgba(0, 0, 0, 0.05);
  `
);
