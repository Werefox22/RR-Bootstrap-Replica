import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";

function Stores() {
	const stores = [{
			name: 'Publix',
			imgSrc: 'https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png'
		}, {
			name: 'ALDI',
			imgSrc: 'https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png'
		}, {
			name: 'Sprouts',
			imgSrc: 'https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png'
		}, {
			name: 'Wegmans',
			imgSrc: 'https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png'
		}, {
			name: 'Food Lion',
			imgSrc: 'https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/133/797e4d4c-4e74-4c2a-bde3-b525e71c4302.png'
		}, {
			name: 'Costco',
			imgSrc: 'https://www.instacart.com/image-server/116x116/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png'
		}
	]

	const storeCards = stores.map((store, i) => {
		return (
			<div style={{border: '1px solid lightGray', borderRadius: '5px', width: '350px', display: 'flex', padding: '10px', margin: 'auto'}}>
				<Image roundedCircle src={store.imgSrc} style={{width: '50px', border: '1px solid lightGray', margin: '0 25px'}}/>
				<h3 style={{display: 'inline-block'}}>{store.name}</h3>
			</div>
		)
	})

	const getColumns = (startIndex, count) => {
		let cols = []

		for (let i = startIndex; i < startIndex + count; i++) {
			cols.push(
				<Col>{storeCards[i]}</Col>
			)
		}

		return cols
	}

	return (
		<Container>
			<h1>Choose your store in Raleigh-Durham</h1>
			<Row style={{margin: '1em'}}>
				{getColumns(0, 2)}
			</Row>
			<Row style={{margin: '1em'}}>
				{getColumns(2, 2)}
			</Row>
			<Row style={{margin: '1em'}}>
				{getColumns(4, 2)}
			</Row>
		</Container>
	)
}

export default Stores