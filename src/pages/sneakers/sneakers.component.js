import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { useSelector } from 'react-redux'

const Sneakers = () => {
    const sneakersArray = useSelector(state => state.shop.collections[1])
    const { title, items } = sneakersArray
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

export default Sneakers
