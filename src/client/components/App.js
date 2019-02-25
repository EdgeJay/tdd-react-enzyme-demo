import React, { lazy, Suspense } from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import Header from './base/Header';
import RegisterSection from './RegisterSection';

const ResultSection = lazy(() => import(/* webpackChunkName: "resultSection" */ './ResultSection'));

setConfig({ logLevel: 'debug', ignoreSFC: false });

const Container = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <Container>
      <Header />
      <RegisterSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ResultSection />
      </Suspense>
    </Container>
  );
}

export default hot(App);
