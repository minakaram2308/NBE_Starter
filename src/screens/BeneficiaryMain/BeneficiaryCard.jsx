import React from 'react';
import
    {
        Image,
        PixelRatio,
        StyleSheet,
        Text,
        useWindowDimensions,
    } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../constants/colors';
import { Spacer } from '../../components/commons/Spacer';
import { IMAGES } from '../../constants/images';
import { spacers } from '../../constants/spacing';

export default function BeneficiaryCard({ cardData, compact = true })
{
    const {
        id = '',
        firstName = 'firstname',
        lastName = 'lastname',
        phone = 'phone',
        email = 'email',
    } = cardData ?? {};
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    // const cardsPerRow = windowWidth <
    const imageExist = id in IMAGES
    // console.log(PixelRatio.get(), PixelRatio.getFontScale(), id, imageExist, IMAGES);
    const cardsPerRow = compact ? 3 : 1;
    const colGap = 10;

    const dStyles = {
        container: {
            marginHorizontal: colGap,
        }
    }

    return (
        <View
            style={[
                styles.container,
                dStyles.container,
                compact && styles.containerCompact,
                { width: (windowWidth - spacers.screenPadding * 2 - cardsPerRow * colGap * 2) / cardsPerRow },
            ]}>
            <View style={[styles.imageWrapper]}>
                {imageExist ? (
                    <Image
                        source={IMAGES[id]}
                        resizeMode="contain"
                        style={[styles.profileImage]}
                    />
                ) : (
                    <Text>
                        <Icon name="user" solid size={30} />
                    </Text>
                )}
            </View>
            <Spacer vertical value={10} />
            <View style={[styles.bodyWrapper, compact && styles.bodyWrapperCompact]}>
                <View style={[styles.headerWrapper, compact && styles.headerWrapperCompact]}>
                    <Text style={[styles.headingText]} numberOfLines={1}>
                        {firstName}
                    </Text>
                    <Spacer horizontal value={5} style={compact && styles.hidden}/>
                    <Text style={[styles.headingText]} numberOfLines={1}>
                        {lastName}
                    </Text>
                </View>
                <View style={[styles.bodyExtra, compact && styles.hidden]}>
                <Spacer vertical value={10}/>
                    <View style={[styles.row]}>
                        <Text style={[styles.bodyExtraText, styles.icon]}>
                            <Icon name="phone" size={12} />
                        </Text>
                        <Spacer horizontal value={5}/>
                        <Text style={[styles.bodyExtraText]}>{phone}</Text>
                    </View>
                <Spacer vertical value={5}/>
                    <View style={[styles.row]}>
                        <Text style={[styles.bodyExtraText, styles.icon]}>
                            <Icon name="envelope" size={12} solid />
                        </Text>
                        <Spacer horizontal value={5}/>
                        <Text style={[styles.bodyExtraText]}>{email}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 10,
        flexDirection: 'row',
        // alignItems: 'stretch',
        height: 110,
    },
    containerCompact: {
        flexDirection: 'column',
        // alignItems: 'stretch',
        height: null,
    },
    imageWrapper: {
        aspectRatio: 1,
        overflow: 'hidden',
        backgroundColor: colors.bgLight,
        borderRadius: 10,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
    },
    profileImage: {
        // width: 20
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    headerWrapper: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    headerWrapperCompact:{
        flexDirection: 'column'
    },
    headingText: {
        fontWeight: '500',
        color: colors.textDark,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: 16,
        // lineHeight: 18,
        // maxHeight: 18
        // overflow: 'hidden',
    },
    bodyWrapper: {
        flexDirection: 'column',
        marginLeft: 10
    },
    bodyWrapperCompact:{
        marginLeft: 0
    },
    row:{
        flexDirection: 'row'
    },
    bodyExtraText:{
        color: colors.textMuted
    },
    icon:{
        backgroundColor: '#A6B4C5',
        borderRadius: 100,
        padding: 5,
    },
    hidden: {
        display: 'none',
    },
});
