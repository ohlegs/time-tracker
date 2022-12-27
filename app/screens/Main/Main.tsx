/* eslint-disable react-hooks/exhaustive-deps */

import { View, Animated, StatusBar, Dimensions } from 'react-native';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import DinamicButton from '../../components/DinamicButton/dinamicButton';
import CustomInput from './../../components/CustomInput/CustomInput';
import Switcher from '../../components/Switcher/Switcher';
import { main_text, description as description_img } from './../../helper/path';
import styles from './styles';
import { BG_MAIN, DEFAULT_BUTTON } from '../../helper/colors';
import TaskTime from '../../components/TaskTime/TaskTime';
import CardForSlider from './../../components/CardForSlider/CardForSlider';
import { setColor } from '../../helper/redux/colorSlice';
import DBController, {
  MAIN_INPUT,
  DESCRIPTION,
  PRIORITY,
  COLOR,
} from '../../helper/db/db';
import { setMode } from '../../helper/redux/modeSlice';
import generateColor from '../../helper/utils/utils';

export default function HomeScreen() {
  const mode = useSelector(state => state?.mode.mode);
  const [remove, setRemove] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainInput, setMainInput] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [prioriti, setPrioriti] = useState<number>(0);
  const [data, setData] = useState([]);
  const sliderWidth = Dimensions.get('window').width;
  const height = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const opacityCarousel = useRef(new Animated.Value(0)).current;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const dispatch = useDispatch();

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

  const functionForDinamicButton = useCallback(() => {
    if (mode === 'save') {
      for (let i = 0; i < 100; i++) {
        DBController.insertDB([MAIN_INPUT, DESCRIPTION, PRIORITY, COLOR], [mainInput, description, prioriti, generateColor()]);
      }
      fadeIn();
      setMainInput('');
      setDescription('');
      setPrioriti(0);
      DBController.checkDB(setData);
    }
  }, [mode]);

  const auxiliaryUnit = useCallback(() => {
    if (mode === 'save') {
      setDescription('');
      setMainInput('');
      setPrioriti(0);
    }
  }, [mode]);
  useEffect(() => {
    if (!mainInput || !description || !prioriti) {
      dispatch(setMode('save'));
    }
  }, [mainInput, description, prioriti]);

  useEffect(() => {
    DBController.checkDB(setData);
  }, []);

  useEffect(() => {
    if (data?.length > 0) {
      dispatch(setColor(data[currentIndex]?.color));
    }
  }, [currentIndex]);

  useEffect(() => {
    if (data?.length > 0) {
      fadeIn();
      dispatch(setMode('pause'));
      dispatch(setColor(data[0]?.color));
    } else {
      dispatch(setColor(DEFAULT_BUTTON));
    }
  }, [data]);
  const form = useMemo(
    () => (
      <Animated.View style={{ opacity }}>
        <View style={[styles.formWrapper]}>
          <CustomInput
            callBack={(value: string) => {
                            setMainInput(value);
                        }}
            imagePlaceholder={main_text}
            nameInput='Main input'
            value={mainInput}
          />
        </View>
        <View style={styles.formWrapper}>
          <CustomInput
            callBack={(value: string) => {
                            setDescription(value);
                        }}
            imagePlaceholder={description_img}
            nameInput='Description'
            value={description}
          />
        </View>
        <View style={styles.formWrapper}>
          <Switcher
            callBack={(value: number) => {
                            setPrioriti(value);
                        }}
          />
        </View>
      </Animated.View>
    ),
    [],
  );

  const disabledButton = useMemo(() => {
    if (data?.length > 0) {
      return false;
    }
    return null;
  }, [data]);

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
          {remove ? form : <TaskTime />}
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
          enableMomentum={true}
          enableSnap={true}
          itemWidth={sliderWidth / 1.25}
          layout='default'
          onSnapToItem={(index) => {
                        setCurrentIndex(index);
                    }}
          renderItem={e => (<CardForSlider data={e} />)}
          sliderWidth={sliderWidth}
          useScrollView={true}
          windowSize={1}
        />
      </View>
      <View style={[styles.dinamicButtonWrapper]}>
        <DinamicButton
          auxiliaryUnit={auxiliaryUnit}
          callBack={functionForDinamicButton}
          mainButtonDisabled={disabledButton}
        />
      </View>
    </Animated.View>
  );
}
