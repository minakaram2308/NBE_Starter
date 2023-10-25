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
import { colors } from '../../constants/colors';
import { spacers } from '../../constants/spacing';
import ButtonInlineBase from '../../components/commons/ButtonInlineBase';
import ButtonInlineText from '../../components/commons/ButtonInlineText';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/Ionicons'
import ButtonInlineToggle from '../../components/commons/ButtonInlineToggle';
import { Spacer } from '../../components/commons/Spacer';
import { EmptyScreenPlaceholder } from './EmptyScreenPlaceholder';
import { beneficiaries } from '../../constants/data';
import BeneficiaryCard from './BeneficiaryCard';
import { range } from '../../utils/utils';

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
            console.log('timeout');
            setBeneficiariesData(beneficiaries);
        }, 2000);

        return () => clearTimeout(timeoutID);
    }, []);

    const rowsOfCardsDOM = [];
    if (beneficiariesData.length > 0)
    {
        // let row = []
        for (let i = 0; i < beneficiariesData.length; i += cardsPerRow)
        {
            let row = beneficiariesData.slice(i, i + cardsPerRow);
            if(row.length < cardsPerRow)
            {

            }
            rowsOfCardsDOM.push(
                <View key={i} style={[styles.row]}>
                    {row.map(function (e)
                    {
                        return (
                            <BeneficiaryCard cardData={e} key={e.id} compact={compactView} />
                        );
                    })}
                </View>,
            );
        }
    }

    // let row = []
    // let rowsDOM = beneficiariesData.map(function (e, i)
    // {
    //     row.push(<BeneficiaryCard cardData={e} key={e.id} compact={compactView} />)

    //     if((i+1) % 3 === 0){
    //         row = []
    //         return (
    //             <View key={e.id} style={[styles.row]}>
    //                 {row}
    //             </View>
    //         );
    //     }
    // });

    let beneficiaryCardsDOM = beneficiariesData.map(function (e, i)
    {
        return <BeneficiaryCard cardData={e} key={e.id} compact={compactView} />;
    });

    // console.log(beneficiariesData)
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
            {/* <View> */}
            {/* <View style={{alignSelf: 'flex-start', flexDirection: 'row', width: '100%', justifyContent: 'center'}}> */}
            {!beneficiariesData && <EmptyScreenPlaceholder />}
            {/* {<BeneficiaryCard/>} */}
            <ScrollView style={[styles.cardGridScrollView]}>
                <View style={[styles.cardGrid]}>
                    {rowsOfCardsDOM}
                    {/* { beneficiaryCardsDOM } */}
                    {/* { beneficiaryCardsDOM } */}
            {/* {<DisplayAnImage/>} */}
                </View>
            </ScrollView>
            {/* </View> */}
            {/* </View> */}
        </View>
    );

    
    function DisplayAnImage(){
    return (
      <>
        <View style={styles2.container}>
          <View style={styles2.imgWrapper}>
            <Image
              style={styles2.img}
              source={require('../../../assets/media/avatars/1.png')}
            />
          </View>
  
          <Text style={styles2.txt}>
            loremad ads sd sad asdas asdsadsd sadsadsad dsf s dadadsa ddas dsadads
          </Text>
        </View>
  
        <View style={styles2.container}>
          <View style={styles2.imgWrapper}>
            <Image
              style={styles2.img}
              source={require('../../../assets/media/avatars/1.png')}
            />
          </View>
          <Text style={styles2.txt}>
            loremad ads sd sad asdas asdsadsd sadsadsad dsf s dadadsa ddas dsadads
            loremad ads sd sad asdas asdsadsd sadsadsad dsf s dadadsa ddas dsadads
          </Text>
        </View>
        <View style={styles2.container}>
          <View style={styles2.imgWrapper}>
            <Image
              style={styles2.img}
              source={require('../../../assets/media/avatars/1.png')}
            />
          </View>
          <Text style={styles2.txt}>
            loremad ads sd sad asdas asdsadsd sadsadsad dsf s dadadsa ddas dsadads
          </Text>
        </View>
      </>
    );
  };
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
        // paddingVertical: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    cardGrid: {
        flexDirection: 'column',
        width: '100%',
        // backgroundColor: 'blue',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});


const styles2 = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'stretch',
      // justifyContent: 'center',
      backgroundColor: 'blue',
    },
    imgWrapper: {
      // flex: 1,
      overflow: 'hidden',
      backgroundColor: 'red',
      // width: 10,
      aspectRatio: 1,
    },
    img: {
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
    },
    txt: {
      color: 'black',
      flex: 1,
    },
  });