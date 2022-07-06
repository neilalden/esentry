import React, {Fragment, useState} from 'react';
import LanguageContextProvider from './src/context/LanguageContext';
import DataContextProvider from './src/context/DataContext';
import Main from './src/sections/Main';

const App = () => {
  return (
    <Fragment>
      <LanguageContextProvider>
        <DataContextProvider>
          <Main />
        </DataContextProvider>
      </LanguageContextProvider>
    </Fragment>
  );
};

export default App;
