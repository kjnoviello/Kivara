import React from 'react'

const prueba = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const result =  await data.json()

    console.log(result);
    return (
        <div>
            {result.map(item=><li>{item.title}</li>)}
        </div>
    )
}

export default prueba