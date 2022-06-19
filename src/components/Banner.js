import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Banner(props) {
	return (
		<div style={{
			backgroundColor: '#deedd6',
		}}>
			<Row>
				<Col style={{textAlign: 'left'}}>
					<h1>Order groceries for delivery or pickup today</h1>
					<p>Whatever you want from local stores, brought right to your door.</p>
				</Col>
				<Col style={{textAlign: 'right'}}>
					<img src='https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg' />
				</Col>
			</Row>	
		</div>
	)
}

export default Banner