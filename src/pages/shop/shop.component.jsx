import React , {Component}  from 'react';
import  shop_Data from './shopData';
import CollectionPreview from  '../../components/collection-preview/collection-preview.component'
class ShopPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            collections : shop_Data
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key = {id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage