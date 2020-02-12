import React, { Component } from 'react';
import {Col, Container, Row } from 'reactstrap';
import {PrismCode} from '../Base/Prismjs/Prismjs';


const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`


class NewPage extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-1 mr-4">Guide Niki </h1>
                <h4 className="float-left display-3">prismjs</h4>
                {/* <p className="text-muted float-left">The page you are looking for was not found.</p> */}
              </div>
           

              <PrismCode
        code={code}
        language="js"
        plugins={["line-numbers"]}
      />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



export default NewPage;
