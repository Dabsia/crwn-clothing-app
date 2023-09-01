import React from 'react'; 
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux'
import './directory.styles.scss';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => {
        return(
            <div className='directory-menu'>
                {
                    sections.map(({title, size, imageUrl, id, linkUrl})=> (
                        <MenuItem key = {id} size = {size} title = {title} imageUrl={imageUrl} linkUrl ={linkUrl}/>
                    ))
                }
            </div>
        )
}


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
 })
    



export default connect(mapStateToProps)(Directory)