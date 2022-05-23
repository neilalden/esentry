import React, {Fragment, useContext, useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {LanguageContext} from '../context/LanguageContext';
import {DataContext} from '../context/DataContext';
import styles from '../utils/styles';
import content from '../utils/content';
import TemperatureIco from '../icons/TemperatureIco';
import Loading from './Loading';
import PHIco from '../icons/PHIco';
import GestureRecognizer from 'react-native-swipe-gestures';
import AmmoniumIco from '../icons/AmmoniumIco';
import SalinityIco from '../icons/SalinityIco';
import NitrateIco from '../icons/NitrateIco';
import ChlorideIco from '../icons/ChlorideIco';

const Header = () => {
  // CONSTANTS AND HOOKS
  const {language, setLanguagePreference} = useContext(LanguageContext);
  const {data, currentParameter, setCurrentParameter, changeCurrentParameter} =
    useContext(DataContext);
  const parameter = data[currentParameter];
  const coverSource = require('../assets/tadlac_lake.jpg');

  const onSwipeLeft = () => {
    if (currentParameter < data.length - 1)
      setCurrentParameter(prev => prev + 1);
    else setCurrentParameter(0);
  };

  const onSwipeRight = () => {
    if (currentParameter > 0) setCurrentParameter(prev => prev - 1);
    else setCurrentParameter(data.length - 1);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  if (!parameter) return <Loading />;
  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={config}
      style={[styles.headerContainer, styles.viewCenter]}>
      <ImageBackground
        source={coverSource}
        style={styles.coverImage}
        resizeMode="cover"
      />
      <HeaderNav
        content={content}
        language={language}
        setLanguagePreference={setLanguagePreference}
      />
      <Jumbotron parameter={parameter} language={language} />
      <JumbotronNav
        currentParameter={currentParameter}
        changeCurrentParameter={changeCurrentParameter}
      />
    </GestureRecognizer>
  );
};

const HeaderNav = props => {
  const content = props.content;
  const language = props.language;
  const setLanguagePreference = props.setLanguagePreference;
  return (
    <View style={[styles.flexRow, styles.spaceBetween, styles.w100]}>
      <Text style={[styles.h2, styles.pv6, styles.ph6]}>
        {content[`${language}`].headerTitle}
      </Text>
      <TouchableOpacity
        style={[styles.pv6, styles.ph6]}
        onPress={setLanguagePreference}>
        <Text style={styles.h2}>{content[`${language}`].flag}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Jumbotron = props => {
  const parameter = props.parameter;
  const language = props.language;
  return (
    <View style={[styles.glass, styles.viewCenter, styles.spaceBetween]}>
      <View style={[styles.flexRow, styles.mv6]}>
        <HeaderIco paramName={parameter.name} level={parameter.getLevel()} />
        <Text
          style={styles.h1}>{`${parameter.average} ${parameter.unit}`}</Text>
      </View>
      <Text style={[styles.p1, styles.textCenter]}>
        {parameter.getDescription(language)}
      </Text>
    </View>
  );
};

const JumbotronNav = props => {
  const currentParameter = props.currentParameter;
  const changeCurrentParameter = props.changeCurrentParameter;
  return (
    <View style={styles.jumbotronNavContainer}>
      <TouchableOpacity
        style={styles.jumbotronNavButtonContainer}
        onPress={() => changeCurrentParameter(0)}>
        <View
          style={[
            currentParameter === 0
              ? styles.jumbotronNavButtonActive
              : styles.jumbotronNavButton,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.jumbotronNavButtonContainer}
        onPress={() => changeCurrentParameter(1)}>
        <View
          style={[
            currentParameter === 1
              ? styles.jumbotronNavButtonActive
              : styles.jumbotronNavButton,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.jumbotronNavButtonContainer}
        onPress={() => changeCurrentParameter(2)}>
        <View
          style={[
            currentParameter === 2
              ? styles.jumbotronNavButtonActive
              : styles.jumbotronNavButton,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.jumbotronNavButtonContainer}
        onPress={() => changeCurrentParameter(3)}>
        <View
          style={[
            currentParameter === 3
              ? styles.jumbotronNavButtonActive
              : styles.jumbotronNavButton,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.jumbotronNavButtonContainer}
        onPress={() => changeCurrentParameter(4)}>
        <View
          style={[
            currentParameter === 4
              ? styles.jumbotronNavButtonActive
              : styles.jumbotronNavButton,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.jumbotronNavButtonContainer}
        onPress={() => changeCurrentParameter(5)}>
        <View
          style={[
            currentParameter === 5
              ? styles.jumbotronNavButtonActive
              : styles.jumbotronNavButton,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const HeaderIco = props => {
  const paramName = props.paramName;
  const level = props.level;
  if (paramName === 'Temperature')
    return <TemperatureIco height={'100%'} level={level} animate={true} />;
  if (paramName === 'pH')
    return <PHIco height={'100%'} level={level} animate={true} />;
  if (paramName === 'Salinity')
    return <SalinityIco height={'100%'} level={level} animate={true} />;
  if (paramName === 'Ammonium')
    return <AmmoniumIco height={'100%'} level={level} animate={true} />;
  if (paramName === 'Nitrate')
    return <NitrateIco height={'100%'} level={level} animate={true} />;
  if (paramName === 'Chloride')
    return <ChlorideIco height={'100%'} level={level} animate={true} />;

  return <Fragment></Fragment>;
};

export default Header;
