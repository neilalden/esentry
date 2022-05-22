import React, {Fragment} from 'react';
import LanguageContextProvider from './src/context/LanguageContext';
import Header from './src/sections/Header';
import WavesIco from './src/icons/WavesIco';
import DataContextProvider from './src/context/DataContext';
const App = () => {
  console.log('Rerendering app.js');
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
