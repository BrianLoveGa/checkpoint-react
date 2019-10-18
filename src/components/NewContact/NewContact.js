import React, { Component } from 'react';

export default class NewContact extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			profile_pic: ''
		};
		this.myChangeHandler = this.myChangeHandler.bind(this);
	}

	myChangeHandler = event => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({ [nam]: val });
	};

	render() {
		return (
			<div>
				<h1>New Contact</h1>
				<div className="newloon">
					<form>
						<p>Name</p>
						<input
							className="field"
							type="text"
							name="name"
							onChange={this.myChangeHandler}
						/>
						<p>Email</p>
						<input
							className="field"
							type="text"
							name="email"
							onChange={this.myChangeHandler}
						/>
						<p>Profile Picture</p>
						<input
							className="field"
							type="text"
							name="profile_pic"
							onChange={this.myChangeHandler}
						/>
					</form>
				</div>
			</div>
		);
	}
}
