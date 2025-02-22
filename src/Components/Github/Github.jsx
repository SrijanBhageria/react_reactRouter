import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
    },[])
    return (
        <div className='text-center m-4 bg-gray-500 text-white
        p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt='Git Picture' width={300} />
        </div>
    )
}

export default Github
