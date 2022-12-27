import { View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles';
import {
  cross_cancel,
  save,
  edit,
  pause,
  play,
  lock_close,
  lock_open,
} from '../../helper/path';
import { cancel, not_usable } from '../../helper/colors';

interface Props{
  callBack: CallableFunction
  mainButtonDisabled: boolean
  auxiliaryUnit: (myArgument: string) => void
}

export default function DinamicButton(props:Props) {
  const mode = useSelector(state => state?.mode.mode);
  const [currentStyle, setCurrentStyle] = useState({
    image: play,
    auxiliaryUnit: lock_open,
    auxiliaryUnitColor: not_usable,
  });
  const color = useSelector(state => state?.color.color);
  useEffect(() => {
    if (mode === 'edit') {
      setCurrentStyle({
        image: edit,
        auxiliaryUnit: cross_cancel,
        auxiliaryUnitColor: cancel,
      });
    }
    if (mode === 'save') {
      setCurrentStyle({
        image: save,
        auxiliaryUnit: cross_cancel,
        auxiliaryUnitColor: cancel,
      });
    }
    if (mode === 'pause') {
      setCurrentStyle({
        image: pause,
        auxiliaryUnit: lock_close,
        auxiliaryUnitColor: not_usable,
      });
    }
    if (mode === 'play') {
      setCurrentStyle({
        image: play,
        auxiliaryUnit: lock_open,
        auxiliaryUnitColor: not_usable,
      });
    }
  }, [mode]);
  const handlePress = props.callBack;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={props.mainButtonDisabled}
        onPress={props.auxiliaryUnit}
        style={[
          styles.auxiliaryUnit,
          { backgroundColor: currentStyle.auxiliaryUnitColor },
        ]}
      >
        <Image
          source={currentStyle.auxiliaryUnit}
          style={styles.circleButtonImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={props.mainButtonDisabled}
        onPress={handlePress}
        style={props.mainButtonDisabled ? [styles.circleMainButton, { backgroundColor: '#2C77667A' }] : [styles.circleMainButton, { backgroundColor: color }]}
      >
        <Image
          source={currentStyle.image}
          style={styles.circleButtonImage}
        />
      </TouchableOpacity>
      <View style={styles.auxiliaryUnit} />
    </View>
  );
}
