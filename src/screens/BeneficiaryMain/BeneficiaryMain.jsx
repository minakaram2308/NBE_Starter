import React from 'react';
import
    {
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

export default function BeneficiaryMain({ navigator })
{
    const { width, height } = useWindowDimensions();

    const [beneficiariesData, setBeneficiariesData] = React.useState([]);
    const [compactView, setCompactView] = React.useState(true);
    const cardsPerRow = compactView ? 3 : 1;

    React.useEffect(function ()
    {
        const timeoutID = setTimeout(function ()
        {
            // console.log('timeout');
            setBeneficiariesData(beneficiaries);
        }, 2000);

        return () => clearTimeout(timeoutID);
    }, []);

    const rowsOfCardsDOM = [];
    if (beneficiariesData.length > 0)
    {
        for (let i = 0; i < beneficiariesData.length; i += cardsPerRow)
        {
            let row = beneficiariesData.slice(i, i + cardsPerRow);
            if (row.length < cardsPerRow)
            {
                row.push(...Array(cardsPerRow - row.length).fill(null));
            }

            let rowKey = row.map((e) => e ? e.id : '0').join('.')
            
            rowsOfCardsDOM.push(
                <View key={rowKey} style={[styles.row]}>
                    {row.map(function (e, i)
                    {
                        let key= ((e === null) ? crypto.randomUUID() : e.id)
                        return (
                            <React.Fragment key={key}>
                                <BeneficiaryCard
                                    cardData={e}
                                    compact={compactView}
                                    blank={e === null}
                                    cardsPerRow={cardsPerRow}
                                />

                                {i !== row.length - 1 && <Spacer horizontal value={Math.trunc(width * (0.2 / cardsPerRow) / (cardsPerRow))} />}
                            </React.Fragment>
                        );
                    })}
                </View>,
            );
        }
    }

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
            {!beneficiariesData.length && <EmptyScreenPlaceholder />}
            <ScrollView style={[styles.cardGridScrollView]}>
                <View style={[styles.cardGrid]}>{rowsOfCardsDOM}</View>
            </ScrollView>
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
