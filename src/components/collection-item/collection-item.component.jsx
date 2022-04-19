import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import   './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
// Takes in props from the shop component and creates a template so it can be exported to the collection preview component

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item
    return (
        <div className='collection-item'>
            <div className='image'
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div> 
            <CustomButton onClick = {() => addItem(item)}>Add To Cart</CustomButton>  
        </div>
    )
}

const mapDispatchToProps =(dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)