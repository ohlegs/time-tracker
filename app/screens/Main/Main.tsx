/* eslint-disable react-hooks/exhaustive-deps */

import { View, Animated, StatusBar, Dimensions } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-native-snap-carousel';
import { useDispatch } from 'react-redux';
import DinamicButton from '../../components/DinamicButton/dinamicButton';
import CustomInput from './../../components/CustomInput/CustomInput';
import Switcher from '../../components/Switcher/Switcher';
import { main_text, description } from './../../helper/path';
import styles from './styles';
import { BG_MAIN } from '../../helper/colors';
import TaskTime from '../../components/TaskTime/TaskTime';
import CardForSlider from './../../components/CardForSlider/CardForSlider';
import { setColor } from '../../helper/redux/colorSlice';

export default function HomeScreen() {
  const [remove, setRemove] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderWidth = Dimensions.get('window').width;
  const height = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const opacityCarousel = useRef(new Animated.Value(0)).current;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const color = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const data = [
    {
      id: 1,
      color: '#f0a',
    },
    {
      id: 2,
      color: '#20f',
    },
    {
      id: 3,
      color: '#00d0ff',
    },
    {
      id: 4,
      color: '#0f5',
    },
    {
      id: 5,
      color: '#90ff00',
    },
    {
      id: 6,
      color: '#eaff00',
    },
    {
      id: 7,
      color: '#ff7b00',
    },
    {
      id: 8,
      color: '#ff3b00',
    },
    {
      id: 9,
      color: '#9000ff',
    },
    {
      id: 10,
      color: '#6f00ff',
    },
  ];
  const showCarousel = (): void => {
    Animated.timing(opacityCarousel, {
      toValue: 1,
      duration: 100,
      delay: 100,
      useNativeDriver: false,
    }).start();
  };
  const fadeIn = (): void => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      delay: 300,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(height, {
        toValue: 10,
        duration: 300,
        delay: 500,
        useNativeDriver: false,
      }).start(() => {
        setRemove(false);
        showCarousel();
      });
    });
  };
  useEffect(() => {
    fadeIn();
  }, []);

  useEffect(() => {
    dispatch(setColor(data[currentIndex].color));
  }, [currentIndex]);

  const Form = () => (
    <Animated.View style={{ opacity }}>
      <View style={[styles.formWrapper]}>
        <CustomInput
          imagePlaceholder={main_text}
          nameInput='Main input'
        />
      </View>
      <View style={styles.formWrapper}>
        <CustomInput
          imagePlaceholder={description}
          nameInput='Description'
        />
      </View>
      <View style={styles.formWrapper}>
        <Switcher />
      </View>
    </Animated.View>
  );

  return (
    <Animated.View style={[styles.container]}>
      <StatusBar backgroundColor={BG_MAIN} />
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
          ]}
        >
          {remove ? <Form /> : <TaskTime />}
        </Animated.View>

        <Carousel
          activeAnimationType='decay'
          activeSlideAlignment='center'
          containerCustomStyle={{
            display: !remove ? 'flex' : 'none',
            marginTop: 33,
            opacity: opacityCarousel,
          }}
          data={data}
          enableSnap={true}
          itemWidth={sliderWidth / 1.25}
          layout='default'
          onSnapToItem={(index) => {
            setCurrentIndex(index);
          }}
          renderItem={e => <CardForSlider data={e} />}
          sliderWidth={sliderWidth}
          windowSize={1}
        />
      </View>

      <View style={[styles.dinamicButtonWrapper]}>
        <DinamicButton />
      </View>
    </Animated.View>
  );
}
