import React, { useEffect, useState } from 'react'
import { fetchData } from '../../apis/userApi';
import styles from './UsersDataComponent.module.css'
const objMapping = { address: 'city', company: 'name' }

export default function UsersDataComponent() {
    //No user Data []
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const { columns, data } = await fetchData();
            setColumns(columns);
            setData(data);
            setIsLoaded(true);
        }
        getData();
    }, [])


    return (
        <div>
            {!isLoaded && <img src={"https://media.tenor.com/8ZhQShCQe9UAAAAC/loader.gif"} />}
            {isLoaded && <table border={1}>
                <thead>
                    <tr>
                        {columns.map(column => <th>{column.toUpperCase()}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => {
                        return <tr>
                            {columns.map(column => (typeof user[column] == 'object' ?
                                <td>{user[column][objMapping[column]]}</td> :
                                <td>{user[column]}</td>
                            ))}
                        </tr>
                    })}
                </tbody>
            </table>
            }
        </div>
    )
}
