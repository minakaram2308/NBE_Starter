import React from 'react';
import
    {
        FlatList,
        LayoutAnimation,
        Pressable,
        StyleSheet,
        Text,
        ToastAndroid,
        UIManager,
        View,
        useWindowDimensions,
    } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonInlineText from '../components/commons/ButtonInlineText';
import ButtonInlineToggle from '../components/commons/ButtonInlineToggle';
import { Spacer } from '../components/commons/Spacer';
import { colors } from '../constants/Colors';
import
    {
        BENEFICIARY_TABLE,
        TRANSACTION_TABLE,
        beneficiaries,
        databaseAPI,
    } from '../constants/data';
import { IMAGES } from '../constants/images';
import { spacing } from '../constants/spacing';
import SwipeableCardWrapper from '../components/BeneficiaryScreen/SwipeableCardWrapper';
import BeneficiaryCard from '../components/BeneficiaryScreen/BeneficiaryCard';
import { NoBeneficiariesScreen } from '../components/BeneficiaryScreen/NoBeneficiariesScreen';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { lightColors } from '../styles/components/Modes/LightColors';
import { ModeContext } from '../Context/ModeContext';

export function BeneficiaryScreen({ navigator })
{
    const {darkTheme, toggle} = React.useContext(ModeContext);
    const [beneficiariesData, setBeneficiariesData] = React.useState([]);
    const [compactView, setCompactView] = React.useState(false);
    const cardsPerRow = compactView ? 3 : 1;

    const flatlistAnimationConfig = {
        duration: 500,
        update: {
            type: LayoutAnimation.Types.spring,
            springDamping: -0.9,
        },
        delete: {
            duration: 100,
            type: LayoutAnimation.Types.easeIn,
            property: LayoutAnimation.Properties.scaleXY,
        },
    };

    // required code block based on documentation
    if (
        Platform.OS === 'android' &&
        UIManager.setLayoutAnimationEnabledExperimental
    )
    {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    // fetch data
    React.useEffect(function ()
    {
        asyncGrab(
            BENEFICIARY_TABLE,
            {},
            r => setBeneficiariesData(r),
            e => console.log('failed ', e),
        );
    }, []);

    // fill the grid with blank cards to maintain its shape
    React.useEffect(
        function ()
        {
            if (!compactView) return;

            const diff = cardsPerRow - (beneficiariesData.length % cardsPerRow);
            if (diff !== cardsPerRow)
            {
                setBeneficiariesData(function (prev)
                {
                    let fixed = [...prev];
                    for (let i = 0; i < diff; i++)
                    {
                        fixed.push({ id: 'blankCard' + i, blank: true });
                    }

                    return fixed;
                });
            }
        },
        [compactView],
    );

    return (
        <GestureHandlerRootView style={[styles.screen,{backgroundColor:darkTheme?darkColors.darkBackgrd:lightColors.lightBackgrd}]}>
            <Header />

            <FlatList
                style={[styles.cardGridScrollView, {}]}
                horizontal={false}
                numColumns={cardsPerRow}
                data={beneficiariesData}
                keyExtractor={item => item.id}
                extraData={compactView}
                key={compactView}
                removeClippedSubviews={true}
                initialNumToRender={5}
                ListEmptyComponent={<NoBeneficiariesScreen />}
                columnWrapperStyle={cardsPerRow > 1 && {}}
                ItemSeparatorComponent={args => <Spacer vertical value={10} />}
                contentContainerStyle={[
                    !beneficiariesData.length && {
                        flex: 1,
                    },
                    { paddingBottom: 10 },
                ]}
                renderItem={function ({ item, index, separators })
                {
                    let key = item?.id;
                    let child;
                    let spacing;

                    if (cardsPerRow === 1)
                    {
                        child = (
                            <SwipeableCardWrapper
                                actionsOnPress={{ delete: () => deleteBeneficiary(key) }}>
                                <BeneficiaryCard
                                    cardData={item}
                                    cardsPerRow={cardsPerRow}
                                    compact={compactView}
                                    image={IMAGES[key]}
                                />
                            </SwipeableCardWrapper>
                        );
                    } else
                    {
                        if (item?.blank)
                        {
                            child = (
                                <BeneficiaryCard
                                    cardsPerRow={cardsPerRow}
                                    compact={compactView}
                                    blank
                                />
                            );
                        } else
                        {
                            child = (
                                <BeneficiaryCard
                                    cardData={item}
                                    cardsPerRow={cardsPerRow}
                                    compact={compactView}
                                    image={IMAGES[key]}
                                />
                            );
                        }

                        if ((index + 1) % 3 !== 0)
                            spacing = <Spacer horizontal value={10} />;
                    }

                    return (
                        <React.Fragment key={key}>
                            {child}
                            {spacing}
                        </React.Fragment>
                    );
                }}
            />
        </GestureHandlerRootView>
    );

    function deleteBeneficiary(id)
    {
        console.log('delete', id);
        setBeneficiariesData(function (prev)
        {
            return prev.filter(item => item.id !== id);
        });
        LayoutAnimation.configureNext(flatlistAnimationConfig);
        ToastAndroid.show('Deleted Beneficiary', ToastAndroid.SHORT);
    }

    ///////////////////////////////////////////
    // Local components
    ///////////////////////////////////////////
    function Header()
    {
        return (
            <View style={[styles.viewHeader]}>
                <Text style={[styles.headerText,{color:darkTheme?darkColors.darkText:lightColors.lightText}]}>Beneficiaries</Text>
                <ButtonInlineToggle  control={[compactView, setCompactView]}>
                    <Icon name="border-all" size={20} />
                    <Icon name="list" size={20} />
                </ButtonInlineToggle>
                <Spacer horizontal value={10} />
                <ButtonInlineText>
                    <Icon name="plus-circle" size={20} />
                    Add
                </ButtonInlineText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        padding: spacing.screenPadding,
        backgroundColor: colors.bgLight,
    },
    viewHeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontWeight: 'bold',
        color: colors.textDark,
        fontSize: 20,
        flex: 1,
    },
    cardGridScrollView: {},
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    cardGrid: {
        flexDirection: 'column',
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    },
    qaContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
    },
});

async function asyncGrab(table, query={}, onSuccess, onFail)
{
    await databaseAPI(table, query)
        .then(r => onSuccess(r))
        .catch(e => onFail(e));
}
