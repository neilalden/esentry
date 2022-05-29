import React, {Fragment, useContext} from 'react';
import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LanguageContext} from '../context/LanguageContext';
import {DataContext} from '../context/DataContext';
import styles from '../utils/styles';
import content from '../utils/content';

const Header = () => {
  const {language, toggleLanguagePreference} = useContext(LanguageContext);
  const {data, currentParameter, changeCurrentParameter} =
    useContext(DataContext);
  const parameter = data[currentParameter];
  const coverSource = require('../assets/tadlac_lake.jpg');

  return (
    <View style={[styles.headerContainer, styles.viewCenter]}>
      <ImageBackground
        source={coverSource}
        style={styles.coverImage}
        resizeMode="cover"
      />
      <HeaderNav
        content={content}
        language={language}
        toggleLanguagePreference={toggleLanguagePreference}
      />
      <Jumbotron parameter={parameter} language={language} />
      <JumbotronNav
        currentParameter={currentParameter}
        changeCurrentParameter={changeCurrentParameter}
      />
    </View>
  );
};

const HeaderNav = React.memo(props => {
  const content = props.content;
  const language = props.language;
  const toggleLanguagePreference = props.toggleLanguagePreference;
  return (
    <View style={[styles.flexRow, styles.spaceBetween, styles.w100]}>
      <Text style={[styles.h2, styles.pv6, styles.ph6]}>
        {content[language].HEADERTITLE}
      </Text>
      <TouchableOpacity
        style={[styles.pv6, styles.ph6]}
        onPress={toggleLanguagePreference}>
        <Text style={styles.h2}>{content[language].FLAG}</Text>
      </TouchableOpacity>
    </View>
  );
});

const Jumbotron = React.memo(props => {
  const parameter = props.parameter;
  const language = props.language;

  const prop = {
    paramName: parameter.name,
    level: parameter.getLevel(),
    animate: false,
  };
  return (
    <View
      style={[
        styles.glass,
        styles.viewCenter,
        styles.spaceBetween,
        {height: 150},
      ]}>
      <View style={[styles.flexRow, styles.mv6]}>
        {parameter.getIcon(prop)}
        <Text
          style={styles.h1}>{`${parameter.average} ${parameter.unit}`}</Text>
      </View>
      <Text style={[styles.p1, styles.textCenter]}>
        {parameter.getDescription(language)}
      </Text>
    </View>
  );
});

const JumbotronNav = React.memo(props => {
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
});

export default React.memo(Header);
