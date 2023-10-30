import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export const Maps=()=> {
  const markerCoordinate1 = {
    latitude: 30.067648989854696,
    longitude:  31.330051367689375,
  };
  const markerCoordinate2 = {
    latitude: 30.06686903803116,
    longitude: 31.329300349172442,
  };
  const markerCoordinate3 = {
    latitude: 30.068698201064237,
    longitude: 31.33000845234554,
  };
    const markerCoordinate4 = {
    latitude: 30.06772327066018 ,
    longitude: 31.331381743347936,
  };
    const markerCoordinate5 = {
    latitude: 30.068401080434754,
    longitude:  31.327605193091372,
  };
    const markerCoordinate6 = {
    latitude: 30.068744626083316,
    longitude: 31.32684344573238,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 30.067383242717057, // Use the latitude of one of your markers
          longitude: 31.330059911548595, // Use the longitude of one of your markers
          latitudeDelta: 0.01, // Adjust this value for the desired zoom level
          longitudeDelta: 0.01, // Adjust this value for the desired zoom level
        }}
      >
        <Marker coordinate={markerCoordinate1} />
        <Marker coordinate={markerCoordinate2} />
        <Marker coordinate={markerCoordinate3} />
        <Marker coordinate={markerCoordinate4} />
        <Marker coordinate={markerCoordinate5} />
        <Marker coordinate={markerCoordinate6} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});