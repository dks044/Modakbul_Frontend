declare module '*.jpg'; // JPG 파일에 대한 타입 선언
declare module '*.jpeg'; // JPEG 파일에 대한 타입 선언
declare module '*.gif'; // GIF 파일에 대한 타입 선언
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module '*.png' {
  const value: any;
  export default value;
}
