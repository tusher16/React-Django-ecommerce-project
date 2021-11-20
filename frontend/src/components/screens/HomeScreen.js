import React from 'react'
import { Row, col, Col } from 'react-bootstrap'

import products from '../../products';

function HomeScreen() {
    return (
        <div>
            <h1>Latest products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <h3>
                            {product.name}
                        </h3>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen;
