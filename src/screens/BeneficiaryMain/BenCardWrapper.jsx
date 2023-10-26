import React from 'react';
import
    {
        Animated,
        PanResponder,
        Pressable,
        StyleSheet,
        Text,
        View,
        useWindowDimensions,
    } from 'react-native';
import { colors } from '../../constants/colors';
import { Spacer } from '../../components/commons/Spacer';

export default function BenCardWrapper({ children, disabled })
{
    const [moveOffset, setMoveOffset] = React.useState(0);
    const pan = React.useRef(new Animated.Value(0)).current;
    const { width } = useWindowDimensions();
    const deadspace = width * 0.05;
    const panResponder = React.useRef(
        PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: function (evt, gestureState)
            {
                // Does this view want to become responder on the start of a touch?

                // console.log('onStartShouldSetPanResponder\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('on start');
                return false;
            },

            onStartShouldSetPanResponderCapture: function (evt, gestureState)
            {
                // console.log('onStartShouldSetPanResponderCapture\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('on start capture');
                return false;
            },

            onMoveShouldSetPanResponder: function (evt, gestureState)
            {
                // console.log('onMoveShouldSetPanResponder\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('on move');
                return false;
            },

            onMoveShouldSetPanResponderCapture: function (evt, gestureState)
            {
                // console.log('onMoveShouldSetPanResponderCapture\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('on move capture', gestureState.moveX);
                return true;
            },

            onPanResponderGrant: function (evt, gestureState)
            {
                // console.log('onPanResponderGrant\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('on touch granted');

                // The gesture has started. Show visual feedback so the user knows
                // what is happening!
                // gestureState.d{x,y} will be set to zero now
            },

            onPanResponderMove: function (evt, gestureState)
            {
                // console.log('onPanResponderMove\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('on move granted', gestureState.dx, deadspace);
                if (Math.abs(gestureState.dx) > deadspace) pan.setValue(gestureState.dx);
            },

            onPanResponderTerminationRequest: function (evt, gestureState)
            {
                // console.log('onPanResponderTerminationRequest\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('termination request');
                return true;
            },

            onPanResponderRelease: function (evt, gestureState)
            {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded

                // console.log('onPanResponderRelease\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                // console.log('released', gestureState);
                pan.extractOffset();
            },

            onPanResponderTerminate: function (evt, gestureState)
            {
                // console.log('onPanResponderTerminate\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('terminated');

                // Another component has become the responder, so this gesture
                // should be cancelled
            },
            onShouldBlockNativeResponder: function (evt, gestureState)
            {
                // console.log('onShouldBlockNativeResponder\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('block native responder');

                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        }),
    ).current;

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [{ translateX: pan }],
                },
            ]}
            {...panResponder.panHandlers}>
            <View style={[styles.optionsWrapper, styles.optionsWrapper_leftSide]}>
                <Pressable
                    android_ripple={{ color: colors.btnRippleBase }}
                    onPress={() => console.log('send')}
                    style={[styles.option, { backgroundColor: '#58E98D' }]}>
                    <Text style={[styles.optionText]}>Send</Text>
                </Pressable>
                <Spacer horizontal value={10}/>
                <View style={[styles.option, { backgroundColor: '#E95858' }]}>
                    <Text style={[styles.optionText]}>Delete</Text>
                </View>
            </View>
            {/* <Spacer horizontal value={10}/> */}
            <View style={[styles.cardWrapper]}>{children}</View>
        </Animated.View>
    );

    function optionsWrapperOnLayout(event)
    {
        console.log('event', event.nativeEvent.layout);
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'stretch',
        // transform: [{translateX: -100}],
        // backgroundColor: 'red',
    },
    cardWrapper: {
        width: '100%',
    },
    optionsWrapper: {
        position: 'absolute',
        zIndex: 1,
        // flex: 1,
        height: '100%',
        // width: '100%',
        flexDirection: 'row',
        // backgroundColor: '#333333',
    },
    optionsWrapper_leftSide: {
        left: -250,
        // right: 0,
        // transform: [{translateX: '-100%'}]
    },
    option: {
        // flex: 1,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    optionText: {
        color: colors.textDark,
        fontWeight: 'bold',
        fontSize: 18,
    },
});
