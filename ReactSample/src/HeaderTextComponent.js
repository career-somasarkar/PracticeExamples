import React from 'react'

class HeaderTextComponent extends React.Component{
	render(){
		return(
				<div>
					{this.props.text}
				</div>
			);
	}
}

export default HeaderTextComponent