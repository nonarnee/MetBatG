import React from 'react';
import { useFormContext } from 'react-hook-form';
import { type UnionForm } from '@/containers/union/types';

import * as S from './Buttons.styled';

interface Props {
  editMode: boolean
  onToggleMode: () => void
}

export default function Buttons ({ editMode, onToggleMode }: Props) {
  const {
    watch,
    setValue
  } = useFormContext<UnionForm>();
  const watchUnion = watch('union');

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'union',
        JSON.stringify(watchUnion)
      );
    }
  };

  const handleLoad = () => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('union') != null) {
        setValue(
          'union',
          JSON.parse(localStorage.getItem('union') ?? '')
        );
      }
    }
  };

  return (
    <S.Buttons>
      <S.Button onClick={onToggleMode}>{editMode ? 'VIEW' : 'EDIT'}</S.Button>
      <S.Button onClick={handleSave}>SAVE</S.Button>
      <S.Button onClick={handleLoad}>LOAD</S.Button>
    </S.Buttons>
  );
};
