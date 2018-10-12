import React from 'react'

class ButtonComponent extends React.Component{

	onClickEvent(data, arg)
	{
		if(arg=='txtCancel')
			alert("Entry is cancelled "+arg);
		if(arg=='txtSubmit')
		{debugger;
			alert("Entry is submitted "+arg + " "+ data.purchaseDate);
		}
	}

	render(){
		return(			
			<div className="column1 row">
				<input type="button" id={this.props.Id} value={this.props.Text} 
				onClick={(e) => this.onClickEvent(this.props.HandleOnSubmit,this.props.Id,e)}></input>
			</div>
		);
	};
}

export default ButtonComponent