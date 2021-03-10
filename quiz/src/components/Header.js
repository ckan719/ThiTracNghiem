import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    Row, Col,
    NavItem,
    NavLink,
    Button, Form, FormGroup, Label, Input,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
function Header(props) {
    const [modal, setModal] = React.useState(false);
    const {exUser} = props;
    const toggle = () => setModal(!modal);
    const user = exUser == null ? '/login' : '/user';
    const nameuser = exUser == null ? 'Sign In' : 'User';
    return (
        <div className='nav-bar'>
            <Navbar color="light" light expand="md">
                <NavbarBrand href= '/login'>Quiz Eng</NavbarBrand>
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Somethings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" pills>
                        <NavItem>
                            <NavLink href= {user} active>{nameuser}</NavLink>{' '}
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggle} > Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
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
        </div>
    );
}
export default Header;