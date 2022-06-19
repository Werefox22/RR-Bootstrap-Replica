import React from "react";
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function TopBar(props) {
	return (
		<NavBar style={{margin: '0 1em'}}>
			<Container style={{marginLeft: 0}}>
				<NavBar.Brand>
					<img 
						alt="Instacart Logo"
						src='https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg'
					/>
				</NavBar.Brand>
			</Container>
			<Nav>
				<Nav.Link>Login</Nav.Link>
				<Button>Sign up</Button>
			</Nav>
		</NavBar>
	)
}

export default TopBar