import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from 'axios' 

const API = process.env.REACT_APP_API_URL

function SongDetails() {
    const [ song, SetSong ] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(res => SetSong(res.data))
        .catch(err => console.error(err))
    }, [id])
   
    // const handleDelete = (id) => {
    //     axios.delete(`${API}/songs/${id}`)
    //     .then(res => navigate(`/songs`))
    //     .catch(err => console.error(err))
    // }

    // const handleEdit = (id) => {
    //     axios.put(`${API}/songs/${id}`, song)
    //     .then((res) => {
    //         SetSong(res.data)
    //         navigate(`/songs/${id}`)
    //     })
    //     .catch((err) => console.log(err))        
        
    // }

  return (
    <div>
        <h3>{ song.name }</h3>
        <h4>{ song.artist }</h4>
        <h3>{ song.album }</h3>
        <p>{ song.time }</p>
        <p>{ song.is_favorite}</p>
        <button>Edit Song</button>
        <button>Delete Song</button>
    </div>
  )
}

export default SongDetails