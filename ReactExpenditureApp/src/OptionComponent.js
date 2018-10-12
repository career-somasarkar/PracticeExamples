import React from 'react';
import './style.css';

class OptionComponent extends React.Component{
	componentWillMount()
	{
		//alert('jk');
		//var v = prompt('name:');
		//alert(v);
		this.setState(
			{
				Categories:[
					{type:'Card', id: '1'},
					{type:'Cash', id: '2'},
					{type:'Credit', id: '3'}
				]
			}
		);
	}
	getValue(e){
		//debugger;
		this.props.HandleChangeEvent(e.target.value);
		//console.log(e.target.value);
	}
	render(){
		var items=this.state.Categories.map(item=>{return<option key={item.id} value={item.type}>{item.type}</option>});
		return(
			<div className="row"> 
				<div className="column1"><span>{this.props.Name}: </span></div>
				<div className="column2"><select onChange={(e)=>this.getValue(e)}>{items}</select></div>
			</div>
		);
	};
}

export default OptionComponent