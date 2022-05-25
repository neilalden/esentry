import React, {useEffect, useRef, useState} from 'react';
import {SvgXml} from 'react-native-svg';
const AmmoniumIco = props => {
  // PROPS
  const height = props.height ?? '15%';
  const width = props.width ?? 50;
  const level = props.level ?? 1;
  const animate = props.animate ?? false;
  const loop = props.loop ?? true;

  // CONSTANTS AND HOOKS
  const ADDER = 1;
  const LOOPS = 20;
  const loopCounterRef = useRef(0);
  const loopRef = useRef(false);
  const adderRef = useRef(ADDER);
  const [count, setCount] = useState(0);
  const ANIMATIONSPEED = 50;
  const ANIMATIONLENGTH = 10;

  const fill1 = level === 1 ? '#000000' : 'none';
  const fill3 = level === 3 ? '#000000' : 'none';
  useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + adderRef.current);
      if (loopRef.current) clearInterval(interval);
    }, ANIMATIONSPEED);
  }, []);

  if (count < 0) {
    adderRef.current = ADDER;
    loopCounterRef.current += 1;
  }
  if (count > ANIMATIONLENGTH) adderRef.current = -ADDER;
  if (loopCounterRef.current == LOOPS && !loop) loopRef.current = true;
  const xml = `
  <svg width="74" height="70" viewBox="-1 -1 74 74">
  <circle cx="11" cy="11" r="10" fill="#5DE1C4"/>
  <path d="M7.536 15.084C7.376 15.084 7.252 15.04 7.164 14.952C7.084 14.856 7.044 14.728 7.044 14.568V6.972C7.044 6.804 7.084 6.676 7.164 6.588C7.252 6.5 7.376 6.456 7.536 6.456C7.696 6.456 7.816 6.5 7.896 6.588C7.984 6.676 8.028 6.804 8.028 6.972V10.284H13.104V6.972C13.104 6.804 13.144 6.676 13.224 6.588C13.312 6.5 13.436 6.456 13.596 6.456C13.756 6.456 13.876 6.5 13.956 6.588C14.044 6.676 14.088 6.804 14.088 6.972V14.568C14.088 14.728 14.044 14.856 13.956 14.952C13.876 15.04 13.756 15.084 13.596 15.084C13.436 15.084 13.312 15.04 13.224 14.952C13.144 14.856 13.104 14.728 13.104 14.568V11.136H8.028V14.568C8.028 14.728 7.988 14.856 7.908 14.952C7.828 15.04 7.704 15.084 7.536 15.084Z" fill="black"/>
  <circle cx="35" cy="36" r="15" fill="#B3DAFE"/>
  <path d="M31.016 42.112C30.8133 42.112 30.6587 42.0587 30.552 41.952C30.4453 41.8347 30.392 41.6693 30.392 41.456V31.28C30.392 31.0667 30.4453 30.9013 30.552 30.784C30.6587 30.6667 30.7973 30.608 30.968 30.608C31.1387 30.608 31.2613 30.64 31.336 30.704C31.4213 30.7573 31.5173 30.8587 31.624 31.008L38.6 40.304H38.216V31.248C38.216 31.0453 38.2693 30.8907 38.376 30.784C38.4827 30.6667 38.6373 30.608 38.84 30.608C39.032 30.608 39.176 30.6667 39.272 30.784C39.3787 30.8907 39.432 31.0453 39.432 31.248V41.472C39.432 41.6747 39.384 41.8347 39.288 41.952C39.2027 42.0587 39.0747 42.112 38.904 42.112C38.744 42.112 38.616 42.08 38.52 42.016C38.424 41.952 38.3227 41.8507 38.216 41.712L31.256 32.416H31.624V41.456C31.624 41.6693 31.5707 41.8347 31.464 41.952C31.3573 42.0587 31.208 42.112 31.016 42.112Z" fill="black"/>
  <circle cx="10" cy="60" r="10" fill="#5DE1C4"/>
  <path d="M6.536 64.084C6.376 64.084 6.252 64.04 6.164 63.952C6.084 63.856 6.044 63.728 6.044 63.568V55.972C6.044 55.804 6.084 55.676 6.164 55.588C6.252 55.5 6.376 55.456 6.536 55.456C6.696 55.456 6.816 55.5 6.896 55.588C6.984 55.676 7.028 55.804 7.028 55.972V59.284H12.104V55.972C12.104 55.804 12.144 55.676 12.224 55.588C12.312 55.5 12.436 55.456 12.596 55.456C12.756 55.456 12.876 55.5 12.956 55.588C13.044 55.676 13.088 55.804 13.088 55.972V63.568C13.088 63.728 13.044 63.856 12.956 63.952C12.876 64.04 12.756 64.084 12.596 64.084C12.436 64.084 12.312 64.04 12.224 63.952C12.144 63.856 12.104 63.728 12.104 63.568V60.136H7.028V63.568C7.028 63.728 6.988 63.856 6.908 63.952C6.828 64.04 6.704 64.084 6.536 64.084Z" fill="black"/>
  <circle cx="60" cy="60" r="10" fill="#5DE1C4"/>
  <path d="M56.536 64.084C56.376 64.084 56.252 64.04 56.164 63.952C56.084 63.856 56.044 63.728 56.044 63.568V55.972C56.044 55.804 56.084 55.676 56.164 55.588C56.252 55.5 56.376 55.456 56.536 55.456C56.696 55.456 56.816 55.5 56.896 55.588C56.984 55.676 57.028 55.804 57.028 55.972V59.284H62.104V55.972C62.104 55.804 62.144 55.676 62.224 55.588C62.312 55.5 62.436 55.456 62.596 55.456C62.756 55.456 62.876 55.5 62.956 55.588C63.044 55.676 63.088 55.804 63.088 55.972V63.568C63.088 63.728 63.044 63.856 62.956 63.952C62.876 64.04 62.756 64.084 62.596 64.084C62.436 64.084 62.312 64.04 62.224 63.952C62.144 63.856 62.104 63.728 62.104 63.568V60.136H57.028V63.568C57.028 63.728 56.988 63.856 56.908 63.952C56.828 64.04 56.704 64.084 56.536 64.084Z" fill="black"/>
  <line x1="17.7071" y1="18.2929" x2="24.7782" y2="25.364" stroke="black" stroke-width="2"/>
  <line x1="45.7071" y1="46.2929" x2="52.7782" y2="53.364" stroke="black" stroke-width="2"/>
  <line x1="17.2929" y1="53.3639" x2="24.364" y2="46.2929" stroke="black" stroke-width="2"/>
  <g y="${count}" fill="none">
  <path fill="${fill1}" d="M42.9393 18.0607C43.5251 18.6464 44.4749 18.6464 45.0607 18.0607L54.6066 8.51472C55.1924 7.92893 55.1924 6.97918 54.6066 6.3934C54.0208 5.80761 53.0711 5.80761 52.4853 6.3934L44 14.8787L35.5147 6.3934C34.9289 5.80761 33.9792 5.80761 33.3934 6.3934C32.8076 6.97918 32.8076 7.92893 33.3934 8.51472L42.9393 18.0607ZM45.5 2C45.5 1.17157 44.8284 0.499999 44 0.499999C43.1716 0.499999 42.5 1.17157 42.5 2H45.5ZM45.5 17V2H42.5V17H45.5Z" />
  <path fill="${fill1}" d="M60.9393 42.0607C61.5251 42.6464 62.4749 42.6464 63.0607 42.0607L72.6066 32.5147C73.1924 31.9289 73.1924 30.9792 72.6066 30.3934C72.0208 29.8076 71.0711 29.8076 70.4853 30.3934L62 38.8787L53.5147 30.3934C52.9289 29.8076 51.9792 29.8076 51.3934 30.3934C50.8076 30.9792 50.8076 31.9289 51.3934 32.5147L60.9393 42.0607ZM63.5 21C63.5 20.1716 62.8284 19.5 62 19.5C61.1716 19.5 60.5 20.1716 60.5 21H63.5ZM63.5 41V21H60.5V41H63.5Z" />
  </g>
  <g y="${count}" fill="none">
  <path fill="${fill3}" d="M42.5 17C42.5 17.8284 43.1716 18.5 44 18.5C44.8284 18.5 45.5 17.8284 45.5 17H42.5ZM45.0607 0.939339C44.4749 0.353552 43.5251 0.353552 42.9393 0.939339L33.3934 10.4853C32.8076 11.0711 32.8076 12.0208 33.3934 12.6066C33.9792 13.1924 34.9289 13.1924 35.5147 12.6066L44 4.12132L52.4853 12.6066C53.0711 13.1924 54.0208 13.1924 54.6066 12.6066C55.1924 12.0208 55.1924 11.0711 54.6066 10.4853L45.0607 0.939339ZM45.5 17V2H42.5V17H45.5Z" />
  <path fill="${fill3}" d="M60.5 41C60.5 41.8284 61.1716 42.5 62 42.5C62.8284 42.5 63.5 41.8284 63.5 41H60.5ZM63.0607 19.9393C62.4749 19.3536 61.5251 19.3536 60.9393 19.9393L51.3934 29.4853C50.8076 30.0711 50.8076 31.0208 51.3934 31.6066C51.9792 32.1924 52.9289 32.1924 53.5147 31.6066L62 23.1213L70.4853 31.6066C71.0711 32.1924 72.0208 32.1924 72.6066 31.6066C73.1924 31.0208 73.1924 30.0711 72.6066 29.4853L63.0607 19.9393ZM63.5 41V21H60.5V41H63.5Z" />
  </g>
  </svg>
  
    `;

  return <SvgXml xml={xml} width={width} height={height} />;
};

export default AmmoniumIco;