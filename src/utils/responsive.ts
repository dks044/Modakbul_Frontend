import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const responsiveWidth = (percentage: number): number =>
  (width * percentage) / 100;
const responsiveHeight = (percentage: number): number =>
  (height * percentage) / 100;

export {responsiveWidth, responsiveHeight};
