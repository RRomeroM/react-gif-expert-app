import React from 'react'
import { GifGridItem } from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flip animate__slow">Cargando...</p>}
            <div className="card-grid">
                {
                    images.map( image => ( 
                        <GifGridItem 
                            key = {image.id}
                            { ...image }
                        />
                    ))

                }
            </div>
        </>
    )
}
