import React from 'react';
import
    {
        FlatList,
        LayoutAnimation,
        StyleSheet,
        Text,
        ToastAndroid,
        UIManager,
        View,
        useWindowDimensions,
    } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ModeContext } from '../Context/ModeContext';
import BeneficiaryCardLight from '../components/BeneficiaryScreen/BeneficiaryCardLight';
import BeneficiaryCardSmallLight from '../components/BeneficiaryScreen/BeneficiaryCardSmallLight';
import { NoBeneficiariesScreen } from '../components/BeneficiaryScreen/NoBeneficiariesScreen';
import SwipeableCardWrapper from '../components/BeneficiaryScreen/SwipeableCardWrapper';
import ButtonInlineText from '../components/commons/ButtonInlineText';
import ButtonInlineToggle from '../components/commons/ButtonInlineToggle';
import { Spacer } from '../components/commons/Spacer';
import { colors } from '../constants/Colors';
import { BENEFICIARY_TABLE, databaseAPI } from '../constants/data';
import { IMAGES } from '../constants/images';
import { spacing } from '../constants/spacing';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { lightColors } from '../styles/components/Modes/LightColors';
import { RDP, wScale } from '../utils/scaling';
import { range } from '../utils/utils';

export function BeneficiaryScreen({ navigation })
{
    const { darkTheme, toggle } = React.useContext(ModeContext);
    const [beneficiariesData, setBeneficiariesData] = React.useState();
    const [compactView, setCompactView] = React.useState();
    const [page, setPage] = React.useState(0);
    const dataItemsPerPage = 20;

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

    // required code block for layout animation based on documentation
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
            { ids: range(0, (page+1) * dataItemsPerPage) },
            r => setBeneficiariesData(r),
            e => console.log('failed ', e),
        );
    }, [page]);

    // Flat list related
    const { width, height } = useWindowDimensions();
    const listWidth = width - spacing.screenPadding * 2;
    const cardDimensions = {
        width: compactView
            ? RDP(listWidth / 3, true, 10) - RDP(5, true, 0) * wScale ** 10
            : listWidth,
        height: compactView ? RDP(160, true, 0) : RDP(80),
    };

    const cardsPerWindow = Math.ceil(
        1 / (cardDimensions.height / (height * 0.8)),
    );

    const renderItem = React.useCallback(
        function ({ item, index, separators })
        {
            return compactView ? (
                <BeneficiaryCardSmallLight
                    firstName={item.first_name}
                    lastName={item.last_name}
                    image={IMAGES[item.id]}
                    width={cardDimensions.width}
                    height={cardDimensions.height}
                    onPress={() => navigation.getParent().navigate('beneficiaryEdit', { data: item })}
                />
            ) : (
                <SwipeableCardWrapper
                    width={cardDimensions.width}
                    height={cardDimensions.height}
                    onPress={() => navigation.getParent().navigate('beneficiaryDetails')}
                    actionsOnPress={{
                        edit: () =>
                            navigation.getParent().navigate('beneficiaryEdit', { data: item }),
                        delete: () => deleteBeneficiary(item.id),
                    }}>
                    <BeneficiaryCardLight
                        firstName={item.first_name}
                        lastName={item.last_name}
                        phone={item.phone}
                        email={item.email}
                        image={IMAGES[item.id]}
                        width={cardDimensions.width}
                        height={cardDimensions.height}
                        id={item.id}
                    />
                </SwipeableCardWrapper>
            );
        },
        [compactView],
    );

    return (
        <GestureHandlerRootView
            style={[
                styles.screen,
                {
                    backgroundColor: darkTheme
                        ? darkColors.darkBackgrd
                        : lightColors.lightBackgrd,
                },
            ]}>
            <Header />

            <FlatList
                key={compactView}
                data={beneficiariesData}
                horizontal={false}
                numColumns={compactView ? 3 : 1}
                keyExtractor={item => item.id}
                initialNumToRender={cardsPerWindow}
                removeClippedSubviews={true}
                windowSize={9}
                getItemLayout={(data, index) => ({
                    length: cardDimensions.width,
                    offset: cardDimensions.height * index,
                    index,
                })}
                onEndReachedThreshold={0.1}
                onEndReached={() => setPage((prev) => prev + 1)}
                ListEmptyComponent={
                    <NoBeneficiariesScreen
                        stillFetching={beneficiariesData === undefined}
                        onPressAdd={() =>
                        {
                            navigation.getParent().navigate('beneficiaryEdit', { data: null });
                        }}
                    />
                }
                ItemSeparatorComponent={args => <View style={{ height: RDP(5) }} />}
                columnWrapperStyle={compactView && { justifyContent: 'space-between' }}
                contentContainerStyle={{
                    paddingVertical: RDP(5),
                    paddingHorizontal: spacing.screenPadding,
                    backgroundColor: null,
                    flex: beneficiariesData ? null : 1,
                    // height: '100%'
                }}

                renderItem={renderItem}

            // debug={beneficiariesData?.length}
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
                <Text
                    style={[
                        styles.headerText,
                        { color: darkTheme ? darkColors.darkText : lightColors.lightText },
                    ]}>
                    Beneficiaries
                </Text>
                <ButtonInlineToggle control={[compactView, setCompactView]}>
                    <Icon name="border-all" size={RDP(20)} />
                    <Icon name="list" size={RDP(20)} />
                </ButtonInlineToggle>
                <Spacer horizontal value={RDP(10)} />
                <ButtonInlineText
                    onPress={() =>
                    {
                        navigation.getParent().navigate('beneficiaryEdit', { data: null });
                    }}>
                    <Icon name="plus-circle" size={RDP(20)} />
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
        // padding: spacing.screenPadding,
        backgroundColor: colors.bgLight,
    },
    viewHeader: {
        paddingHorizontal: spacing.screenPadding,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: RDP(20),
    },
    headerText: {
        fontWeight: 'bold',
        color: colors.textDark,
        fontSize: RDP(20),
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

async function asyncGrab(table, query = {}, onSuccess, onFail)
{
    await databaseAPI(table, query)
        .then(r => onSuccess(r))
        .catch(e => onFail(e));
}
