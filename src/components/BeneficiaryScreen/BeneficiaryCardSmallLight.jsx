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
    image,
    width = '100%',
    height = null,
})

{
    let imageDOM;
    if (image)
        imageDOM = (
            <Image
                source={image}
                style={[
                    styles.thumbnail,
                    { width: width - RDP(16), height: width - RDP(16) },
                ]}
            />
        );
    else
        imageDOM = (
            <View
                style={[
                    styles.thumbnail,
                    { width: width - RDP(16), height: width - RDP(16) },
                ]}>
                <Icon name="user" solid style={[styles.icon]} size={RDP(24)} />
            </View>
        );
    const { darkTheme, toggle } = React.useContext(ModeContext);

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

            <View style={{ marginTop: RDP(5) }}>
                <Text style={[styles.nameText,{color:darkTheme?darkColors.darkText:lightColors.lightText}]} numberOfLines={1}>
                    {firstName}
                </Text>
                <Text style={[styles.nameText,{color:darkTheme?darkColors.darkText:lightColors.lightText}]} numberOfLines={1}>
                    {lastName}
                </Text>
            </View>
        </View>
    );
});

export default BeneficiaryCardLight;

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
        justifyContent: 'space-between',
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
        fontSize: RDP(12),
    },
});
