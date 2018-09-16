import React from 'react'
import './style.css'
import HeaderTextComponent from './HeaderTextComponent'
import OptionComponent from './OptionComponent'

class LoginComponent extends React.Component{
	
	constructor(props) {
	    super(props);
	    // This binding is necessary to make `this` work in the callback
	    this.activateUser = this.activateUser.bind(this);
	}
  
  	activateUser(id, e) {
    	e.preventDefault();
    	alert('The user is activated.' + id);
  	}
  	cancelUser(e) {
    	e.preventDefault();
    	alert('The user is cancelled.');
  	}
	render(){
		return(
			<div>
				<div className="middle2 content" id="loginContent">
					<div className="row">
						<div className="labelContentCol">User Name:</div>
						<div className="txtContentCol">
							<input type="text" name="txtusername"></input>
						</div>
					</div>
					<div className="row">
						<div className="labelContentCol">Password:</div>
						<div className="txtContentCol">
							<input type="text" name="txtpassword"></input>
						</div>
					</div>
					<div className="row">
						<div className="labelContentCol">User Type:</div>
						<div className="txtContentCol">
							<OptionComponent/>
						</div>
					</div>
					<div className="row">
						<div className="labelContentCol visible">.</div>								
						<div className="txtContentCol">
							<button onClick={this.activateUser}>Login</button>								
						</div>
						<div className="txtContentCol">
							<button onClick={(e) => this.cancelUser('2', e)}>Cancel</button>
						</div>	
						<div className="txtContentCol">
							<input type="reset" name="btnReset" value="Reset" text="reset"></input>
						</div>	
					</div>										
				</div>				
			</div>
		);
	}
}

export default LoginComponent