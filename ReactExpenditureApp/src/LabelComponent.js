import React from 'react'
import './style.css'
import RadioComponent from './RadioComponent'

class LabelComponent extends React.Component{
	render(){
	return(
		<div className="row"> 
			<div className="column1"><span>You have paid by:  {this.props.Text}</span></div>
			<div className="column2"><RadioComponent/></div>
		</div>
	);
	};
}

export default LabelComponent