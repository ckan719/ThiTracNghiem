import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText ,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { InputGroup, InputGroupText } from 'reactstrap';
function Login() {
    const [modal, setModal] = React.useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div className='bg'>
            <Container fluid={true}>
                <Row>
                    <Col xs="9">
                    </Col>
                    <Col xs="3">
                        <div className='login'>
                            <h2>Sign In</h2>
                            <InputGroup>
                                <InputGroupText>👩‍💼</InputGroupText>
                                <Input placeholder="Username" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupText>🔒</InputGroupText>
                                <Input placeholder="Password" />
                            </InputGroup>

                            <p style={{ 'textAlign': 'center' }}>Chưa có tài khoản <span onClick = {toggle} className='signup'>đăng kí ngay.</span></p>
                            <br />
                            <Button color='primary' size='lg' block>Next</Button>
                        </div>
                        <div>
                            <Modal isOpen={modal} toggle={toggle}>
                                <ModalHeader toggle={toggle}>Tạo Tài Khoản</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup row>
                                            <Label sm={4}>Họ và tên </Label>
                                            <Col sm={8}>
                                                <Input type='text' ></Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={4}>Tên người dùng </Label>
                                            <Col sm={8}><Input type='text' ></Input></Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={4}>Mật Khẩu </Label>
                                            <Col sm={8}><Input type='password' ></Input></Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={4}>Nhập lại </Label>
                                            <Col sm={8}><Input type='password' ></Input></Col>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={toggle}>Tạo tài khoản</Button>{' '}
                                    <Button color="secondary" onClick={toggle}>Hủy</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Login;