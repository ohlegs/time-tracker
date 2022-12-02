import {View, Animated, StatusBar} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import DinamicButton from './../../components/dinamicButton/dinamicButton';
import CustomInput from './../../components/CustomInput/CustomInput';
import Switcher from '../../components/Switcher/Switcher';
import {main_text, description} from './../../helper/path';
import styles from './styles';
import {bg_main} from '../../helper/colors';
import TaskTime from '../../components/TaskTime/TaskTime';
import Carousel from 'react-native-snap-carousel';

export default function HomeScreen() {
  const [mode, setMode] = useState<String>('create');
  const [remove, setRemove] = useState(true);
  const height = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      delay: 300,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(height, {
        toValue: 10,
        duration: 300,
        delay: 300,
        useNativeDriver: false,
      }).start(() => {
        setRemove(false);
      });
    });
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={bg_main} />
      <View style={styles.dinamicBlockWrapper}>
        <Animated.View
          style={[
            remove ? styles.dinamicBlock : styles.center,
            {
              height: height.interpolate({
                inputRange: [0, 10],
                outputRange: ['100%', '20%'],
              }),
            },
          ]}>
          {remove ? (
            <Animated.View style={{opacity: opacity}}>
              <View style={[styles.formWrapper]}>
                <CustomInput
                  imagePlaceholder={main_text}
                  nameInput="Main input"
                />
              </View>
              <View style={styles.formWrapper}>
                <CustomInput
                  imagePlaceholder={description}
                  nameInput="Description"
                />
              </View>
              <View style={styles.formWrapper}>
                <Switcher />
              </View>
            </Animated.View>
          ) : (
            <TaskTime />
          )}
        </Animated.View>
        <Carousel data={[1, 2, 3, 4, 5, 6]} />
      </View>
      <View style={[styles.dinamicButtonWrapper]}>
        <DinamicButton />
      </View>
    </View>
  );
}
