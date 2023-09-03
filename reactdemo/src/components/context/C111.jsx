import React from 'react'
import { useContext } from 'react'
import { ParentContext } from './Parent'

export default function C111() {
  const { state: context } = useContext(ParentContext);
  return (
    <div>C111:{`${context.name} friend is ${context.friend}`}</div>
  )
}
