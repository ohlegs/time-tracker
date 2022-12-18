/* eslint-disable react-hooks/exhaustive-deps */
import { View, Animated, Image } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import { useSelector } from 'react-redux';
import styles from './styles';
import HomeScreen from './../../screens/Main/Main';
import { icon_add, icon_history } from '../../helper/path';
import History from './../../screens/History/Main';
import { getColor } from '../../helper/redux/colorSlice';

const Tab = createBottomTabNavigator();
export default function NavBottomBar() {
  const [positionAdd, setPositionAdd] = useState(0);
  const [positionHistory, setPositionHistory] = useState(0);
  const [currentPosition, setCurrentPosition] = useState('Home');
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const color = useSelector(getColor).payload.counter.value;
  const fadeOut = (value: number): void => {
    Animated.timing(fadeAnim, {
      toValue: value - 20,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    fadeOut(positionAdd);
  }, [positionAdd]);

  useEffect(() => {
    if (currentPosition === 'Home') {
      fadeOut(positionAdd);
    }
    if (currentPosition === 'History') {
      fadeOut(positionHistory);
    }
  }, [currentPosition]);

  return (
    <NavigationContainer
      onReady={() => {
                routeNameRef.current = navigationRef.getCurrentRoute()?.name;
            }}
      onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.getCurrentRoute()?.name;
                const trackScreenView = (name) => {
                    setCurrentPosition(name);
                };

                if (previousRouteName !== currentRouteName) {
                    routeNameRef.current = currentRouteName;
                    await trackScreenView(currentRouteName);
                }
            }}
      ref={navigationRef}
    >
      <Tab.Navigator
        screenOptions={{
                    tabBarStyle: styles.tabBarStyle,
                    tabBarBackground: () => (
                      <View style={styles.tabBarBackground}>
                        <Animated.View
                          style={[
                                    styles.animateCirles,
                                    { left: fadeAnim, backgroundColor: color },
                                ]}
                        />
                        <BlurView
                          blurRadius={14}
                          blurType='light'
                          style={styles.blurView}
                        />
                      </View>
                    ),
                }}
      >
        <Tab.Screen
          component={HomeScreen}
          name='Home'
          options={{
                        title: ' ',
                        header: () => null,
                        tabBarIcon: () => (
                          <Image
                            onLayout={(event) => {
                              // @ts-ignore
                                    event.target.measure((x, y, width, height, pageX) => {
                                            setPositionAdd(pageX);
                                        });
                                }}
                            source={icon_add}
                            style={styles.add_icon}
                          />
                        ),
                    }}
        />
        <Tab.Screen
          component={History}
          name='History'
          options={{
                        title: ' ',
                        header: () => null,
                        tabBarIcon: () => (
                          <Image
                            onLayout={(event) => {
                                    // @ts-ignore
                                    event.target.measure((x, y, width, height, pageX) => {
                                            setPositionHistory(pageX);
                                        });
                                }}
                            source={icon_history}
                            style={styles.history_icon}
                          />
                        ),
                    }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
