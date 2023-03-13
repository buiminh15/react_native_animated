import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

type CustomTextProps = {
  textType?: 'regular' | 'bold' | 'medium';
};

const CustomText: FC<CustomTextProps> = ({
  children,
  textType,
  style,
  ...props
}) => {
  let textStyle: {};
  switch (textType) {
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    case 'medium':
      textStyle = styles.medium;
      break;
    default:
      textStyle = styles.regular;
      break;
  }
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <Text style={[textStyle, {...passedStyles}]} {...props}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  regular: {
    fontFamily: 'JetBrainsMono-Regular',
  },
  bold: {
    fontFamily: 'JetBrainsMono-Bold',
  },
  medium: {
    fontFamily: 'JetBrainsMono-Medium',
  },
});
export default CustomText;
