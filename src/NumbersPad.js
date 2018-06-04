import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Row = styled.div`
display: flex;
flex-direction: row;
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const NumbersPad = ({classes}) => {
  const renderButton = (number) => <Button variant="fab" className={classes.button}>{number}</Button>
  
  return (
    <Container>
      <Row>
          {renderButton(1)}
          {renderButton(2)}
          {renderButton(3)}
      </Row>
      <Row>
          {renderButton(4)}
          {renderButton(5)}
          {renderButton(6)}
      </Row>
      <Row>
          {renderButton(6)}
          {renderButton(7)}
          {renderButton(8)}
      </Row>
    </Container>
    )
};

export default withStyles(styles)(NumbersPad);