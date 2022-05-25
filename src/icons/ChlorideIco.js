import React, {useEffect, useRef, useState} from 'react';
import {SvgXml} from 'react-native-svg';
const ChlorideIco = props => {
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
  <svg width="80" height="96" viewBox="-1 -1 80 100">
  <mask fill="white">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M63.9076 31.625C63.9439 31.5889 63.9803 31.5528 64.0165 31.5165L37.5 5L10.9835 31.5165C11.0197 31.5528 11.0561 31.5889 11.0924 31.625C4.24228 38.4196 0 47.8394 0 58.25C0 78.9607 16.7893 95.75 37.5 95.75C58.2107 95.75 75 78.9607 75 58.25C75 47.8394 70.7577 38.4196 63.9076 31.625Z"/>
  </mask>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M63.9076 31.625C63.9439 31.5889 63.9803 31.5528 64.0165 31.5165L37.5 5L10.9835 31.5165C11.0197 31.5528 11.0561 31.5889 11.0924 31.625C4.24228 38.4196 0 47.8394 0 58.25C0 78.9607 16.7893 95.75 37.5 95.75C58.2107 95.75 75 78.9607 75 58.25C75 47.8394 70.7577 38.4196 63.9076 31.625Z" fill="#5DE1C4"/>
  <path d="M64.0165 31.5165L64.7236 32.2236L65.4307 31.5165L64.7236 30.8094L64.0165 31.5165ZM63.9076 31.625L63.2034 30.915L62.4875 31.625L63.2033 32.335L63.9076 31.625ZM37.5 5L38.2071 4.29289L37.5 3.58579L36.7929 4.29289L37.5 5ZM10.9835 31.5165L10.2764 30.8094L9.56929 31.5165L10.2764 32.2236L10.9835 31.5165ZM11.0924 31.625L11.7967 32.335L12.5125 31.625L11.7966 30.915L11.0924 31.625ZM63.3094 30.8094C63.2741 30.8447 63.2388 30.8799 63.2034 30.915L64.6118 32.335C64.6491 32.2979 64.6864 32.2608 64.7236 32.2236L63.3094 30.8094ZM36.7929 5.70711L63.3094 32.2236L64.7236 30.8094L38.2071 4.29289L36.7929 5.70711ZM11.6906 32.2236L38.2071 5.70711L36.7929 4.29289L10.2764 30.8094L11.6906 32.2236ZM11.7966 30.915C11.7612 30.8799 11.7259 30.8447 11.6906 30.8094L10.2764 32.2236C10.3136 32.2608 10.3509 32.298 10.3882 32.335L11.7966 30.915ZM1 58.25C1 48.1167 5.12804 38.9495 11.7967 32.335L10.3882 30.915C3.35652 37.8896 -1 47.562 -1 58.25H1ZM37.5 94.75C17.3416 94.75 1 78.4084 1 58.25H-1C-1 79.513 16.237 96.75 37.5 96.75V94.75ZM74 58.25C74 78.4084 57.6584 94.75 37.5 94.75V96.75C58.763 96.75 76 79.513 76 58.25H74ZM63.2033 32.335C69.872 38.9495 74 48.1167 74 58.25H76C76 47.562 71.6435 37.8896 64.6118 30.915L63.2033 32.335Z" fill="black" mask="url(#path-1-inside-1_137_82)"/>
  <path d="M31.192 78.734C29.3893 78.734 27.8467 78.3527 26.564 77.59C25.2813 76.8273 24.2933 75.744 23.6 74.34C22.924 72.936 22.586 71.2633 22.586 69.322C22.586 67.866 22.7767 66.566 23.158 65.422C23.5567 64.2607 24.12 63.2813 24.848 62.484C25.5933 61.6693 26.5033 61.0453 27.578 60.612C28.6527 60.1613 29.8573 59.936 31.192 59.936C32.2667 59.936 33.2893 60.092 34.26 60.404C35.2307 60.6987 36.0713 61.1407 36.782 61.73C37.0073 61.9033 37.1547 62.1027 37.224 62.328C37.3107 62.536 37.3193 62.744 37.25 62.952C37.198 63.1427 37.094 63.3073 36.938 63.446C36.7993 63.5673 36.626 63.628 36.418 63.628C36.21 63.628 35.976 63.5413 35.716 63.368C35.092 62.8653 34.4073 62.4927 33.662 62.25C32.9167 62.0073 32.1107 61.886 31.244 61.886C29.8747 61.886 28.7133 62.1807 27.76 62.77C26.8067 63.342 26.0873 64.1827 25.602 65.292C25.1167 66.4013 24.874 67.7447 24.874 69.322C24.874 70.8993 25.1167 72.2513 25.602 73.378C26.0873 74.4873 26.8067 75.3367 27.76 75.926C28.7133 76.498 29.8747 76.784 31.244 76.784C32.0933 76.784 32.8993 76.6627 33.662 76.42C34.4247 76.16 35.1267 75.7787 35.768 75.276C36.028 75.1027 36.262 75.0247 36.47 75.042C36.678 75.042 36.8513 75.1027 36.99 75.224C37.1287 75.3453 37.224 75.5013 37.276 75.692C37.3453 75.8827 37.3453 76.082 37.276 76.29C37.224 76.498 37.094 76.68 36.886 76.836C36.158 77.46 35.3 77.9367 34.312 78.266C33.3413 78.578 32.3013 78.734 31.192 78.734ZM44.3181 78.734C43.0701 78.734 42.1168 78.3527 41.4581 77.59C40.7995 76.8273 40.4701 75.7353 40.4701 74.314V61.054C40.4701 60.7073 40.5568 60.4473 40.7301 60.274C40.9035 60.0833 41.1635 59.988 41.5101 59.988C41.8395 59.988 42.0995 60.0833 42.2901 60.274C42.4808 60.4473 42.5761 60.7073 42.5761 61.054V74.158C42.5761 75.094 42.7581 75.796 43.1221 76.264C43.5035 76.7147 44.0581 76.94 44.7861 76.94C44.9421 76.94 45.0808 76.9313 45.2021 76.914C45.3235 76.8967 45.4448 76.888 45.5661 76.888C45.7568 76.8707 45.8868 76.914 45.9561 77.018C46.0428 77.122 46.0861 77.33 46.0861 77.642C46.0861 77.954 46.0168 78.188 45.8781 78.344C45.7395 78.5 45.5141 78.604 45.2021 78.656C45.0635 78.6733 44.9161 78.6907 44.7601 78.708C44.6041 78.7253 44.4568 78.734 44.3181 78.734ZM47.0975 63.706V62.354H54.0655V63.706H47.0975Z" fill="black"/>
  <g y="${count - 2}" fill="none">
  <path fill="${fill1}" d="M66.9393 32.0607C67.5251 32.6464 68.4749 32.6464 69.0607 32.0607L78.6066 22.5147C79.1924 21.9289 79.1924 20.9792 78.6066 20.3934C78.0208 19.8076 77.0711 19.8076 76.4853 20.3934L68 28.8787L59.5147 20.3934C58.9289 19.8076 57.9792 19.8076 57.3934 20.3934C56.8076 20.9792 56.8076 21.9289 57.3934 22.5147L66.9393 32.0607ZM69.5 16C69.5 15.1716 68.8284 14.5 68 14.5C67.1716 14.5 66.5 15.1716 66.5 16H69.5ZM69.5 31V16H66.5V31H69.5Z"/>
  <path fill="${fill1}" d="M13.9393 23.0607C14.5251 23.6464 15.4749 23.6464 16.0607 23.0607L25.6066 13.5147C26.1924 12.9289 26.1924 11.9792 25.6066 11.3934C25.0208 10.8076 24.0711 10.8076 23.4853 11.3934L15 19.8787L6.51472 11.3934C5.92893 10.8076 4.97918 10.8076 4.3934 11.3934C3.80761 11.9792 3.80761 12.9289 4.3934 13.5147L13.9393 23.0607ZM16.5 2C16.5 1.17157 15.8284 0.5 15 0.5C14.1716 0.5 13.5 1.17157 13.5 2H16.5ZM16.5 22V2H13.5L13.5 22H16.5Z"/>
  </g>
  <g y="${count}" fill="none">
  <path fill="${fill3}" d="M66.5 31C66.5 31.8284 67.1716 32.5 68 32.5C68.8284 32.5 69.5 31.8284 69.5 31H66.5ZM69.0607 14.9393C68.4749 14.3536 67.5251 14.3536 66.9393 14.9393L57.3934 24.4853C56.8076 25.0711 56.8076 26.0208 57.3934 26.6066C57.9792 27.1924 58.9289 27.1924 59.5147 26.6066L68 18.1213L76.4853 26.6066C77.0711 27.1924 78.0208 27.1924 78.6066 26.6066C79.1924 26.0208 79.1924 25.0711 78.6066 24.4853L69.0607 14.9393ZM69.5 31V16H66.5V31H69.5Z"/>
  <path fill="${fill3}" d="M13.5 22C13.5 22.8284 14.1716 23.5 15 23.5C15.8284 23.5 16.5 22.8284 16.5 22H13.5ZM16.0607 0.93934C15.4749 0.353553 14.5251 0.353553 13.9393 0.93934L4.3934 10.4853C3.80761 11.0711 3.80761 12.0208 4.3934 12.6066C4.97918 13.1924 5.92893 13.1924 6.51472 12.6066L15 4.12132L23.4853 12.6066C24.0711 13.1924 25.0208 13.1924 25.6066 12.6066C26.1924 12.0208 26.1924 11.0711 25.6066 10.4853L16.0607 0.93934ZM16.5 22V2H13.5L13.5 22H16.5Z"/>
  </g>
  </svg>
  `;

  return <SvgXml xml={xml} width={width} height={height} />;
};

export default ChlorideIco;