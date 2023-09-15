import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import LimitedInputNumber from '@/components/LimitedNumberInput';
import { type Character } from '@/types/Character';
import { getGrade } from '@/utils/getGrade';
import { getAmount } from '@/utils/getAmount';
import { getUnionStat } from '@/utils/getUnionStat';
import * as S from './UnionTable.styled';

interface Props {
  editMode: boolean
}

export default function UnionTable ({ editMode }: Props) {
  const {
    control,
    watch,
    register
  } = useFormContext<{ union: Character[] }>();

  const { fields } = useFieldArray({
    control,
    name: 'union'
  });

  const watchUnion = watch('union');
  console.log(editMode);

  return (
    <S.UnionTable>
      <S.UnionItem isHeader>
        <S.Row>분류</S.Row>
        <S.Row>직업군</S.Row>
        <S.Row>직업</S.Row>
        <S.Row>캐릭명</S.Row>
        <S.Row>레벨</S.Row>
        <S.Row>등급</S.Row>
        <S.Row>유니온 효과</S.Row>
      </S.UnionItem>

      {fields.map((unionItem, index) => (
        <S.UnionItem key={unionItem.className}>
          <S.Row>
            {unionItem.tribe}
          </S.Row>
          <S.Row>
            {unionItem.classType}
          </S.Row>
          <S.Row>
            {unionItem.className}
          </S.Row>
          <S.Row>
            {editMode
              ? <input
                  {...register(`union.${index}.name`)}
                  style={{ border: 'solid 1px rgba(0, 0, 0, 0.25)' }}
                />
              : <>{unionItem.name}</>
            }
          </S.Row>
          <S.Row>
            {editMode
              ? <LimitedInputNumber
                  {...register(`union.${index}.level`)}
                  style={{ border: 'solid 1px rgba(0, 0, 0, 0.25)' }}
                />
              : <>{unionItem.level}</>
            }
          </S.Row>
          <S.Row>
            {getGrade(watchUnion[index].level, watchUnion[index].className)}
          </S.Row>
          <S.Row>
            {getUnionStat(unionItem.className)}
            {' '}
            {getAmount(watchUnion[index].level, watchUnion[index].className)}
            {' '}
            증가
          </S.Row>
        </S.UnionItem>
      ))}
    </S.UnionTable>
  );
};
