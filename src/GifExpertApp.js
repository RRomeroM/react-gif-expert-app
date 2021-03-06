import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

// snippet para crear componentes: rafc
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dota']);

    return(
        // FRAGMENT
        <>
            <h2>GifExpert App</h2>
            <AddCategory setCategories = { setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    ))
                }
            </ol>
        </>
    );

}

export default GifExpertApp;