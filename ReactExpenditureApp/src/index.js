import React from 'react';
import ReactDOM from 'react-dom';
import RowComponent from './RowComponent';
import ButtonComponent from './ButtonComponent'
import OptionComponent from './OptionComponent'
import LabelComponent from './LabelComponent'

class Index extends React.Component{
	constructor(props) {
        super();
        this.state = {
            selectedItem : '',
            purchaseDate: '',
            storeName: '',
            purchasedAmount:''
        };
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    
	changeOptionState(val)
	{//debugger
		this.setState({selectedItem : val});
	}
	changeDateState(val)
	{//debugger
		this.setState({purchaseDate : val});
	}
	changeStoreState(val)
	{//debugger
		this.setState({storeName : val});
	}
	render(){
		const labelStyle ={
			color: 'blue',
			backgroundcolor:'red'
		};
		return (
			<div> 
			<form>
			<div style={labelStyle}>Hello </div>
				<RowComponent Name="Purchase Date" Id="txtDate" 
					HandleChangeEvent={this.changeDateState.bind(this)}/>
				<RowComponent Name="Store Name" Id="txtName"
					HandleChangeEvent={this.changeStoreState.bind(this)}/>
				<RowComponent Name="Purchased Amount" Id="txtAmount"/>
				<OptionComponent Name="Paid By Cash or Card" Id="optPurchasedBy" 
					HandleChangeEvent={this.changeOptionState.bind(this)} />
				<LabelComponent Text={this.state.selectedItem}/>
				<ButtonComponent Text="Submit" Id="txtSubmit" HandleOnSubmit={this.state}/>
				<ButtonComponent Text="Cancel" Id="txtCancel"/>
			</form>	
			</div>
		);
	}
};

ReactDOM.render(<Index/>, document.getElementById('root'))