import React from 'react';
import
    {
        Animated,
        PanResponder,
        PixelRatio,
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
    const deadspace = 10;
    const optionBaseWidth = 100;
    const optionMargin = 10;
    const optionWidthTotal = optionBaseWidth + optionMargin * 2;
    const optionsLeft = 2;
    const optionsRight = 0;
    const slack = optionWidthTotal * 0.6;
    let state = { openLeft: 0, openRight: 0 };
    let movement = 0;
    const maxRight = -1 * optionWidthTotal * optionsRight
    const maxLeft =  optionWidthTotal * optionsLeft - optionMargin * Math.min(1, optionsLeft)

    const panResponder = React.useRef(
        PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: function (evt, gestureState)
            {
                // Does this view want to become responder on the start of a touch?

                // console.log('onStartShouldSetPanResponder\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('on start');
                return true;
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
                // console.log('on move capture', gestureState.moveX);
                console.log('on move capture');
                return true;
            },

            onPanResponderGrant: function (evt, gestureState)
            {
                // console.log('onPanResponderGrant\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('Pan granted');

                // The gesture has started. Show visual feedback so the user knows
                // what is happening!
                // gestureState.d{x,y} will be set to zero now
            },

            onPanResponderReject: function (evt)
            {
                console.log('Pan Reject');
            },

            onPanResponderMove: function (evt, gestureState)
            {
                // console.log('onPanResponderMove\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                // console.log('on move granted', gestureState.dx, gestureState.dy);
                // if(Math.abs(gestureState.dy) - Math.abs(gestureState.bx) > 1) return
                // if(gestureState.vy > gestureState.vx) return
                // if (Math.abs(gestureState.dx) > deadspace)
                console.log('on move granted');
                console.log('dx', gestureState.dx);
                console.log('dy', gestureState.dy);
                // console.log('state', state);

                // console.log('moveX', gestureState.moveX)
                // console.log('moveY', gestureState.moveY)
                console.log('vx', gestureState.vx)
                // console.log('yx', gestureState.yx)
                // console.log('x0', gestureState.x0)
                // console.log('y0', gestureState.y0)

                console.log('>', state.openLeft)
                if(gestureState.vx > 0)
                {
                    if(state.openLeft) return
                    console.log('vx > 0', gestureState.vx)
                    // const movement = Math.max(0, gestureState.vx) * 50
                    // state.openLeft = Math.min(Math.max(state.openLeft + 5, slack - 5), maxLeft)
                    if(movement === slack)
                    {
                        console.log({maxLeft})
                        state.openLeft = true
                        Animated.timing(pan, {
                            toValue: maxLeft,
                            duration: 300,
                            useNativeDriver: true,
                        }).start()
                        // pan.setOffset(maxLeft)
                        movement = maxLeft
                        return
                    }

                    // pan.flattenOffset()
                    movement = Math.min(Math.min(movement + 5, slack), maxLeft)
                    if(slack - movement < 5) movement = slack
                    pan.setValue(movement)
                }
                
                if(gestureState.vx < 0)
                {
                    if(movement > slack)
                    {
                        Animated.timing(pan, {
                            toValue: 0,
                            duration: 300,
                            useNativeDriver: true,
                        }).start()
                        state.openLeft = false
                        // movement = 0
                        return
                    }

                    if(movement === -slack)
                    {
                        Animated.timing(pan, {
                            toValue: maxLeft,
                            duration: 300,
                            useNativeDriver: true,
                        }).start()
                        // pan.setOffset(maxLeft)
                        movement = maxLeft
                        return
                    }

                    // if(movement)
                    console.log('vx < 0', gestureState.vx, Math.min(movement - 5, -slack), Math.min(Math.max(movement - 5, -slack), maxRight), maxRight)
                    // movement = Math.min(Math.min(movement - 5, -slack), maxRight)
                    movement = Math.max(Math.max(movement - 5, -slack), maxRight)
                    if(movement + slack < 5) movement = -slack
                    pan.setValue(movement)
                    // pan.setValue(Math.max(Math.max(0, gestureState.dx), maxRight))
                }

                // if(gestureState.vx > 0) // swipe right
                // {

                //     if(gestureState.dx )
                //     if(state.openLeft < slack) 
                //     {
                //         console.log('ACITION -----------------')
                //         const movement = Math.min(gestureState.dx, slack)
                //         pan.setValue(movement)
                //         state.openLeft = movement
                //     }
                //     else if(state.openLeft === slack)
                //     {
                //         Animated.timing(pan, {
                //             toValue: maxLeft,
                //             duration: 500,
                //             useNativeDriver: true,
                //         }).start()
                //         return
                //     }
                // }

                // if(gestureState.vx < 0) // swipe left
                // {
                //     console.log('Swipe to left', gestureState.vx, gestureState.dx, state)

                //     if(state.openRight > -1 * slack) 
                //     {
                //         console.log('ACITION -----------------')
                //         const movement = Math.max(gestureState.dx, -1 * slack, maxRight)
                //         pan.setValue(movement)
                //         state.openRight = movement
                //     }
                //     else if(state.openRight === slack)
                //     {
                //         Animated.timing(pan, {
                //             toValue: maxRight,
                //             duration: 500,
                //             useNativeDriver: true,
                //         }).start()
                //         return
                //     }
                // }





                // if (state.openLeft || !optionsLeft)
                // {
                //     console.log(`If > 1`);
                //     if (gestureState.dx > 0) return console.log(`If > 2`);
                //     // pan.setOffset(gestureState.moveX)
                //     pan.setValue(gestureState.dx);
                // }
                
                // if (state.openRight || !optionsRight)
                // {
                //     console.log(`If > 3`);
                //     if (gestureState.dx < 0) return console.log(`If > 4`);
                //     // pan.setOffset(gestureState.moveX)
                //     pan.setValue(gestureState.dx);
                // }

                // if (!state.openLeft && !state.openRight)
                // {
                //     console.log(`If > 5`);
                //     if (gestureState.dx > slack && optionsLeft)
                //     {
                //         console.log(`If > 6`);
                //         state.openLeft = true;
                //         Animated.timing(pan, {
                //             toValue: optionBaseWidth * optionsLeft,
                //             duration: 500,
                //             useNativeDriver: true
                //         }).start();
                //     } else if (gestureState.dx < -slack && optionsRight)
                //     {
                //         console.log(`If > 7`);
                        
                //         state.openRight = true;
                //         Animated.timing(pan, {
                //             toValue: -optionBaseWidth * optionsRight,
                //             duration: 500,
                //             useNativeDriver: true
                //         }).start();
                //     } else
                //     {
                //         console.log(`else > 8`);
                //         pan.setValue(gestureState.dx);
                //     }
                // }
                console.log('\n\n');
            },

            onPanResponderTerminationRequest: function (evt, gestureState)
            {
                // console.log('onPanResponderTerminationRequest\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                console.log('termination request');
                return false;
            },

            onPanResponderRelease: function (evt, gestureState)
            {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded

                // console.log('onPanResponderRelease\n', 'evt: ', evt, '\ngestureState: ', gestureState)
                // console.log('released', gestureState);
                console.log('released', state.openLeft, slack, state.openLeft < slack);

                if(movement < slack) 
                {
                    // console.log(state.openLeft, slack, state.openLeft < slack)
                    Animated.timing(pan, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }).start()
                    
                    state.openLeft = 0
                    movement = 0
                }

                // if(state.openLeft || state.openRight) pan.extractOffset();
                // else pan.setOffset(0)
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

    const localStyles = {
        optionsWrapper_leftSide: {
            left: -optionWidthTotal * optionsLeft,
        },
        option: {
            width: optionBaseWidth,
            marginHorizontal: optionMargin,
        },
    };

    return (
        <Animated.View
            style={[
                styles.container,
                { 
                    transform: [{ translateX: pan }],
                },
            ]}
            {...panResponder.panHandlers}>
            <View
                style={[styles.optionsWrapper, localStyles.optionsWrapper_leftSide]}>
                <Pressable
                    android_ripple={{ color: colors.btnRippleBase }}
                    onPress={() => console.log('send')}
                    style={[
                        styles.option,
                        localStyles.option,
                        { backgroundColor: '#58E98D' },
                    ]}>
                    <Text style={[styles.optionText]}>Send</Text>
                </Pressable>
                {/* <Spacer horizontal value={10} /> */}
                <View
                    style={[
                        styles.option,
                        localStyles.option,
                        { backgroundColor: '#E95858' },
                    ]}>
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
        alignItems: 'center',
    },
    optionsWrapper_leftSide: {
        // left: -200,
        // right: 0,
        // transform: [{translateX: '-100%'}]
    },
    option: {
        // width: 100,
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
