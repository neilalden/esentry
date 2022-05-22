import React from 'react';
import {Text, View} from 'react-native';
import styles from '../utils/styles';

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.h1}>Loading...</Text>
    </View>
  );
};

export default Loading;
