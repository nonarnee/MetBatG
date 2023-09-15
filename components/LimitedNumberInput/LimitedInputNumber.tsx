import React, { forwardRef, useRef } from 'react';
import { useForkRef } from 'rooks';

const LimitedInputNumber = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((
  // eslint-disable-next-line react/prop-types
  { onChange, ...props },
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const forkedRef = useForkRef(ref, inputRef);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value && onChange) {
      event.target.value = value.replaceAll(/[^0-9,]/g, '');
      onChange(event);
    }
  };

  return (
    <input
      {...props}
      inputMode="numeric"
      onChange={handleChange}
      ref={forkedRef}
    />
  );
});

export default LimitedInputNumber;
