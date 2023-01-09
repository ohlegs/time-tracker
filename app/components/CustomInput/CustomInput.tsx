import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { close } from './../../helper/path';
import { BG_GREY } from '../../helper/colors';

interface Props {
  label: string
  callBack?: CallableFunction
  styleContainer?: object
  clearButtonMode?: boolean
  multiline?: boolean
  value?: string | undefined
}

export default function CustomInput(props: Props) {
  const [valueInput, setValueInput] = useState<string | null>(props?.value);
  useEffect(() => {
    if (props.callBack) {
      props.callBack(valueInput);
    }
  }, [valueInput]);

  return (
    <View style={styles.container}>
      <View style={[styles.wrapperTextInput, props?.styleContainer]}>
        <View style={styles.wrapper}>
          <TextInput
            multiline={props?.multiline}
            onChangeText={(value) => {
              setValueInput(value);
            }}
            placeholder={props?.label}
            placeholderTextColor={BG_GREY}
            scrollEnabled={true}
            style={[styles.input, props.label === 'Description' && { maxHeight: '100%' }]}

            value={valueInput}
          />
        </View>
        <View style={styles.separator} />
        { props?.clearButtonMode && <TouchableOpacity
          onPress={() => {
            setValueInput('');
          }}
          style={styles.pressebleImage}
        >
          <Image
            source={close}
            style={styles.cancelImage}
          />
        </TouchableOpacity>}
      </View>
    </View>
  );
}
