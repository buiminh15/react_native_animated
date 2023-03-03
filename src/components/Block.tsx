import type {PropsWithChildren} from 'react';
import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type BlockProps = PropsWithChildren<{
  block?: boolean;
  margin?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  width?: number | string;
  height?: number | string;
  border?: boolean;
  borderWidth?: number;
  borderColor?: string;
  centered?: boolean;
  color?: string;
  direction?: 'row' | 'column';
  middle?: boolean;
  justifyContent?:
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'center'
    | 'space-evenly';
  borderRadius?: number;
  shadow?: boolean;
  style?: StyleProp<ViewStyle>;
}>;

function Block({children, ...props}: BlockProps) {
  const styleComponent: StyleProp<ViewStyle> = [
    props.block && styles.block,
    props.margin && {margin: props.margin},
    props.padding && {padding: props.padding},
    props.width && {width: props.width},
    props.height && {height: props.height},
    props.border && {borderWidth: 1, borderColor: 'gray'},
    props.borderWidth && {borderWidth: props.borderWidth},
    props.borderColor && {borderColor: props.borderColor},
    props.color && {backgroundColor: props.color},
    props.centered && {justifyContent: 'center'},
    props.middle && {alignItems: 'center'},
    props.justifyContent && {justifyContent: props.justifyContent},
    props.direction && {flexDirection: props.direction},
    props.paddingHorizontal && {paddingHorizontal: props.paddingHorizontal},
    props.paddingVertical && {paddingVertical: props.paddingVertical},
    props.borderRadius && {borderRadius: props.borderRadius},
    props.shadow && {
      shadowOpacity: 0.12,
      shadowRadius: 15,
      shadowColor: '#000',
      shadowOffset: {height: 0, width: 0},
      elevation: 3,
    },
    props.style,
  ];
  return (
    <View style={styleComponent} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default Block;
