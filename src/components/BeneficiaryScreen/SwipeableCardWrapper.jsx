import React from 'react';
import
  {
    ActivityIndicator,
    Animated,
    StyleSheet,
    Text,
    ToastAndroid,
    View,
  } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { colors } from '../../constants/Colors';

export default function SwipeableCardWrapper({ children, actionsOnPress })
{
  const [showLoading, setShowLoading] = React.useState(false);

  React.useEffect(() =>
  {
    if (showLoading) actionsOnPress.delete();
  }, [showLoading]);

  return (
    <View style={styles.container}>
      <Swipeable
        renderLeftActions={(progress, dragX) =>
          actionsRenderer('left', [{ label: 'Edit', color: '#ECF56F' }], progress)
        }
        renderRightActions={(progress, dragX) =>
          actionsRenderer(
            'right',
            [{ label: 'Delete', color: '#E95858' }],
            progress,
          )
        }
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

  function actionsRenderer(direction, actionsData, progress)
  {
    return (
      <ActionsWrapper direction={direction} progress={progress}>
        {actionsData}
      </ActionsWrapper>
    );
  }

  ///////////////////////////////////////////
  //// Local Components
  ///////////////////////////////////////////

  function ActionsWrapper({ children, direction, progress })
  {
    direction = { right: -1, left: 1 }[direction] ?? 1;
    const directionalPadding =
      direction === 1 ? { paddingRight: 20 } : { paddingLeft: 20 };

    const trans = progress.interpolate({
      inputRange: [0, 1, 1.2],
      outputRange: [0, 0, direction * 50],
    });

    return (
      <Animated.View style={[{ height: '100%' }, directionalPadding]}>
        <Animated.View
          style={{ transform: [{ translateX: trans }], flexDirection: 'row' }}>
          {children.map(function (item, i)
          {
            return <Action {...item} key={i} />;
          })}
        </Animated.View>
      </Animated.View>
    );
  }

  function Action({ label, color })
  {
    return (
      <RectButton
        style={[
          {
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            aspectRatio: 1,
            backgroundColor: color,
          },
        ]}
        onPress={() => console.log('edit')}>
        <Text style={[{ color: colors.textDark, fontSize: 18 }]}>{label}</Text>
      </RectButton>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  cardWrapper: {
    width: '100%',
  },
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
