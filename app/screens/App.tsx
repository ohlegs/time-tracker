import { Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from '../helper/redux/store';
import NavBottomBar from './../components/NavBottomBar/NavBottomBar';
/* eslint-disable  */
const Tab = createBottomTabNavigator();

export default function App() {
    const [positionAdd, setPositionAdd] = useState(0);
    const [positionHistory, setPositionHistory] = useState(0);
    const [positionView, setPositionView] = useState(0);
    const [currentPosition, setCurrentPosition] = useState('Home');

    const navigationRef = useNavigationContainerRef();
    const routeNameRef = useRef();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeOut = value => {
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
        <Provider store={store}>
            <NavBottomBar />
        </Provider>
    );
}
