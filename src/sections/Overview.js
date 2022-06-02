import React, {Fragment, useContext} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DataContext} from '../context/DataContext';
import {LanguageContext} from '../context/LanguageContext';
import content from '../utils/content';
import styles, {LIGHT1, PRIMARY1, PRIMARY2, PRIMARY3} from '../utils/styles';

const Overview = () => {
  const {language} = useContext(LanguageContext);
  const {data} = useContext(DataContext);

  return (
    <LinearGradient
      style={styles.pt6}
      colors={[PRIMARY1, PRIMARY1, PRIMARY1, PRIMARY2, PRIMARY3]}>
      <Text style={[styles.h2, styles.light1, styles.pb6, styles.ph6]}>
        {content[language].OVERVIEWTITLE}
      </Text>
      <View style={[styles.flexRow, styles.flexWrap, styles.jCenter]}>
        <View
          style={[
            styles.viewCenter,
            styles.backgroundColorPrimary3,
            styles.brCircle,
            styles.mv3,
            styles.mh3,
            {height: 150, width: 150},
          ]}>
          <View style={[styles.mt3, {height: 60}]}>
            {data[0].getIcon({
              paramName: data[0].name,
              level: data[0].getLevel(),
              height: '100%',
              animate: false,
            })}
          </View>
          <Text style={[styles.h2, styles.light1]}>{data[0].average}</Text>
          <Text style={[styles.p2, styles.light1]}>
            {content[language].TEMPERATURE}
          </Text>
        </View>
        <View
          style={[
            styles.viewCenter,
            styles.backgroundColorPrimary3,
            styles.brCircle,
            styles.mv3,
            styles.mh3,
            {height: 150, width: 150},
          ]}>
          <View style={[styles.mt3, {height: 60}]}>
            {data[1].getIcon({
              paramName: data[1].name,
              level: data[1].getLevel(),
              height: '100%',
              animate: false,
            })}
          </View>
          <Text style={[styles.h2, styles.light1]}>{data[1].average}</Text>
          <Text style={[styles.p2, styles.light1]}>{content[language].PH}</Text>
        </View>
        <View
          style={[
            styles.viewCenter,
            styles.backgroundColorPrimary2,
            styles.brCircle,
            styles.mv3,
            styles.mh3,
            {height: 150, width: 150},
          ]}>
          <View style={[styles.mt3, {height: 60}]}>
            {data[2].getIcon({
              paramName: data[2].name,
              level: data[2].getLevel(),
              height: '100%',
              animate: false,
            })}
          </View>
          <Text style={[styles.h2, styles.light1]}>{data[2].average}</Text>
          <Text style={[styles.p2, styles.light1]}>
            {content[language].SALINITY}
          </Text>
        </View>
        <View
          style={[
            styles.viewCenter,
            styles.backgroundColorPrimary2,
            styles.brCircle,
            styles.mv3,
            styles.mh3,
            {height: 150, width: 150},
          ]}>
          <View style={[styles.mt3, {height: 60}]}>
            {data[3].getIcon({
              paramName: data[3].name,
              level: data[3].getLevel(),
              height: '100%',
              animate: false,
            })}
          </View>
          <Text style={[styles.h2, styles.light1]}>{data[3].average}</Text>
          <Text style={[styles.p2, styles.light1]}>
            {content[language].AMMONIUM}
          </Text>
        </View>
        <View
          style={[
            styles.viewCenter,
            styles.backgroundColorPrimary1,
            styles.brCircle,
            styles.mv3,
            styles.mh3,
            {height: 150, width: 150},
          ]}>
          <View style={[styles.mt3, {height: 60}]}>
            {data[4].getIcon({
              paramName: data[4].name,
              level: data[4].getLevel(),
              height: '100%',
              animate: false,
            })}
          </View>
          <Text style={[styles.h2, styles.light1]}>{data[4].average}</Text>
          <Text style={[styles.p2, styles.light1]}>
            {content[language].NITRATE}
          </Text>
        </View>
        <View
          style={[
            styles.viewCenter,
            styles.backgroundColorPrimary1,
            styles.brCircle,
            {height: 150, width: 150},
          ]}>
          <View style={[styles.mt3, {height: 60}]}>
            {data[5].getIcon({
              paramName: data[5].name,
              level: data[5].getLevel(),
              height: '100%',
              animate: false,
            })}
          </View>
          <Text style={[styles.h2, styles.light1]}>{data[5].average}</Text>
          <Text style={[styles.p2, styles.light1]}>
            {content[language].CHLORIDE}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default React.memo(Overview);
