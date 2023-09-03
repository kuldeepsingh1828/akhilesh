import React, { useContext } from 'react'
import C21 from './C21'
import { ParentContext } from './Parent'

export default function C2() {
  const { changeCase } = useContext(ParentContext);
  return (
    <div>

      <C21 />
      <button onClick={() => changeCase("toLowerCase")}>Update to Lower</button>
    </div>
  )
}
