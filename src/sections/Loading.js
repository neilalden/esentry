import React, {Fragment, useContext} from 'react';
import {Text, View} from 'react-native';
import {LanguageContext} from '../context/LanguageContext';
import WavesIco from '../icons/WavesIco';
import content from '../utils/content';
import styles from '../utils/styles';

const Loading = () => {
  const {language} = useContext(LanguageContext);
  return (
    <Fragment>
      <View style={styles.loadingContainer}>
        <Text style={styles.h1}>{content[language].LOADING}</Text>
      </View>
      <WavesIco width={'200%'} animate={true} />
    </Fragment>
  );
};

export default Loading;
