import React from 'react';
import {ImageBackground, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import content from '../utils/content';
import styles, {WINDOWWIDTH} from '../utils/styles';

const TadlacLake = props => {
  // PROPS
  const language = props.language ?? 'ENGLISH';
  const coverSource = require('../assets/bg.jpg');
  const area1Color0 = props.areaColor?.area1Color0 ?? '#9cc0fa';
  const area1Color10 = props.areaColor?.area1Color10 ?? '#9cc0fa';
  const area2Color0 = props.areaColor?.area2Color0 ?? '#9cc0fa';
  const area2Color10 = props.areaColor?.area2Color10 ?? '#9cc0fa';
  const area3Color0 = props.areaColor?.area3Color0 ?? '#9cc0fa';
  const area3Color10 = props.areaColor?.area3Color10 ?? '#9cc0fa';
  const xml = `
<svg width="800" height="828" viewBox="0 0 800 828">
<g>
    <path fill="url(#grad1)" d="M 244.54 819.25 199.56 824.94 153.54 809.71 104.81 773.49 75.47 751.09 63.2 722.49 55.69 705.06 58.25 691.6 66.49 670.78 49.98 649.78 49.78 637.2 36.97 623.94 25.95 625.42 1 487.15 23.98 369.43 60.67 272.87 103.91 225.86 122.92 209.35 157.64 145.83 191.72 105.82 274.26 70.24 334.16 423.22 244.54 819.25 Z"/>
    <path fill="url(#grad2)" d="M 334.16 423.22 274.26 70.24 311.4 64.8 461.13 36.84 561.9 16.25 622.18 1 667.39 2.27 694.25 11.79 722.42 58.79 730.29 102 746.67 147.74 774.18 217.6 784.66 272.87 787.24 321.88 799 366.12 797.26 429.67 334.16 423.22 Z"/>
    <path fill="url(#grad3)" d="M 797.26 429.67 786.76 510.16 758.16 566.97 723.16 597.1 710.7 633.86 699.33 684.78 688.51 705.25 652.77 735.7 607.82 757.23 562.89 753.54 547.82 749.46 524.44 742.52 463.8 770.86 456.76 780.32 458.93 792.91 396.66 827.04 340.35 826.52 285.12 818.11 244.54 819.25 334.16 423.22 797.26 429.67 Z"/>
</g>

<defs>
    <radialGradient id="grad1" fx="0%" fy="50%" r="150%" cx="2%" cy="50%">
    <stop offset="0%" style="stop-color: ${area1Color0}" /> 
    <stop offset="10%" style="stop-color: ${area1Color10}" />
    <stop offset="100%" style="stop-color: #fff" />
    </radialGradient>
    <radialGradient id="grad2" fx="75%" fy="0%" r="150%" cx="75%" cy="2%">
    <stop offset="0%" style="stop-color: ${area2Color0}" /> 
    <stop offset="10%" style="stop-color: ${area2Color10}" /> 
    <stop offset="100%" style="stop-color: #fff" />
    </radialGradient>
    <radialGradient id="grad3" fx="75%" fy="75%" r="150%" cx="80%" cy="80%"> 
    <stop offset="0%" style="stop-color: ${area3Color0}" /> 
    <stop offset="10%" style="stop-color: ${area3Color10}" /> 
    <stop offset="100%" style="stop-color: #fff" />
    </radialGradient>
    <linearGradient id="linear-grad" x1="0%" y1="0%" x2="0%" y2="100%"> 
    <stop offset="10%" style="stop-color: red; stop-opacity: 1" /> 
    <stop offset="20%" style="stop-color: #ff4500; stop-opacity: 1" /> 
    <stop offset="30%" style="stop-color: orange; stop-opacity: 1" /> 
    <stop offset="40%" style="stop-color: gold; stop-opacity: 1" /> 
    <stop offset="50%" style="stop-color: yellow; stop-opacity: 1" /> 
    <stop offset="60%" style="stop-color: #ccff33; stop-opacity: 1" /> 
    <stop offset="70%" style="stop-color: #66ff33; stop-opacity: 1" /> 
    <stop offset="80%" style="stop-color: #00ff99; stop-opacity: 1" /> 
    <stop offset="90%" style="stop-color: #33cccc; stop-opacity: 1" /> 
    <stop offset="100%" style="stop-color: #0099cc; stop-opacity: 1" />
    </linearGradient>
</defs>
<text x="380" y="410"  style="fill: #000; font-size: 48px;fontFamily: 'Nunito-Bold';">${content[language].HEADERTITLE}</text>
<text x="50" y="430" class="area-text" style="fill: #000; font-size: 36px;fontFamily: 'Nunito-Bold';">${content[language].AREA} 1</text>
<text x="500" y="80" class="area-text" style="fill: #000; font-size: 36px;fontFamily: 'Nunito-Bold';">${content[language].AREA} 2</text>
<text x="500" y="700" class="area-text" style="fill: #000; font-size: 36px;fontFamily: 'Nunito-Bold';">${content[language].AREA} 3</text>
</svg>
`;
  return (
    <View style={[styles.viewCenter, styles.pb6]}>
      <ImageBackground
        resizeMode="cover"
        source={coverSource}
        style={styles.mapCoverImage}
      />
      <SvgXml xml={xml} width={WINDOWWIDTH} height={300} />
    </View>
  );
};

export default React.memo(TadlacLake);
