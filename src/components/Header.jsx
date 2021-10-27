import React from 'react';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Header() {
	return (
		<header>
			<div className="logo">
				<h1>SETYOFP.</h1>
			</div>
			<nav className="header-nav">
				<Button variant="text">ABOUT</Button>
				<Button>EDUCATION</Button>
				<Button>WORK</Button>
			</nav>
			<div className="contact-btn">
				<Button variant="outlined" endIcon={<ContactPageIcon />}>
					CONTACT
				</Button>
			</div>
		</header>
	);
}

export default Header;
