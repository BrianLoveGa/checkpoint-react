import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<div>
				<h1>looney contact header BL</h1>
				<div className="nav">
					<div className="navItem">
						<Link to="/">Home</Link>
					</div>
					<div className="navItem">
						<Link to="/new-contact"> new contact</Link>
					</div>
				</div>
			</div>
		);
	}
}
