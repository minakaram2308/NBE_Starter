import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../constants/Colors';
import { darkColors } from '../../styles/components/Modes/DarkColors';
import { lightColors } from '../../styles/components/Modes/LightColors';
import { Spacer } from '../commons/Spacer';
import { ModeContext } from '../../Context/ModeContext';

export default function BeneficiaryCard({
    cardData,
    cardsPerRow,
    image,
    compact = true,
    blank = false,
})
{
    const { width, height } = useWindowDimensions();
    const {darkTheme, toggle} = useContext(ModeContext);

    const {
        id = '',
        first_name: firstName = 'firstname',
        last_name: lastName = 'lastname',
        phone = 'phone',
        email = 'email',
    } = cardData ?? {};

    const padding = Math.trunc(
        Math.min((width * 0.2) / cardsPerRow ** 2, 12 * cardsPerRow),
    );

    return (
        <View
            style={[
                styles.container,
                compact && styles.containerCompact,
                { padding: padding,backgroundColor:darkTheme?darkColors.darkBackgrd:lightColors.lightBackgrd },
                blank && styles.blank,
            ]}>
            {!blank && (
                <>
                    <View style={[styles.imageWrapper]}>
                        {image ? (
                            <Image source={image} style={[styles.profileImage]} />
                        ) : (
                            <Text>
                                <Icon name="user" solid size={30} />
                            </Text>
                        )}
                    </View>
                    <Spacer vertical value={10} style={!compact && styles.hidden} />
                    <Spacer horizontal value={10} style={compact && styles.hidden} />
                    <View
                        style={[styles.bodyWrapper, compact && styles.bodyWrapperCompact]}>
                        <View
                            style={[
                                styles.headerWrapper,
                                compact && styles.headerWrapperCompact,
                            ]}>
                            <Text style={[styles.headingText,{color:darkTheme?darkColors.darkText:lightColors.lightText}]} numberOfLines={1}>
                                {firstName}
                            </Text>
                            <Spacer horizontal value={5} style={compact && styles.hidden} />
                            <Text
                                style={[styles.headingText, !compact && styles.ellipsis,{color:darkTheme?darkColors.darkText:lightColors.lightText}]}
                                numberOfLines={1}>
                                {lastName}
                            </Text>
                        </View>
                        <View style={[styles.bodyExtra, compact && styles.hidden]}>
                            <Spacer vertical value={10} />
                            <View style={[styles.row]}>
                                <Text style={[styles.bodyExtraText, styles.icon]}>
                                    <Icon name="phone" size={12} />
                                </Text>
                                <Spacer horizontal value={5} />
                                <Text style={[styles.bodyExtraText]} numberOfLines={1}>
                                    {phone}
                                </Text>
                            </View>
                            <Spacer vertical value={5} />
                            <View style={[styles.row]}>
                                <Text style={[styles.bodyExtraText, styles.icon]}>
                                    <Icon name="envelope" size={12} solid />
                                </Text>
                                <Spacer horizontal value={5} />
                                <Text style={[styles.bodyExtraText]} numberOfLines={1}>
                                    {email}
                                </Text>
                            </View>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
        elevation: 1,
        borderWidth: 1,
        borderColor: colors.grays.light_1,
    },
    containerCompact: {
        flexDirection: 'column',
        width: null,
    },
    blank: {
        backgroundColor: null,
        elevation: 0,
        borderWidth: 0,
    },
    imageWrapper: {
        aspectRatio: 1,
        overflow: 'hidden',

        backgroundColor: colors.bgLight,
        borderRadius: 10,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.grays.light_1,
    },
    profileImage: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    headerWrapper: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflow: 'hidden',
    },
    headerWrapperCompact: {
        flexDirection: 'column',
    },
    headingText: {
        fontWeight: '500',
        color: colors.textDark,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: 16,
    },
    ellipsis: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
    bodyWrapper: {
        flexDirection: 'column',
        flex: 1,
    },
    bodyWrapperCompact: {},
    row: {
        flexDirection: 'row',
    },
    bodyExtraText: {
        color: colors.textMuted,
        flex: 1,
    },
    icon: {
        flex: 0,
        backgroundColor: '#A6B4C5',
        borderRadius: 100,
        padding: 5,
    },
    hidden: {
        display: 'none',
    },
});
