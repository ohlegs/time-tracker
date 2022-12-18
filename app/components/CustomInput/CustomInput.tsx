import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { close } from './../../helper/path';

interface Props {
  nameInput: string
  imagePlaceholder: any
}

export default function CustomInput(props: Props) {
  const [valueInput, setValueInput] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.inputName}>{props.nameInput}</Text>
      <View style={styles.wrapperTextInput}>
        <View style={styles.wrapper}>
          <Image
            source={props.imagePlaceholder}
            style={styles.mainImage}
          />
          <TextInput
            onChangeText={(value) => {
              setValueInput(value);
            }}
            style={styles.input}
            value={valueInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setValueInput('');
          }}
          style={styles.pressebleImage}
        >
          <Image
            source={close}
            style={styles.cancelImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
