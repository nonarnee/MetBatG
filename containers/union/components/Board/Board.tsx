import React from 'react';
import { useFormContext } from 'react-hook-form';
import { type UnionForm } from '@/containers/union/types';
import LimitedInputNumber from '@/components/LimitedNumberInput';

export default function Board () {
  const {
    watch,
    register
  } = useFormContext<UnionForm>();
  const watchUnion = watch('union');
  const watchTargetLevel = watch('targetLevel');

  const unionLevel = [...watchUnion]
    .filter(({ className }) => className !== '메이플M')
    .map(({ level }) => level)
    .sort((a, b) => b - a)
    .slice(0, 42)
    .reduce((a, b) => Number(a) + Number(b));

  const toTheGoal = watchTargetLevel - unionLevel < 0 ? 0 : watchTargetLevel - unionLevel;

  return (
    <section>
      <div>
        <p>정보</p>
        <div>
          <div>
            <span>total lvl</span>
            <span>{unionLevel}</span>
          </div>
          <div>
            <span>target lvl</span>
            <span>
              <LimitedInputNumber {...register('targetLevel')} />
            </span>
          </div>
          <div>
            <span>to the goal</span>
            <span>{toTheGoal}</span>
          </div>
          <div>
            <span>progress</span>
            <span>{watchTargetLevel > 0 ? (unionLevel / watchTargetLevel * 100).toFixed(2) : 0}%</span>
          </div>
        </div>
      </div>
      <div>
        <p>효과</p>
        {/* <div> */}
        {/*  {[].map((stat) => ( */}
        {/*    <div> */}
        {/*      <span>{stat.label}</span> */}
        {/*      <span>{stat.value}</span> */}
        {/*    </div> */}
        {/*  )) } */}
        {/* </div> */}
      </div>
    </section>
  );
};
