import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default function App() {
  const [locationPermission, setLocationPermission] = useState('denied');
  const [location, setLocation] = useState(null);
  const [gyroscope, setGyroscope] = useState(null);

  useEffect(() => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({ status }) => setLocationPermission(status));

    Gyroscope.isAvailableAsync()
      .then(data => {
        if(data) {
          Gyroscope.addListener(handleGyroscope);
        }
      })
  }, []);

  function handleGyroscope({ x, y, z }) {
    setGyroscope({ x, y, z });
  }

  async function handleLocation() {
    const data = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Low,
    });

    setLocation(data);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Get location"
        onPress={handleLocation}
      />
      {location && (
        <View>
          <Text>Lon: {location.coords.longitude}</Text>
          <Text>Lat: {location.coords.latitude}</Text>
          <Text>{Date(location.timestamp)}</Text>
        </View>
      )}
      {gyroscope && (
        <View>
          <Text>X: {round(gyroscope.x)}</Text>
          <Text>Y: {round(gyroscope.y)}</Text>
          <Text>Z: {round(gyroscope.z)}</Text>
        </View>
      )}
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
