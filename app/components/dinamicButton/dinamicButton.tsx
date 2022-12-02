import {View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {cancel, not_usable} from '../../helper/colors';

export default function DinamicButton() {
  const [currentMode, setCurrentMode] = useState('save');
  const [currentStyle, setCurrentStyle] = useState({
    image: play,
    auxiliaryUnit: lock_open,
    auxiliaryUnitColor: not_usable,
  });
  useEffect(() => {
    if (currentMode === 'edit') {
      setCurrentStyle({
        image: edit,
        auxiliaryUnit: cross_cancel,
        auxiliaryUnitColor: cancel,
      });
    }
    if (currentMode === 'save') {
      setCurrentStyle({
        image: save,
        auxiliaryUnit: cross_cancel,
        auxiliaryUnitColor: cancel,
      });
    }
    if (currentMode === 'pause') {
      setCurrentStyle({
        image: pause,
        auxiliaryUnit: lock_close,
        auxiliaryUnitColor: not_usable,
      });
    }
    if (currentMode === 'play') {
      setCurrentStyle({
        image: play,
        auxiliaryUnit: lock_open,
        auxiliaryUnitColor: not_usable,
      });
    }
  }, [currentMode]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={true}
        style={[
          styles.auxiliaryUnit,
          {backgroundColor: currentStyle.auxiliaryUnitColor},
        ]}>
        <Image
          style={styles.circleButtonImage}
          source={currentStyle.auxiliaryUnit}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          const arr = ['edit', 'save', 'pause', 'play'];
          setCurrentMode(arr[Math.floor(Math.random() * (3 - 0 + 1) + 0)]);
        }}
        style={[styles.circleMainButton]}>
        <Image style={styles.circleButtonImage} source={currentStyle.image} />
      </TouchableOpacity>
    </View>
  );
}
