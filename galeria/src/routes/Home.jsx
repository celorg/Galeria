import blogFetch from "../axios/config"
import { useEffect,useState } from "react"

import { Link } from "react-router-dom"

import "./Home.css"

const Home = () => {

    const [photos, setPhotos] = useState([])

    const getPhotos = async() => {
        try{
            const response = await blogFetch.get("/photos");

            const data = response.data;
            
            setPhotos(data);
            
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getPhotos();
    }, [])

  return (
    <div className='home'>
        <h1>Galeria</h1>
        <div className="conteudo">
            {photos.length === 0 ? <p>Carregando...</p> : (
                photos.map((photo) =>(
                    <div className="foto" key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <Link to={`/photo/${photo.id}`}>
                            <h6>{photo.title}</h6>
                        </Link>
                        
                    </div>
                ))
            )}
        </div>
        
    </div>
  )
}

export default Home