import React from 'react'

import { CardGroup, Col, Card, CardImg, CardBody, CardText, CardTitle, Button }  from "reactstrap"

export default function Products(props) {
  return (
    <>
      <h2>{props.currentCategory}</h2>
      <CardGroup>
        {props.product.map((product) => (
          <Col xs="4" key={product.id} className="mb-4">
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg top width="100%" src={product.image} alt={product.name}></CardImg>
            <CardBody>
              <CardTitle>{product.productName}</CardTitle>
              <CardText>{product.desc}</CardText>
              <Button color="primary" onClick={() => props.addtocart(product)}>Add to Card</Button>
            </CardBody>
            </Card>
          </Col>
        ))}
      </CardGroup>
    </>
  )
}
