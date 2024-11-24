import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const MapPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>MapPage</Text>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                // minZoomLevel={4}  // default => 0
                // maxZoomLevel={10} // default => 20
                enableZoomControl={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                zoomEnabled={true}
                region={{
                    latitude: 12.9957737,
                    longitude: 77.6139992,
                    latitudeDelta: 0.115,
                    longitudeDelta: 0.115,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 12.9957737,
                        longitude: 77.6139992,
                    }}
                    description={"This is a marker in React Natve"}
                >
                    <Image
                        source={require('../assets/location-pin.png')}
                        style={{ height: 35, width: 35 }} />
                </Marker>
            </MapView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        // flex: 1,
    },
})

export default MapPage;