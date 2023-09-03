import React, { useEffect, useState } from 'react'

export default function FirstFunction() {

    const [state, setState] = useState(100);
    const [state2, setState2] = useState(10);


    //constructor
    useEffect(() => {
        console.log("constructor")
    }, []);

    //render
    useEffect(() => {
        console.log("rendered")
    });

    //componentDidUpdate
    useEffect(() => {
        console.log("componentDidUpdate")
    }, [state,state2]);

    return (
        <>
            <div>{state}||{state2}</div>
            <button onClick={() => setState((s) => {
                return s + 1;
            })}>Click for State 1</button>
            <button onClick={() => setState2((s) => {
                return s + 1;
            })}>Click for State 2</button>
        </>
    )
}
