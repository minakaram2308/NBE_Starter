import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { colors } from '../../constants/Colors';
import { Spacer } from '../commons/Spacer';
import ButtonInlineText from '../commons/ButtonInlineText';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import AwesomeLoading from 'react-native-awesome-loading';
// import { SkeletonContainer } from 'react-native-dynamic-skeletons';

import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native';
import { spacing } from '../../constants/spacing';
import { range } from '../../utils/utils';

export function NoBeneficiariesScreen({ stillFetching = true, onPressAdd })
{
    const { width, height } = useWindowDimensions();
    const listWidth = width - spacing.screenPadding * 2;
    const cardHeight = 55;
    const cards = Math.ceil((height * 0.6) / cardHeight);
    // console.log(cards)
    const marginBottom = 20;

    const loadingView = (
        <ContentLoader
            speed={2}
            width={listWidth}
            height={'100%'}
            viewBox={`0 0 ${listWidth} 100%`}
            backgroundColor="#E6E6E6"
            foregroundColor="#F2F2F2"
            // style={{alignSelf: ''}}
        // {...props}
        >
            <Rect
                x="0"
                y="0"
                rx="10"
                ry="10"
                width={listWidth}
                height={cardHeight}
            />
            {range(1, cards).map(function (i)
            {
                console.log(i, marginBottom, i * cardHeight + marginBottom)
                return (<Rect
                key={i}
                    x="0"
                    y={i * (cardHeight + marginBottom)}
                    rx="10"
                    ry="10"
                    width={listWidth}
                    height={cardHeight}
                />)
            })}
            <Rect
                x="0"
                y={(cardHeight + marginBottom) * (cards)}
                rx="10"
                ry="10"
                width={listWidth}
                height={cardHeight}
            />
        </ContentLoader>
    );
    const emptyView = (
        <>
            <View
                style={{
                    flexDirection: 'column',
                    backgroundColor: '#E3ECFA',
                    borderRadius: 10,
                    // width: '55%',
                    height: height,
                    paddingVertical: 20,
                    elevation: 1,
                    aspectRatio: 1,
                }}>
                <CardPlaceholder initials="SD" offset={-30} />
                <Spacer vertical value={10} />
                <CardPlaceholder initials="AP" offset={30} />
                <Spacer vertical value={10} />
                <CardPlaceholder initials="JS" offset={-30} />
            </View>
            <Spacer vertical value={20} />
            <View
                style={{
                    flexDirection: 'column',
                    alignContent: 'flex-start',
                    paddingHorizontal: '10%',
                }}>
                <Text
                    style={{
                        color: colors.textDark,
                        fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontFamily: 'Quicksand-Light',
                    }}>
                    No Beneficiaries
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>
                    You don’t have beneficiaries, add some so you can send money
                </Text>
                <Spacer vertical value={20} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ButtonInlineText
                        variant={'green'}
                        onPress={onPressAdd}>
                        <Icon name="plus-circle" size={20} />
                        Add More
                    </ButtonInlineText>
                </View>
            </View>
        </>
    );


    return (
        <View
            style={{
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
                // width: '100%',
                // height: '100%',
                justifyContent: 'center',
                // backgroundColor: 'blue',
            }}>
            {stillFetching ? (loadingView) : (emptyView)}
        </View>
    );

    function CardPlaceholder({ initials, offset })
    {
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    borderRadius: 5,
                    flexDirection: 'row',
                    position: 'relative',
                    elevation: 1,
                    flex: 1,
                    transform: [{ translateX: offset }],
                }}>
                <View
                    style={{
                        backgroundColor: colors.primary,
                        aspectRatio: 1,
                        borderRadius: 100,
                        justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>
                        {initials}
                    </Text>
                </View>
                <Spacer horizontal value={10} />
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View
                        style={{
                            width: '60%',
                            flex: 1,
                            backgroundColor: '#B4DAFF',
                            borderRadius: 100,
                        }}></View>
                    <Spacer vertical value={8} />
                    <View
                        style={{
                            width: '80%',
                            flex: 1,
                            backgroundColor: '#DEE9FC',
                            borderRadius: 100,
                        }}></View>
                </View>
            </View>
        );
    }
}
