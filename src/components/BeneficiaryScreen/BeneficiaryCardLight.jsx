import React from 'react';
import
    {
        Image,
        StyleSheet,
        Text,
        View
    } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../constants/Colors';
import { RDP } from '../../utils/scaling';
import { darkColors } from '../../styles/components/Modes/DarkColors';
import { lightColors } from '../../styles/components/Modes/LightColors';
import { ModeContext } from '../../Context/ModeContext';
const BeneficiaryCardLight = React.memo(function BeneficiaryCardLight({
    firstName,
    lastName,
    phone = '+20',
    email = '@.com',
    image,
    width = '100%',
    height = null,
    id,
})
{
    // const {
    //     first_name: firstName = 'firstname',
    //     last_name: lastName = 'lastname',
    //     phone = 'phone',
    //     email = 'email',
    // } = cardData ?? {};
    const { darkTheme, toggle } = React.useContext(ModeContext);

    let imageDOM;
    if (image)
        imageDOM = (
            <Image
                source={image}
                style={[
                    styles.thumbnail,
                    { width: height - RDP(16), height: height - RDP(16) },
                ]}
            />
        );
    else
        imageDOM = (
            <View
                style={[
                    styles.thumbnail,
                    { width: height - RDP(16), height: height - RDP(16) },
                ]}>
                <Icon name="user" solid style={[styles.icon]} size={RDP(24)} />
            </View>
        );

    return (
        <View
            style={[
                styles.root,
                {
                    width: width,
                    height: height,
                },{backgroundColor:darkTheme?darkColors.darkBackgrd:lightColors.lightBackgrd}
            ]}>
            {imageDOM}
            <View style={[styles.body]}>
                <Text style={[styles.nameText,{color:darkTheme?darkColors.darkText:lightColors.lightText}]} numberOfLines={1}>
                    {firstName} {lastName}
                </Text>

                <View style={[styles.row, { paddingVertical: RDP(5) }]}>
                    <View style={[styles.iconWrapper]}>
                        <Icon name="phone" size={RDP(8)} style={[styles.icon]} />
                    </View>
                    <Text style={[styles.subText]} numberOfLines={1}>
                        {phone}
                    </Text>
                </View>

                <View style={[styles.row]}>
                    <View style={[styles.iconWrapper]}>
                        <Icon name="envelope" size={RDP(8)} solid style={[styles.icon]} />
                    </View>

                    <Text style={[styles.subText]} numberOfLines={1}>
                        {email}
                    </Text>
                </View>
            </View>
        </View>
    );
});

export default BeneficiaryCardLight;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        backgroundColor: colors.surface.base,
        borderWidth: 1,
        borderColor: colors.border.base,
        padding: RDP(8),
        marginBottom: RDP(10),
        borderRadius: 10,
        elevation: 1,
    },
    thumbnail: {
        backgroundColor: colors.surface.light95,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.border.base,
    },
    body: {
        marginStart: RDP(10),
    },
    nameText: {
        fontWeight: 'bold',
        color: colors.text.dark,
        fontSize: RDP(14),
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
        fontSize: RDP(12),
    },
});
