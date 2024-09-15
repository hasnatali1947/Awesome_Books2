import axios from 'axios'
import "../app/style/fakeApi.css"
import React, { useState, useEffect } from 'react'

const FakeApi = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        JokeApi();
    }, [])

    const JokeApi = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://api.chucknorris.io/jokes/random")
            const data = response.data
            setApiData(data)
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    const handleJoke = () => {
        JokeApi();
    }

    return (
        <div className='apiContainer'>
            <h2>Fake Api</h2>
            {loading ? <span>Loading...</span> :
                <div className='jokesBtnDiv'>
                    <span> Jokes: {apiData.value}</span>
                    <button className='handleJoke' onClick={handleJoke}>Another Joke</button>
                </div>
            }
        </div>
    )
}

export default FakeApi;
