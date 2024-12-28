import {brandColor} from '@/constants';
import {responsiveWidth} from '@/utils/responsive';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {
  CodeBox,
  CodeText,
  CodeWrapper,
  VerrifyCodeInputWrapper,
} from '../../Register.Styles';

interface VerrifyCodeInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const VerrifyCodeInput = ({...props}: VerrifyCodeInputProps) => {
  return (
    <VerrifyCodeInputWrapper>
      <TextInput
        value={props.value}
        mode="outlined"
        style={{
          backgroundColor: brandColor,
          color: brandColor,
          width: '100%',
          position: 'absolute',
        }}
        outlineColor={brandColor}
        activeOutlineColor={brandColor}
        outlineStyle={{borderRadius: responsiveWidth(3)}}
        onChangeText={text => {
          props.setValue(text);
          //Test
          console.log(props.value);
        }}
        textColor={brandColor}
        maxLength={4}
      />
      <CodeWrapper>
        <CodeBox>
          <CodeText>{props.value[0] ? props.value[0] : ''}</CodeText>
        </CodeBox>
        <CodeBox>
          <CodeText>{props.value[1] ? props.value[1] : ''}</CodeText>
        </CodeBox>
        <CodeBox>
          <CodeText>{props.value[2] ? props.value[2] : ''}</CodeText>
        </CodeBox>
        <CodeBox>
          <CodeText>{props.value[3] ? props.value[3] : ''}</CodeText>
        </CodeBox>
      </CodeWrapper>
    </VerrifyCodeInputWrapper>
  );
};

export default VerrifyCodeInput;
