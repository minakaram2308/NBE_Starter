import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Pdf from 'react-native-pdf';
import styles from '../../styles/components/web_pdf/Pdf_React.style';
import {
    Text,
    View,
    Dimensions
  } from 'react-native';
export const Pdf_React=({navigation})=>{

    const source = {uri:'bundle-assets://thereactnativebooksample.pdf.pdf',cache:true };
    
   
 
  
    return (
    
  
      <View style={styles.container}>
        <View style={styles.title}>
        <FontAwesome5 name={'arrow-left'} size={24}  onPress={()=>navigation.goBack()}/>
          
          
          
          <Text style={styles.text}>Offers</Text>
        </View>
      <Pdf
          source={source}
          onLoadComplete={(numberOfPages,filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page,numberOfPages) => {
              console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
              console.log(error);
          }}
          onPressLink={(uri) => {
              console.log(`Link pressed: ${uri}`);
          }}
        
          
          style={styles.pdf}/>
  </View>
    );  

}
