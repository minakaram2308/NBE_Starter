import React from 'react';
import
    {
        ActivityIndicator,
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
import { colors } from '../../constants/Colors';
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
    const [showLoading, setShowLoading] = React.useState(false);
    function renderLeftActions(progress, dragX)
    {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });

        return (
            <View style={[{ height: '100%', paddingRight: 0 }]}>
                <RectButton
                    style={[
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ECF56F',
                            marginRight: 10,
                            borderRadius: 10,
                            aspectRatio: 1,
                            height: '100%',
                        },
                    ]}
                    onPress={() => console.log('edit')}>
                    <Animated.Text
                        style={[
                            // {transform: [{ translateX: trans }]},
                            { color: colors.textDark, fontSize: 18 },
                        ]}>
                        Edit
                    </Animated.Text>
                </RectButton>
            </View>
        );
    }

    function renderRightActions(progress, dragX)
    {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });

        return (
            <View style={[{ height: '100%', paddingRight: 0 }]}>
                <RectButton
                    style={[
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#E95858',
                            marginLeft: 10,
                            borderRadius: 10,
                            aspectRatio: 1,
                            height: '100%',
                        },
                    ]}
                    onPress={() =>
                    {
                        setShowLoading(true);
                    }}>
                    <Animated.Text style={[{ color: colors.textDark, fontSize: 18 }]}>
                        Delete
                    </Animated.Text>
                </RectButton>
            </View>
        );
    }

    React.useEffect(() =>
    {
        if (showLoading) actionsOnPress.delete();
    }, [showLoading]);

    return (
        <View style={styles.container}>
            <Swipeable
                renderLeftActions={renderLeftActions}
                renderRightActions={renderRightActions}
                // overshootLeft={false}
                // overshootRight={false}
                friction={1.8}
                dragOffsetFromLeftEdge={30}
                dragOffsetFromRightEdge={30}
                overshootFriction={8}>
                <Animated.View>
                    <RectButton
                        style={[styles.cardWrapper]}
                        onPress={() => ToastAndroid.show('View Ben.', ToastAndroid.SHORT)}>
                        {children}
                    </RectButton>
                </Animated.View>
            </Swipeable>

            <View style={[styles.loadingWrapper, showLoading && styles.show]}>
                <Text style={styles.heavyText}>Deleting</Text>
                <ActivityIndicator
                    size="large"
                    color="#007236"
                    animating={showLoading}
                    style={styles.spinner}
                />
            </View>
        </View>
    );

    function optionsWrapperOnLayout(event)
    {
        console.log('event', event.nativeEvent.layout);
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    cardWrapper: {
        width: '100%',
    },
    actionWrapper: {
        backgroundColor: 'red',
    },
    optionsWrapper_leftSide: {},
    action: {
        borderRadius: 10,
    },
    optionText: {
        color: colors.textDark,
        fontWeight: 'bold',
        fontSize: 18,
    },
    loadingWrapper: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: colors.fade63,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'none',
    },
    spinner: {},
    show: {
        display: 'flex',
    },
    heavyText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
