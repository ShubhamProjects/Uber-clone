import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { styles } from '../styles'

const Map = () => {
    return (
        <MapView
            style={[styles.flx1]}
            initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
        />
    )
}

export default Map
