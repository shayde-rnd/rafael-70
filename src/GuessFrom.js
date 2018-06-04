import React, { PropTypes } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Label from './Label'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const GuessForm = () => (
  <Container>
    <Avatar>?</Avatar>
    <Label>What's your guess</Label>
    <Input/>
    <Button>Check it out!</Button>
  </Container>
);

export default GuessForm;
