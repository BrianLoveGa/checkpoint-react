import React, { Component } from 'react';

import contacts from '../../../contacts.json';

export default class Contact extends Component {
	render() {
		let loon = contacts.find(
			loon => loon.name === this.props.match.params.name
		);

		return (
			<div className="contact">
				<img
					className="profile"
					src={loon.profile_picture}
					alt={loon.name}
				></img>
				<h3>{loon.name}</h3>
				<h4>{loon.email}</h4>
			</div>
		);
	}
}
