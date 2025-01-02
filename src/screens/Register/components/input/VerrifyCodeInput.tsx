import {brandColor} from '@/constants';
import {responsiveWidth} from '@/utils/responsive';
import React, {useRef} from 'react';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {
  CodeBox,
  CodeText,
  CodeWrapper,
  VerrifyCodeInputWrapper,
} from '../../Register.Styles';
import {TextInput} from 'react-native';

interface VerrifyCodeInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const VerrifyCodeInput = ({...props}: VerrifyCodeInputProps) => {
  const inputRef = useRef<TextInput>(null);

  const handleCodeBoxPress = () => {
    inputRef.current?.focus();
  };

  return (
    <VerrifyCodeInputWrapper>
      <PaperTextInput
        ref={inputRef}
        value={props.value}
        mode="outlined"
        style={{
          backgroundColor: brandColor,
          color: brandColor,
          width: '100%',
          height: '100%',
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
        {[0, 1, 2, 3].map(index => (
          <CodeBox key={index} onTouchEnd={handleCodeBoxPress}>
            <CodeText>{props.value[index] ? props.value[index] : ''}</CodeText>
          </CodeBox>
        ))}
      </CodeWrapper>
    </VerrifyCodeInputWrapper>
  );
};

export default VerrifyCodeInput;
