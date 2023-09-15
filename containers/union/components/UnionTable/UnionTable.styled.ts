import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const UnionTable = styled.section`
  position: relative;
  overflow: hidden;
  flex: 1;
  padding: 0.5rem;
  font-size: 14px;
  color: #514c87;
`;

export const UnionItem = styled.div<{ isHeader?: boolean }>(
  css`
    display: grid;
    grid-template-columns: 100px 50px 100px 100px 50px 40px 1fr;
    gap: 12px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    
    > div > input {
      width: 100%;
    }
  `,
  ({ isHeader }) => isHeader && css`
    padding: 10px 0;
    font-weight: bold;
    background-color: #dadde1;
  `
);

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  word-break: break-word;
`;
