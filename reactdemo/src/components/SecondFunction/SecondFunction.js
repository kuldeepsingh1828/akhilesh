import React, { useState } from 'react'

export default function SecondFunction() {
    const [state, setState] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
    });
    const setData = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        setState((s) => {
            return {
                ...s,
                [name]: value   // [name] is a dynamic key
            }
        })
    }
    return (
        <div>
            <input type="text" name="username" value={state.username} onChange={setData} />
            <input type="text" name="password" value={state.password} onChange={setData} />
            <input type="text" name="email" value={state.email} onChange={setData} />
            <input type="text" name="phone" value={state.phone} onChange={setData} />
            <button onClick={() => {
                console.log(state);
            }}>Click</button>
        </div>
    )
}