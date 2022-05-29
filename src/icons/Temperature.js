import React, {useEffect, useRef, useState} from 'react';
import {SvgXml} from 'react-native-svg';
const Temperature = props => {
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

  const fill1 = level === 1 ? '#FF0000' : 'none';
  const fill2 = level === 2 ? '#FF0000' : 'none';
  const fill3 = level === 3 ? '#FF0000' : 'none';
  const y1 = 71;
  const y2 = 40;
  const y3 = 8.79999;
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
  <svg width="40" height="109" viewBox="-1 -1 44 113">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6 0C14.0772 0 9.6 4.47715 9.6 10V70C9.6 70.5561 9.6454 71.1016 9.73269 71.6331C3.9024 75.1276 0 81.5081 0 88.8C0 99.8457 8.9543 108.8 20 108.8C31.0457 108.8 40 99.8457 40 88.8C40 81.2038 35.7651 74.5966 29.5274 71.2108C29.5753 70.8139 29.6 70.4098 29.6 70V10C29.6 4.47715 25.1228 0 19.6 0Z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6 0C14.0772 0 9.6 4.47715 9.6 10V70C9.6 70.5561 9.6454 71.1016 9.73269 71.6331C3.9024 75.1276 0 81.5081 0 88.8C0 99.8457 8.9543 108.8 20 108.8C31.0457 108.8 40 99.8457 40 88.8C40 81.2038 35.7651 74.5966 29.5274 71.2108C29.5753 70.8139 29.6 70.4098 29.6 70V10C29.6 4.47715 25.1228 0 19.6 0Z" fill="white"/>
      <path d="M9.73269 71.6331L10.2468 72.4908L10.8296 72.1415L10.7195 71.471L9.73269 71.6331ZM29.5274 71.2108L28.5346 71.091L28.4532 71.7655L29.0504 72.0896L29.5274 71.2108ZM10.6 10C10.6 5.02944 14.6294 1 19.6 1V-1C13.5249 -1 8.6 3.92487 8.6 10H10.6ZM10.6 70V10H8.6V70H10.6ZM10.7195 71.471C10.6409 70.9929 10.6 70.5016 10.6 70H8.6C8.6 70.6106 8.64985 71.2104 8.74591 71.7951L10.7195 71.471ZM1 88.8C1 81.8739 4.7054 75.8122 10.2468 72.4908L9.21859 70.7753C3.09939 74.443 -1 81.1423 -1 88.8H1ZM20 107.8C9.50659 107.8 1 99.2934 1 88.8H-1C-1 100.398 8.40202 109.8 20 109.8V107.8ZM39 88.8C39 99.2934 30.4934 107.8 20 107.8V109.8C31.598 109.8 41 100.398 41 88.8H39ZM29.0504 72.0896C34.9787 75.3076 39 81.5849 39 88.8H41C41 80.8226 36.5515 73.8857 30.0045 70.3319L29.0504 72.0896ZM28.6 70C28.6 70.3697 28.5778 70.7337 28.5346 71.091L30.5202 71.3306C30.5729 70.894 30.6 70.45 30.6 70H28.6ZM28.6 10V70H30.6V10H28.6ZM19.6 1C24.5706 1 28.6 5.02944 28.6 10H30.6C30.6 3.92487 25.6751 -1 19.6 -1V1Z" fill="black"/>
      <circle cx="19.6" cy="88.4" r="10" fill="#FF0000"/>
      <line x1="21.6" y1="70.7" x2="29.6" y2="70.7" stroke="black"/>
      <line x1="21.6" y1="39.5" x2="29.6" y2="39.5" stroke="black"/>
      <line x1="21.6" y1="8.29999" x2="29.6" y2="8.29999" stroke="black"/>
      <rect x="17.6" y="${y1 + count}" width="4" height="9.6" fill="${fill1}"/>
      <rect x="17.6" y="${y2 + count}" width="4" height="40.8" fill="${fill2}"/>
      <rect x="17.6" y="${y3 + count}" width="4" height="72" fill="${fill3}"/>
    </svg>
    `;

  return <SvgXml xml={xml} width={width} height={height} />;
};

export default React.memo(Temperature);
