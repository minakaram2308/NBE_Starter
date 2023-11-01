import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../constants/Colors';
import { Spacer } from '../commons/Spacer';
import ButtonInlineText from '../commons/ButtonInlineText';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function NoBeneficiariesScreen({ })
{
    return (
        <View
            style={{
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
            }}>
            <View
                style={{
                    flexDirection: 'column',
                    backgroundColor: '#E3ECFA',
                    borderRadius: 10,
                    width: '55%',
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
                <Spacer vertical value={20}/>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <ButtonInlineText variant={'green'} onPress={() => console.log('press')}>
                        <Icon name="plus-circle" size={20} />
                        Add More
                    </ButtonInlineText>
                </View>
            </View>
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
