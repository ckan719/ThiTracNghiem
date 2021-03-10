import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
function Footer(){
    return (
        <div className = 'footer'>
            <Container fluid={true}>
                <Row>
                    <Col xs = '4'>
                        Quiz Eng
                    </Col>
                    <Col xs = '4'>
                        FB : http://fb/ncnhat1999
                    </Col>
                    <Col xs = '4'>
                        Địa chỉ : Trường Đại học Kiến trúc Đà Nẵng
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;