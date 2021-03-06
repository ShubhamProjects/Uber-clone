import React, { useEffect, useRef } from 'react'
import MapView, {Marker} from 'react-native-maps'
import { styles } from '../styles'
import { useSelector } from 'react-redux';
import { selectOrigin, selectDestination } from '../core/navSlice';

const Map = () =>
{
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    const mapRef = useRef(null);

    useEffect(() =>
    {
        if (!origin || !destination) return;

        //Map zoom and fit to markers
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],
            {
                edgePadding: { top: 50, bottom: 50, right: 50, left: 50 },
            });
    }, [origin, destination])

    return (
        origin?.lat !== null && (<MapView
            ref={mapRef}
            style={[styles.flx1]}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.lat,
                longitude: origin.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015,
            }} 
        >
            {origin !== null && (<Marker
                coordinate={{
                    latitude: origin.lat,
                    longitude: origin.lng,
                }}
                title='Origin'
                description={origin.desc}
                identifier='origin'
            />)}

           {destination !== null && ( <Marker
                coordinate={{
                    latitude: destination.lat,
                    longitude: destination.lng,
                }}
                title='Destination'
                description={destination.desc}
                identifier='destination'
            />)}
        </MapView>)
    )
}

export default Map
