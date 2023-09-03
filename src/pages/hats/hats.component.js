import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { useSelector } from 'react-redux'

const Hats = () => {
    const hatsArray = useSelector(state => state.shop.collections[0])

    const { title, items } = hatsArray
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {/* // This component displays for items from our storeData file  */}
                {/* After looping it displays the collenction  */}
                {
                    items

                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </div>
        </div>
    )
}

export default Hats
