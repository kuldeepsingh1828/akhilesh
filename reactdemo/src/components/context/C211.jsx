import React, { useContext } from 'react'
import { ParentContext } from './Parent';

export default function C211() {
  const { state: context } = useContext(ParentContext);
  return (
    <div>C211:{`${context.name} friend is ${context.friend}`}</div>
  )
}
