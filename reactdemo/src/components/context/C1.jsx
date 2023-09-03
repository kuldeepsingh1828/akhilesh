import React from 'react'
import { useContext } from 'react'
import C11 from './C11'
import C12 from './C12'
import { ParentContext } from './Parent'

export default function C1() {
  const { changeCase } = useContext(ParentContext);
  return (
    <div>

      <C11 />
      <C12 />

      <button onClick={() => changeCase("toUpperCase")}>Update to Upper</button>
    </div>
  )
}
