import React from 'react';
import { Row, Col, Card, Container, Form, Button, FormLabel } from "react-bootstrap";
import UserProfile from './UserInfo';
import PasswordField from './PasswordField';
import { useState } from 'react';



function UserResetPassword(data) {
    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [group, setGroup] = useState("");

    data = "";

    const [newPass1, setNewPass1] = useState('');
    const [newPass2, setNewPass2] = useState('');
    const [currentPass, setCurrentPass] = useState('');

    const updatePassword1 = (event) => {
        setNewPass1(event.target.value);
    };
    const updatePassword2 = (event) => {
        setNewPass2(event.target.value);
    };
    const updateCurrentPassword = (event) => {
        setCurrentPass(event.target.value);
    };

    const handleNewPasswordCheck = () => {
        if (newPass1 === newPass2) {
            // Passwords match
            console.log('Passwords match!');
            handleOldPasswordCheck();
        } else {
            // Passwords do not match
            console.log('Passwords do not match!');
        }
    };

    const handleOldPasswordCheck = () => {
        if (currentPass !== newPass1 && currentPass !== newPass2 ){
            console.log('New password is new!');
            //send old to password to check if it's correct and start updating
        } else{
            console.log('New password same as old!');
        }
    };

    return (
        <Row>
            <Col md="4" className='mt-4'>
                <Form>
                    <h3>Reset password</h3>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <FormLabel>Current Password</FormLabel>
                        <PasswordField className="" id="currentPass" onChangeProp={updateCurrentPassword}  />
                        <Form.Label className="mt-3">New Password</Form.Label>
                        <PasswordField className="mb-1" id="newPass1" onChangeProp={updatePassword1} onBlurProp={handleNewPasswordCheck} />
                        <PasswordField className="" id="newPass2" onChangeProp={updatePassword2} onBlurProp={handleNewPasswordCheck} />
                        <Form.Text className="text-muted">
                            New password must differ from old.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Reset password
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

export default UserResetPassword;