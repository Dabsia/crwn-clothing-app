import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss'
import { useNavigate } from 'react-router-dom/dist';

const CollectionPreview = ({ title, items, routeName }) => {
    const navigate = useNavigate()
    return (
        <div className='collection-preview'>
            <div className='titleContainer' >
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='seeAll' onClick={() => navigate(`${routeName}`)} >See all</span>
            </div>
            <div className='preview'>
                {/* // This component displays for items from our storeData file  */}
                {/* After looping it displays the collenction  */}
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview