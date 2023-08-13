import React from 'react'


export default function BasicComponent({ prop1, prop2, prop3 }) {
    return (
        <>
            <div>BasicComponent</div>
            <li>{prop1}</li>
            <li>{prop2}</li>
            {Object.entries(prop3).map((val, key) => <li key={key}>{val}</li>)}
        </>
    )
}
