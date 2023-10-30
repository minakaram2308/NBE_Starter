import React from 'react'
import { StyleSheet, View } from "react-native"

export function Spacer({
    vertical,
    horizontal,
    value,
}){
    return(
        <View style={{height: vertical && value, width: horizontal && value}}>

        </View>
    )
}

// const styles = StyleSheet.create({

// })