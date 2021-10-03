import React from 'react';
import { Container } from '@mui/material';
import { DrugList } from './features/drugs/DrugList';
import { Header } from './features/header/Header';

function App() {
  return (
    <Container>
      <Header />
      <DrugList />
    </Container>
  );
}

export default App;
