import React from 'react'
import './style.css'
import OptionComponent from './OptionComponent'

class SignUpComponent extends React.Component{
	render(){
		return(
			<div className="signupPanel" id="signupContent">
				<div className="middle2 content">				
					<div className="row">
						<div className="labelContentCol">Full Name:</div>
						<div className="txtContentCol"><input type="text" name="txtfullName"></input></div>
					</div>
					<div className="row">
						<div className="labelContentCol">User Name:</div>
						<div className="txtContentCol"><input type="text" name="txtuser"></input></div>
					</div>
					<div className="row">
						<div className="labelContentCol">Password:</div>
						<div className="txtContentCol"><input type="text" name="txtpwd"></input></div>
					</div>
					<div className="row">
						<div className="labelContentCol">PIN:</div>
						<div className="txtContentCol"><input type="text" name="txtpin"></input></div>
					</div>
					<div className="row">
						<div className="labelContentCol">E-Mail:</div>
						<div className="txtContentCol"><input type="text" name="txtmail"></input></div>
					</div>
					<div className="row">	
						<div className="labelContentCol visible">.</div>				
						<div className="txtContentCol">
							<button type="submit" >SignUp</button>
						</div>
						<div className="txtContentCol">
							<input type="reset" name="btnLogin" text="reset"></input>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpComponent