import React from 'react';
import
    {
        Animated,
        PanResponder,
        PixelRatio,
        Pressable,
        StyleSheet,
        Text,
        ToastAndroid,
        View,
        useWindowDimensions,
    } from 'react-native';
import { colors } from '../../constants/colors';
import { Spacer } from '../../components/commons/Spacer';
import
    {
        Gesture,
        GestureDetector,
        RectButton,
        Swipeable,
    } from 'react-native-gesture-handler';

export default function BenCardWrapper({ children, actionsOnPress })
{
    const panGesture = Gesture.Pan().onStart(function (args)
    {
        console.log('onStart', args);
    });

    renderLeftActions = (progress, dragX) =>
    {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });

        return (
            <View
                style={[{height: '100%', paddingRight: 0}]}
                >
            <RectButton
                style={[{justifyContent: 'center', alignItems: 'center', backgroundColor: '#ECF56F', marginRight: 10, borderRadius: 10, aspectRatio: 1, height: '100%'}]}
                onPress={() => console.log('edit')}>
                <Animated.Text
                    style={[
                        // {transform: [{ translateX: trans }]},
                        { color: colors.textDark, fontSize: 18},
                    ]}>
                    Edit
                </Animated.Text>
            </RectButton>
            </View>
        );
    };

    renderRightActions = (progress, dragX) =>
    {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });

        return (
            <View
                style={[{height: '100%', paddingRight: 0}]}
                >
            <RectButton
                style={[{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E95858', marginLeft: 10, borderRadius: 10, aspectRatio: 1, height: '100%'}]}
                onPress={actionsOnPress.delete}>
                <Animated.Text
                    style={[
                        // {transform: [{ translateX: trans }]},
                        { color: colors.textDark, fontSize: 18},
                    ]}>
                    Delete
                </Animated.Text>
            </RectButton>
            </View>
        );
    };

    return (
        <Swipeable
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
            // overshootLeft={false}
            // overshootRight={false}
            friction={1.8}
            dragOffsetFromLeftEdge={30}
            dragOffsetFromRightEdge={30}
            overshootFriction={8}
            // style={{ backgroundColor: 'red' }}
            >
            <Animated.View>
                <RectButton style={[styles.cardWrapper]} onPress={() => ToastAndroid.show('View Ben.', ToastAndroid.SHORT)}>{children}</RectButton>
            </Animated.View>
        </Swipeable>
    );

    function optionsWrapperOnLayout(event)
    {
        console.log('event', event.nativeEvent.layout);
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'stretch',
    },
    cardWrapper: {
        width: '100%',
    },
    actionWrapper: {
        // position: 'absolute',
        // zIndex: 1,
        // height: '100%',
        // aspectRatio: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: 'red',
    },
    optionsWrapper_leftSide: {},
    action: {
        // flex: 1,
        // height: '100%',
        // aspectRatio: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 10,
    },
    optionText: {
        color: colors.textDark,
        fontWeight: 'bold',
        fontSize: 18,
    },
});
