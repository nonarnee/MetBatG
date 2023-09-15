'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import * as S from './Sidebar.styled';

export default function Sidebar () {
  const pathname = usePathname();

  return (
    <S.NavContent>
      <S.List>
        <S.ListItem>
          <S.LinkItem href="/union" active={pathname.includes('union')}>유니온 매니저</S.LinkItem>
        </S.ListItem>
      </S.List>
    </S.NavContent>
  );
};
