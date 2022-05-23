import React, {Fragment, useState} from 'react';
import LanguageContextProvider from './src/context/LanguageContext';
import DataContextProvider from './src/context/DataContext';
import Header from './src/sections/Header';
import WavesIco from './src/icons/WavesIco';

const App = () => {
  console.log('Rerendering App.js');
  return (
    <Fragment>
      <LanguageContextProvider>
        <DataContextProvider>
          <Header />
          <WavesIco width={'200%'} animate={true} />
        </DataContextProvider>
      </LanguageContextProvider>
    </Fragment>
  );
};

export default App;
