import {
  blackColor,
  defaultFont,
  subBrandColor3,
  warnColor,
  whiteColor,
} from '@/constants';
import React from 'react';
import {Text, View} from 'react-native';

import {ToastConfig} from 'react-native-toast-message';

const CustomToastConfig: ToastConfig = {
  // 성공 메시지
  success: ({text2}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: subBrandColor3,
        padding: 10,
        borderRadius: 18,
      }}>
      {text2 && (
        <Text
          style={{
            fontFamily: defaultFont,
            color: whiteColor,
            marginLeft: 10,
          }}>
          {text2}
        </Text>
      )}
    </View>
  ),

  // 오류 메시지
  error: ({text2}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: warnColor,
        padding: 10,
        borderRadius: 18,
      }}>
      {/* <Text
        style={{
          fontFamily: defaultFont,
          color: whiteColor,
        }}>
        {text1}
      </Text> */}
      {text2 && (
        <Text
          style={{
            fontFamily: defaultFont,
            color: whiteColor,
            marginLeft: 10,
          }}>
          {text2}
        </Text>
      )}
    </View>
  ),

  // 정보 메시지
  info: ({text2}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: blackColor,
        padding: 10,
        borderRadius: 18,
      }}>
      {/* <Text
        style={{
          fontFamily: defaultFont,
          color: whiteColor,
        }}>
        {text1}
      </Text> */}
      {text2 && (
        <Text
          style={{
            fontFamily: defaultFont,
            color: whiteColor,
            marginLeft: 10,
          }}>
          {text2}
        </Text>
      )}
    </View>
  ),
};

export default CustomToastConfig;
