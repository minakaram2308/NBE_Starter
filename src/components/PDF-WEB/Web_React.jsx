import React,{useRef} from 'react';
import { ActivityIndicator, Button,View } from 'react-native';
import { WebView } from 'react-native-webview';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/components/web_pdf/Web_React.style';
export const Web_React=({navigation})=>{
    const ref=useRef();
    return (
    <View style={styles.container}>
    
    <View style={styles.title}>
     
      
        <FontAwesome5 name={'arrow-left'} size={24} onPress={()=>{navigation.goBack()}}/>
        
        <View style={styles.buttonContainer}>
            <Button title='Back' onPress={()=>{ref.current?.goBack()}}/>
            <Button title='reload' onPress={()=>{ref.current?.reload()}}/>
            <Button title='Forward' onPress={()=>{ref.current?.goForward()}}/>
        </View>
        </View>
    <WebView 
    ref={ref}
    source={{ uri: 'https://www.ejada.com/' }} 
    style={styles.web} 
    startInLoadingState
    renderLoading={()=>(
        <View style={{flex:1}}>
            <ActivityIndicator size='large' color='lightskyblue'/>
        </View>
    )}
    />
    </View>
    );

}


