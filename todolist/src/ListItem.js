 import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

 class ListItem  extends Component {
   
	 constructor (props){
	 		super(props);

			this.removeItem = this.removeItem.bind(this);
	 
	 }


	 removeItem (){
	 	this.props.parentRemove(this.props.id_item);
	 }
	 
	 
	 render() {
     return (
       <li>{this.props.item} <Button className="delete" color="secondary" variant="contained"
			 			onClick={this.removeItem}><DeleteIcon /></Button></li>
     
   );
  }
 }
export default ListItem;

