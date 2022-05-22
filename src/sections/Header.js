import React, {Fragment, useContext} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {LanguageContext} from '../context/LanguageContext';
import {DataContext} from '../context/DataContext';
import styles from '../utils/styles';
import content from '../utils/content';
import WavesIco from '../icons/WavesIco';
import TemperatureIco from '../icons/TemperatureIco';
import Loading from './Loading';
import PHIco from '../icons/PHIco';

const Header = () => {
  // CONSTANTS AND HOOKS
  const {language, setLanguagePreference} = useContext(LanguageContext);
  const {data, currentParameter, changeCurrentParameter} =
    useContext(DataContext);
  const parameter = data[currentParameter];
  const coverSource = require('../assets/tadlac_lake.jpg');

  if (!parameter) return <Loading />;
  return (
    <View style={[styles.headerContainer, styles.viewCenter]}>
      <ImageBackground
        source={coverSource}
        style={styles.coverImage}
        resizeMode="cover"
      />

      <View
        style={[
          styles.flexRow,
          styles.spaceBetween,
          styles.w100,
          styles.mv6,
          styles.ph6,
        ]}>
        <Text style={styles.h2}>{content[`${language}`].headerTitle}</Text>
        <TouchableOpacity onPress={setLanguagePreference}>
          <Text style={styles.h2}>{content[`${language}`].flag}</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.glass,
          styles.viewCenter,
          styles.spaceBetween,
          styles.mv6,
        ]}>
        <View style={[styles.flexRow, styles.mv6]}>
          <HeaderIco param={parameter.name} level={parameter.getLevel()} />
          <Text
            style={styles.h1}>{`${parameter.average} ${parameter.unit}`}</Text>
        </View>
        <Text style={[styles.p2, styles.textCenter]}>
          {parameter.getDescription(language)}
        </Text>
      </View>
      <HeaderNav
        currentParameter={currentParameter}
        changeCurrentParameter={changeCurrentParameter}
      />
    </View>
  );
};

const HeaderNav = props => {
  const currentParameter = props.currentParameter;
  const changeCurrentParameter = props.changeCurrentParameter;
  return (
    <View style={styles.headerNavButtonContainer}>
      <TouchableOpacity onPress={() => changeCurrentParameter(0)}>
        <View
          style={[
            currentParameter == 0
              ? styles.headerNavButtonActive
              : styles.headerNavButton,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeCurrentParameter(1)}>
        <View
          style={[
            currentParameter == 1
              ? styles.headerNavButtonActive
              : styles.headerNavButton,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.headerNavButton} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.headerNavButton} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.headerNavButton} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.headerNavButton} />
      </TouchableOpacity>
    </View>
  );
};

const HeaderIco = props => {
  const param = props.param;
  const level = props.level;
  if (param === 'Temperature')
    return <TemperatureIco height={'100%'} level={level} animate={true} />;
  if (param === 'pH')
    return <PHIco height={'100%'} level={level} animate={true} />;
  return <Fragment></Fragment>;
};

export default Header;
