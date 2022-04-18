import React from 'react';

import   './collection-item.styles.scss';

// Takes in props from the shop component and creates a template so it can be exported to the collection preview component

const CollectionItem = ({name,price,imageUrl}) => {
    return (
        <div className='collection-item'>
            <div className='image'
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>   
        </div>
    )
}

export default CollectionItem