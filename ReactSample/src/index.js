import React from 'react'
import ReactDOM from 'react-dom'
import LoginComponent from './LoginComponent'
import SignUpComponent from './SignUpComponent'
import TextComponent from './HeaderTextComponent'
import './style.css'


class Index extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleLoginClick = this.handleLoginClick.bind(this);
	    this.handleSignUpClick = this.handleSignUpClick.bind(this);
	    this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
	this.setState({isLoggedIn: true});
	}

	handleSignUpClick() {
	this.setState({isLoggedIn: false});
	}

	render(){
		const isLoggedIn = this.state.isLoggedIn;
    	let button;
    	let compo;

	    if (isLoggedIn) {
	      button = <SignUpButton onClickEvent={this.handleSignUpClick} />;
	      compo = <LoginComponent/>;
	    } else {
	      button = <LoginButton onClickEvent={this.handleLoginClick} />;
	      compo = <SignUpComponent/>;
	    }

		return(
				<div>
					hello Guest!!!!
					<TextComponent text="This is a REACT APPLICATION"/>
					<div className="login" align="center">
						<div className="header content">
							<span className="contentblock">
								<TextComponent text="AuthN Login"/>
							</span>
						</div>
						<div className="middle1 content">
							<TextComponent text="Welcome to AuthN"/>
							<div className="singnupBtn">
								{button}
							</div>
						</div>
						{compo}
					</div>
				</div>
			);
	}
}

function CustInputBtn(props){
	return(
		<input type="button" value={props.textCont}></input>
	);
}


function CustButton(props){
	return(
		<button type="button">{props.textCont}</button>
	);
}

function LoginButton(props) {
	return (
		<button onClick={props.onClickEvent}>
			Login
		</button>
	);
}

function SignUpButton(props) {
  return (
    <button onClick={props.onClickEvent}>
      SignUp
    </button>
  );
}

ReactDOM.render(<Index/>, document.getElementById('root'))
