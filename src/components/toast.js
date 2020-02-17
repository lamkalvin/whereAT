import React from 'react';
import Toast from 'react-bootstrap/Toast';
import styled from 'styled-components';

const DisguisedToast = styled(Toast)`
    position: fixed;
    z-index: 1;
    bottom: 0px;
    left: 50%;
    margin-bottom: 150px;
`;

const SurveyToast = (props) => {
    return (
        <DisguisedToast onClose={() => props.handleClick()} show={props.show} delay={3000} autohide>
            <Toast.Body>Thanks for submitting the survey! We'll get back to you soon :)</Toast.Body>
        </DisguisedToast>
    )
};

export default SurveyToast;