import React from 'react';
import
    {
        FlatList,
        Image,
        ScrollView,
        StyleSheet,
        Text,
        View,
        useWindowDimensions,
    } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonInlineText from '../../components/commons/ButtonInlineText';
import { colors } from '../../constants/colors';
import { spacers } from '../../constants/spacing';
import ButtonInlineToggle from '../../components/commons/ButtonInlineToggle';
import { Spacer } from '../../components/commons/Spacer';
import { beneficiaries } from '../../constants/data';
import BeneficiaryCard from './BeneficiaryCard';
import { EmptyScreenPlaceholder } from './EmptyScreenPlaceholder';
import BenCardWrapper from './BenCardWrapper';
import { IMAGES } from '../../constants/images';

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
            console.log({ diff });
            if (diff !== cardsPerRow)
            {
                setBeneficiariesData(function (prev)
                {
                    let fixed = [...prev];
                    for (let i = 0; i < diff; i++)
                    {
                        console.log('push null');
                        fixed.push({ id: crypto.randomUUID(), blank: true });
                    }

                    return fixed;
                });
            }
        },
        [compactView],
    );

    const rowsOfCardsDOM = [];
    // if (beneficiariesData.length > 0)
    // {
    //     for (let i = 0; i < beneficiariesData.length; i += cardsPerRow)
    //     {
    //         let row = beneficiariesData.slice(i, i + cardsPerRow);
    //         if (row.length < cardsPerRow)
    //         {
    //             row.push(...Array(cardsPerRow - row.length).fill(null));
    //         }

    //         let rowKey = row.map(e => (e ? e.id : '0')).join('.');

    //         rowsOfCardsDOM.push(
    //             <View key={rowKey} style={[styles.row]}>
    //                 {row.map(function (e, i)
    //                 {
    //                     let key = ((e === null) ? crypto.randomUUID() : e.id);
    //                     return (
    //                         <React.Fragment key={key}>
    //                             <BenCardWrapper disabled={compactView}>
    //                                 <BeneficiaryCard
    //                                     cardData={e}
    //                                     compact={compactView}
    //                                     blank={e === null}
    //                                     cardsPerRow={cardsPerRow}
    //                                 />
    //                             </BenCardWrapper>

    //                             {i !== row.length - 1 && (
    //                                 <Spacer
    //                                     horizontal
    //                                     value={Math.trunc(
    //                                         (width * (0.2 / cardsPerRow)) / cardsPerRow,
    //                                     )}
    //                                 />
    //                             )}
    //                         </React.Fragment>
    //                     );
    //                 })}
    //             </View>,
    //         );
    //     }
    // }

    // const benCardsDOM = beneficiariesData.map(function(el){
    //     return <BenCardWrapper>

    //     </BenCardWrapper>
    // })

    // const diff = cardsPerRow - beneficiariesData.length % cardsPerRow
    // // let
    // if(diff !== cardsPerRow)
    // {
    //     for(let i = 0; i < diff; i++)
    //     {
    //         beneficiariesData.push(null)
    //     }
    // }

    console.log(beneficiariesData.length, beneficiariesData.includes(null));
    // FlatList.flashScrollIndicators()
    return (
        <View style={styles.screen}>
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
                columnWrapperStyle={cardsPerRow > 1 && { alignItems: 'flex-start' }}
                initialNumToRender={5}
                ItemSeparatorComponent={args => <Spacer vertical value={10} />}
                removeClippedSubviews={true}
                contentContainerStyle={
                    !beneficiariesData.length && {
                        flex: 1,
                    }
                }
                ListEmptyComponent={<EmptyScreenPlaceholder />}
                renderItem={function ({ item, index, separators })
                {
                    // if(! item?.id) console.log(item?.id)

                    let key = item?.id;
                    let child;
                    let spacing;

                    if (cardsPerRow === 1)
                    {
                        child = (
                            <BenCardWrapper>
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
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        padding: spacers.screenPadding,
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
});
