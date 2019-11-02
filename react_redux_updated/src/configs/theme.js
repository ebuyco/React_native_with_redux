import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

module.exports = {
  $rem: 10,

  $windowWidth: width,
  $windowHeight: height,

  $whiteColorDefault: '#FFF',
  $whiteColor2: '#F5F5F5',

  $primaryColor: '#0A51A8',

  $errorColor: '#D50002',
};
