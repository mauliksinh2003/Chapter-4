import React, { useEffect, useState } from 'react'

export default function Withuser() {
    return (
        <div>
            <Hoc />
        </div>
    )
}

function Hoc() {
    const [data, setData] = useState([]);
    const dets = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        setData(await response.json())
    }
    useEffect(() => {
        dets()
    }, [])

    return (

        <div>
            <div>
                <h1>User Details</h1>
            </div>

            <div>
                {
                    data.map((details, index) => {
                        return (
                            <div key={index}>
                                <div>{details.id}</div>
                                <div>Name: {details.name}</div>
                                <div>Username: {details.username}</div>
                                <div>Email: {details.email}</div>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}