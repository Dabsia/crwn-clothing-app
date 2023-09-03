import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { useSelector } from 'react-redux'

const Men = () => {
    const menArray = useSelector(state => state.shop.collections[4])
    const { title, items } = menArray
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

export default Men
