import React from "react"
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { colors } from "../../constants/colors"
import { spacers } from "../../constants/spacing"
import ButtonInlineBase from "../../components/commons/ButtonInlineBase"
import ButtonInlineText from "../../components/commons/ButtonInlineText"
import Icon from 'react-native-vector-icons/FontAwesome5'
// import Icon from 'react-native-vector-icons/Ionicons'
import ButtonInlineToggle from "../../components/commons/ButtonInlineToggle"
import { Spacer } from "../../components/commons/Spacer"
import { EmptyScreenPlaceholder } from "./EmptyScreenPlaceholder"
import { beneficiaries } from '../../constants/data';
import BeneficiaryCard from "./BeneficiaryCard"

export default function BeneficiaryMain({ navigator }){
    const {width, height} = useWindowDimensions()
    
    const [beneficiariesData, setBeneficiariesData] = React.useState([])
    const [compactView, setCompactView] = React.useState(true)

    React.useEffect(function(){
        const timeoutID = setTimeout(function(){
            console.log('timeout')
            setBeneficiariesData(beneficiaries)
        }, 2000)

        return () => clearTimeout(timeoutID)
    },[])

    let beneficiaryCardsDOM = beneficiariesData.map(function(e, i){
        return (
            <BeneficiaryCard cardData={e} key={e.id} compact={compactView}/>
        )
    })

    console.log(beneficiariesData)
    return(
        <View style={styles.screen}>
            <View style={[styles.viewHeader]}>
                <Text style={[styles.headerText]}>Beneficiaries</Text>
                <ButtonInlineToggle control={[compactView, setCompactView]}>
                    <Icon name="border-all" size={20}  />
                    <Icon name="list" size={20} />
                </ButtonInlineToggle>
                <Spacer horizontal value={10}/>
                <ButtonInlineText>
                    <Icon name="plus-circle" size={20}/>
                    Add
                </ButtonInlineText>
            </View>
            {/* <View> */}
                {/* <View style={{alignSelf: 'flex-start', flexDirection: 'row', width: '100%', justifyContent: 'center'}}> */}
                {!beneficiariesData && <EmptyScreenPlaceholder/>}
                {/* {<BeneficiaryCard/>} */}
                <ScrollView style={[styles.cardGridScrollView]}>
                <View style={[styles.cardGrid]}>
                    { beneficiaryCardsDOM }
                    { beneficiaryCardsDOM }
                    { beneficiaryCardsDOM }
                </View>
                </ScrollView>
                {/* </View> */}
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        padding: spacers.screenPadding,
        backgroundColor: colors.bgLight
    },
    viewHeader:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText:{
        fontWeight: 'bold',
        color: colors.textDark,
        fontSize: 20,
        flex: 1,
        // paddingVertical: 5,
    },
    cardGrid:{
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'blue',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
})