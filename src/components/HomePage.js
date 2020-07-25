import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  font-family: 'Open Sans', sans-serif;
  margin: auto;
`;

const Heading = styled.h1`
  font-weight: bold;
  margin-top: 200px;
  font-size:35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function HomePage() {
    return (
        <Container>
            <Heading>
            Welcome to My React Boiler Plate (@cliffordten)
            </Heading>
        </Container>
    );
}
