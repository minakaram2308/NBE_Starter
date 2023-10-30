import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export const Maps=()=> {
  const markerCoordinate1 = {
    latitude: 30.066974205840264,
    longitude:  31.336983717513284,
  };
  const markerCoordinate2 = {
    latitude: 30.068640962863853,
    longitude: 31.344582905246888,
  };
  const markerCoordinate3 = {
    latitude: 30.067383242717057,
    longitude: 31.330059911548595,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 	20.066974205840264,
          longitude: 	21.336983717513284,
          latitudeDelta:20.066974205840264,
          longitudeDelta: 31.336983717513284,
        }}
      >
        <Marker coordinate={markerCoordinate1} />
        <Marker coordinate={markerCoordinate2} />
        <Marker coordinate={markerCoordinate3} />
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