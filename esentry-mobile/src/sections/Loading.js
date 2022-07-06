import React, {Fragment, useContext} from 'react';
import {Text, View} from 'react-native';
import {LanguageContext} from '../context/LanguageContext';
import Waves from '../icons/Waves';
import content from '../utils/content';
import styles from '../utils/styles';

const Loading = () => {
  const {language} = useContext(LanguageContext);

  return (
    <Fragment>
      <View style={styles.loadingContainer}>
        <Text style={styles.h1}>{content[language].LOADING}</Text>
      </View>
      {/* <Waves width={'200%'} animate={true} loop={true} /> */}
    </Fragment>
  );
};

export default React.memo(Loading);
