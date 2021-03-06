import React from 'react'
import './collections-overview.component.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'

import { connect } from 'react-redux'

import {selectCollections} from '../../redux/shop/shop.selector'

import { createStructuredSelector } from 'reselect'

const CollectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key = {id} {...otherCollectionProps}/>
        ))
    }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(CollectionsOverview)