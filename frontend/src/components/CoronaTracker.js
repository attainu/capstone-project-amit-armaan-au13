import React from 'react'
import { Container,Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const CoronaTracker = () => {
    return (
      <Container>
        <LinkContainer to="/">
          <Button style={{ borderRadius: "50px" }} variant="danger">
            Track Corona!
          </Button>
        </LinkContainer>

        <h1>here will be our corona tracker</h1>

        <br></br>
      </Container>
    );
}

export default CoronaTracker
