'use client';

import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import UnionTable from '@/containers/union/components/UnionTable';
import Board from '@/containers/union/components/Board';
import { type UnionForm } from '@/containers/union/types';
import { defaultUnion } from '@/constants/deafultUnion';
import Buttons from '@/containers/union/components/Buttons';

import * as S from './UnionMainView.styled';

export default function UnionMainView () {
  const [editMode, setEditMode] = useState(false);

  const handleToggleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

  const formMethods = useForm<UnionForm>({
    defaultValues: {
      union: defaultUnion,
      targetLevel: 0
    }
  });

  return (
    <div>
      <FormProvider {...formMethods}>
        <S.Content>
          <UnionTable editMode={editMode} />
          <Board />
        </S.Content>
        <Buttons editMode={editMode} onToggleMode={handleToggleEditMode} />
      </FormProvider>
    </div>
  );
};
