import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import blogFetch from '../axios/config'

import "./Photo.css";

const Photo = () => {
    const {id} = useParams()

    const [photo, setPhoto] = useState([])

    const getPosts =  async() => {
        try{
            const response = await blogFetch.get(`/photos/${id}`);

            const data = response.data

            setPhoto(data)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

  return (
    <div>
        <h2>Foto {photo.id}</h2>
        <div className='box'>
            <img src={photo.url} alt={photo.title} />
            <h4>{photo.title}</h4>
        </div>
    </div>
  )
}

export default Photo