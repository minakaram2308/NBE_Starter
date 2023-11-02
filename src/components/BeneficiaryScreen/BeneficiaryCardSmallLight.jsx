import React from 'react';
import
{
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../constants/Colors';
import { Spacer } from '../commons/Spacer';
import { RDP } from '../../utils/scaling';

export default function BeneficiaryCardLight({
    image,
    firstName,
    lastName,
    width = '100%',
    height = null,
})
{
    // console.log('render', cardData.id)
    //     const { width, height } = useWindowDimensions();

    // const {
    //     first_name: firstName = 'firstname',
    //     last_name: lastName = 'lastname',
    // } = cardData ?? {};

    let imageDOM;
    if (image) imageDOM = (
        <Image
            source={image}
            style={[styles.thumbnail, { width:width - RDP(16), height:width - RDP(16)}]}
        />
    )
    else imageDOM = (
        <View style={[styles.thumbnail, { width: width - RDP(16), height: width - RDP(16)}]}>
            <Icon name="user" solid style={[styles.icon]} size={RDP(24)}/>
        </View>
    )

    //     const padding = Math.trunc(
    //         Math.min((width * 0.2) / cardsPerRow ** 2, 12 * cardsPerRow),
    //     );

    return (
        <View
            style={[
                styles.root,
                {
                    width: width,
                    height: height,
                },
            ]}>
            {imageDOM}

            <View style={{marginTop: RDP(5)}}>
                <Text style={styles.nameText} numberOfLines={1}>
                    {firstName}
                </Text>
                <Text style={styles.nameText} numberOfLines={1}>
                    {lastName}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        backgroundColor: colors.surface.base,
        borderWidth: 1,
        borderColor: colors.border.base,
        padding: RDP(8),
        // marginBottom: RDP(10),
        borderRadius: 10,
        elevation: 1,
        justifyContent: 'space-between'
    },
    thumbnail:{
        backgroundColor: colors.surface.light95,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.border.base
    },
    body: {
        marginStart: RDP(10)
    },
    nameText: {
        fontWeight: 'bold',
        color: colors.text.dark,
        fontSize: RDP(14),
        textAlign: 'center',
    },    
    row: {
        flexDirection: 'row',
    },
    iconWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        color: colors.text.muted,
        backgroundColor: colors.surface.light95,
        borderRadius: 100,
    },
    icon: {
        color: colors.text.muted,
    },
    subText: {
        color: colors.text.muted,
        marginStart: RDP(10),
        fontSize: RDP(12)
    },
});
