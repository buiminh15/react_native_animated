import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, TextStyle} from 'react-native';
import {StyleProp} from 'react-native';
type TextViewProps = PropsWithChildren<{
  margin?: number;
  padding?: number;
  bgColor?: string;
  color?: string;
  size?: number;
  bold?: boolean;
  center?: boolean;
  style?: StyleProp<TextStyle>;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
}>;

function TextView({children, ...props}: TextViewProps) {
  console.log('📢 [TextView.tsx:23]', props.style);
  const styleComponent: StyleProp<TextStyle>[] = [
    {fontSize: 14},
    props.margin && {margin: props.margin},
    props.padding && {padding: props.padding},
    props.bgColor && {backgroundColor: props.bgColor},
    props.color && {color: props.color},
    props.size && {fontSize: props.size},
    props.bold && {fontWeight: 'bold'},
    props.center && {textAlign: 'center'},
    props.h1 && {fontSize: 44, fontWeight: 'bold'},
    props.h2 && {fontSize: 38, fontWeight: 'bold'},
    props.h3 && {fontSize: 32, fontWeight: 'bold'},
    props.h4 && {fontSize: 28, fontWeight: 'bold'},
    props.h5 && {fontSize: 22, fontWeight: 'bold'},
    props.h6 && {fontSize: 18, fontWeight: 'bold'},
    props.style && props.style,
  ];
  return (
    <Text style={styleComponent} {...props}>
      {children}
    </Text>
  );
}

export default TextView;
