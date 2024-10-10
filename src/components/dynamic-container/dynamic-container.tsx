'use client'

import React, {PropsWithChildren, useState} from 'react';

type SizeType = '2x2' | '2x4' | '4x4';

export const DynamicContainer = ({children}: PropsWithChildren) => {

    const [size, setSize] = useState<SizeType>('2x2')

 return (
  <div className={'group/container'}
  >
      <div
          data-2x2={size === '2x2' ? '' : undefined}
          data-2x4={size === '2x4' ? '' : undefined}
          data-4x4={size === '4x4' ? '' : undefined}
      >{children}</div>
  </div>
 );
};