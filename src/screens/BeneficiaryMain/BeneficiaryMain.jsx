import React from 'react';
import
    {
        FlatList, Pressable, StyleSheet,
        Text,
        View,
        useWindowDimensions
    } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonInlineText from '../../components/commons/ButtonInlineText';
import ButtonInlineToggle from '../../components/commons/ButtonInlineToggle';
import { Spacer } from '../../components/commons/Spacer';
import { colors } from '../../constants/colors';
import { beneficiaries } from '../../constants/data';
import { IMAGES } from '../../constants/images';
import { spacing } from '../../constants/spacing';
import BenCardWrapper from './BenCardWrapper';
import BeneficiaryCard from './BeneficiaryCard';
import { EmptyScreenPlaceholder } from './EmptyScreenPlaceholder';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SwipeableFlatList from 'react-native-swipeable-list';

export default function BeneficiaryMain({ navigator })
{
    const { width, height } = useWindowDimensions();

    const [beneficiariesData, setBeneficiariesData] = React.useState([]);
    const [compactView, setCompactView] = React.useState(false);
    const cardsPerRow = compactView ? 3 : 1;

    React.useEffect(function ()
    {
        const timeoutID = setTimeout(function ()
        {
            setBeneficiariesData(beneficiaries.slice(0));
        }, 10);

        return () => clearTimeout(timeoutID);
    }, []);

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

    const QuickActions = (index, qaItem) => {
        return (
          <View style={styles.qaContainer}>
            <View style={[styles.button, styles.button1]}>
              <Pressable onPress={() => archiveItem(qaItem.id)}>
                <Text style={[styles.buttonText, styles.button1Text]}>Archive</Text>
              </Pressable>
            </View>
            <View style={[styles.button, styles.button2]}>
              <Pressable onPress={() => snoozeItem(qaItem.id)}>
                <Text style={[styles.buttonText, styles.button2Text]}>Snooze</Text>
              </Pressable>
            </View>
            <View style={[styles.button, styles.button3]}>
              <Pressable onPress={() => deleteItem(qaItem.id)}>
                <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
              </Pressable>
            </View>
          </View>
        );
      };    

    return (
        <GestureHandlerRootView  style={styles.screen}>
            <View style={[styles.viewHeader]}>
                <Text style={[styles.headerText]}>Beneficiaries</Text>
                <ButtonInlineToggle control={[compactView, setCompactView]}>
                    <Icon name="border-all" size={20} />
                    <Icon name="list" size={20} />
                </ButtonInlineToggle>
                <Spacer horizontal value={10} />
                <ButtonInlineText>
                    <Icon name="plus-circle" size={20} />
                    Add
                </ButtonInlineText>
            </View>

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
                    ListEmptyComponent={<EmptyScreenPlaceholder />}
                    // columnWrapperStyle={cardsPerRow > 1 && { alignItems: 'flex-start' }}
                    ItemSeparatorComponent={args => <Spacer vertical value={10} />}
                    contentContainerStyle={
                        [!beneficiariesData.length && {
                            flex: 1,
                        },
                        {paddingBottom: 10, }]
                    }
                    renderItem={function ({ item, index, separators })
                    {
                        let key = item?.id;
                        let child;
                        let spacing;

                        if (cardsPerRow === 1)
                        {
                            child = (
                                <BenCardWrapper actionsOnPress={{'delete': () => deleteBeneficiary(key)}}>
                                    <BeneficiaryCard
                                        cardData={item}
                                        cardsPerRow={cardsPerRow}
                                        compact={compactView}
                                        image={IMAGES[key]}
                                    />
                                </BenCardWrapper>
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
            {/* <SwipeableFlatList
                scrollEnabled={false}

                style={[styles.cardGridScrollView, {}]}
                horizontal={false}
                numColumns={cardsPerRow}
                data={beneficiariesData}
                keyExtractor={item => item.id}
                extraData={compactView}
                key={compactView}
                removeClippedSubviews={true}
                initialNumToRender={5}
                ListEmptyComponent={<EmptyScreenPlaceholder />}
                renderQuickActions={({index, item}) => QuickActions(index, item)}
                // columnWrapperStyle={cardsPerRow > 1 && { alignItems: 'flex-start' }}
                ItemSeparatorComponent={args => <Spacer vertical value={10} />}
                maxSwipeDistance={240}
                contentContainerStyle={
                    [!beneficiariesData.length && {
                        flex: 1,
                    },
                    {paddingBottom: 10, }]
                }
                renderItem={function ({ item, index, separators })
                {
                    let key = item?.id;
                    let child;
                    let spacing;

                    // if (cardsPerRow === 1)
                    // {
                    //     child = (
                    //         <BenCardWrapper>
                    //             <BeneficiaryCard
                    //                 cardData={item}
                    //                 cardsPerRow={cardsPerRow}
                    //                 compact={compactView}
                    //                 image={IMAGES[key]}
                    //             />
                    //         </BenCardWrapper>
                    //     );
                    // } else
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
            /> */}

        </GestureHandlerRootView>
    );

    function deleteBeneficiary(id)
    {
        console.log('delete', id)
        setBeneficiariesData(function(prev){
            return prev.filter((item) => item.id !== id)
        })
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
      button1Text: {
      },
      button2Text: {
      },
      button3Text: {
      },
    
});
