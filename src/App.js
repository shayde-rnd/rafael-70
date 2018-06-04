import React, { PropTypes } from 'react';
import styled from 'styled-components';
import GuessForm from './GuessFrom'
import NumbersPad from './NumbersPad'

const Layout = styled.div`
display: flex;
flex-direction: column;
`;

const App = () => (
<Layout>
  <GuessForm/>
  <NumbersPad/>
</Layout>
);

export default App;
