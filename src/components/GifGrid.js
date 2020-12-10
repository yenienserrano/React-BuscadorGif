import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
    /* 
        useEffect(() => {
            getGif( category ).then( setImages )
        }, [ category ])

    const [images, setImages] = useState([]) */

    const { data, loading } = useFetchGif( category )
    



    return (
        <>
         <h3 className="animate__animated animate__fadeIn">{ category }</h3> 

         { loading && <p className="animate__animated animate__flash">Loading...</p>}
         {<div className="cardGrid animate__animated animate__fadeIn">
            { data.map( img =>(
                <GifGridItem
                key={ img.id }
                { ...img } 
                />
                )
            ) 
            }
         </div>}
        </>
    )
}
