import React from 'react';
import './style.css';

class RowComponent extends React.Component{
	getInputVal(arg)
	{
		this.props.HandleChangeEvent(arg.target.value);
	}
	render(){
		return(
				<div className="row"> 
					<div className="column1"><span>{this.props.Name}: </span></div>
					<div className="column2"><input type="text" id={this.props.Id} style={{width:300}} onChange={(e)=>this.getInputVal(e)}></input></div>
				</div>
			);
	};
}

export default RowComponent