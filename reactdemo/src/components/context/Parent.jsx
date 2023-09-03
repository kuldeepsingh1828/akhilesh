import React, { useState } from 'react'
import { createContext } from 'react'
import C1 from './C1'
import C2 from './C2'

export const ParentContext = createContext(null);
export default function Parent() {
  const [state, setState] = useState({
    name: "Kuldeep",
    friend: "Akhilesh"
  })
  const changeCase = (type) => {
    setState((prev) => {
      for (const [key, value] of Object.entries(state)) {
        state[key] = eval(`value.${type}()`);
      }
      console.log("STATE", state);
      return { ...state };
    });
  }
  return (
    <ParentContext.Provider value={{ state, changeCase }}>
      <div>
        <C1 />
        <C2 />
      </div>
    </ParentContext.Provider>
  )
}
