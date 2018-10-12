import React from 'react';

class RadioComponent extends React.Component{

	render(){
		return(
			<div>		
				<input type="radio" name="PayType" value="Cash" id="rYes"></input>
				<label for="rYes">Yes</label>
  				<input type="radio" name="PayType" value="Card" id="rNo"></input>
  				<label for="rNo">No</label>  				
			</div>
		);
	};
}

export default RadioComponent