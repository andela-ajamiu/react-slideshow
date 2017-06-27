import React from 'react';
import MyImage from '../img/logo.png';

export default class Header extends React.Component {
	render() {
		return (
			<header >
				<img className="site-branding" src={MyImage} />
			</header>
		)
	}
}


