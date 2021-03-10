import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText , Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import thithu from '../images/thithu.png';
function Content() {
    const [modal, setModal] = React.useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>NỘI DUNG BÀI THI</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Hiện nay, để tìm một địa chỉ thi thử TOEIC không phải là khó! Tuy nhiên, nếu bài thi thử TOEIC không sát với cấu trúc đề thi thực, quá dễ hay quá khó với kiến thức trong bài thi TOEIC thì sẽ không thể đánh giá được trình độ tiếng Anh của các bạn hiện tại. Vì vậy, tại Quiz Eng luôn đảm bảo các buổi thi thử TOEIC chất lượng, nghiêm túc đảm bảo như kỳ thi TOEIC thực nên các em hoàn toàn tin tưởng đăng ký thi thử nhé!</p>
                    </Col>
                </Row>
                <Row>
                    <img src={thithu} height='500px' width='100%' />
                </Row>
                <br></br>
                <Row >
                    <Button onClick={ toggle } style={{ 'margin': 'auto' }} color='danger'>Đăng kí là thành viên để thi thử ngay</Button>
                </Row>
                <div>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Tạo Tài Khoản</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Họ và tên </Label>
                                    <Input type='text' ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Tên người dùng </Label>
                                    <Input type='text' ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Mật Khẩu </Label>
                                    <Input type='password' ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Nhập lại </Label>
                                    <Input type='password' ></Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Tạo tài khoản</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Hủy</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Container>
        </>
    );
}
export default Content;