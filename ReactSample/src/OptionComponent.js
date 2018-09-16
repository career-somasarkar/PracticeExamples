import React from 'react'

class OptionComponent extends React.Component{
	componentWillMount()
	{
		this.setState(
			{
				Categories:[
					{type:'Admin', id: '1'},
					{type:'User', id: '2'},
					{type:'Guest', id: '3'}
				]
			}
		);
	}
	render(){
		/*var items = this.state.Categories.map(item=>{return <option key={item.id} value={item.type}>{item.type}</option>});*/
		var items = this.state.Categories.map( 
			function(item){
				return (
						<option key={item.id} value={item.type}>{item.type}</option>
					)
				}
			);
		return(
				<select>{items}</select>
			);
	}
}

export default OptionComponent