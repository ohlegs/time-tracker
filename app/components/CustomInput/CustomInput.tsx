import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {close} from './../../helper/path';

export default function CustomInput(props) {
  const [valueInput, setValueInput] = useState<String | null>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.inputName}>{props.nameInput}</Text>
      <View style={styles.wrapperTextInput}>
        <View style={styles.wrapper}>
          <Image style={styles.mainImage} source={props.imagePlaceholder} />
          <TextInput
            value={valueInput}
            onChangeText={value => {
              setValueInput(value);
            }}
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setValueInput('');
          }}
          style={styles.pressebleImage}>
          <Image style={styles.cancelImage} source={close} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
