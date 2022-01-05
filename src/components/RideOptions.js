import React, { useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { styles } from '../styles'
import { selectDestination, selectOrigin } from '../core/navSlice';
import { useSelector } from 'react-redux';

const Rides = [
    {
        id: 'Uber-X',
        title: 'Uber X',
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: 'Uber-XL',
        title: 'Uber XL',
        multiplier: 1.25,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: 'Uber-LUX',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    }
];

const RideOptions = () =>
{
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    const [selectedRide, setSelectedRide] = useState(null);

    const deg2rad = (deg) =>
    {
        return deg * (Math.PI / 180)
    };

    const distanceCalculator = () =>
    {
        let R = 6371; // Radius of the earth in km
        let dLat = deg2rad(destination.lat - origin.lat);  // deg2rad 
        let dLon = deg2rad(destination.lng - origin.lng);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(origin.lat)) * Math.cos(deg2rad(destination.lat)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return parseFloat(R * c).toFixed(2); // Distance in km
    };

    const fareCalculator = (item) =>
    {
        return parseFloat(18 * distanceCalculator() * item.multiplier).toFixed(2);
    };

    return (
        <View style={[styles.flx1, styles.bgWhite]}>
            <View style={[styles.m6, styles.aic]}>
                <Text style={[tw`text-xl`]}>Select a Ride</Text>
            </View>
            <View style={[styles.flx1]}>
            <FlatList
                data={Rides}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedRide(item.title)}
                        style={[styles.flxr, styles.jcsa, styles.aic, tw`border-b border-gray-100 ${selectedRide === item.title ? 'bg-gray-200' : null}`]}>
                        <View style={[styles.aic]}>
                            <Image style={[tw`h-16 w-20 `]} source={{uri: item.image}} />
                            <Text style={[styles.pb3]}>{ item.title }</Text>
                        </View>
                        <Text>{`${distanceCalculator()} km away`}</Text>
                        <Text>{`₹ ${fareCalculator(item)}`}</Text>
                    </TouchableOpacity>
                )}
                />
            </View>
            
            <TouchableOpacity style={[tw`rounded-md`, styles.aic, styles.flx0_2, styles.jcc, styles.bgBlack, styles.m10]}>
                <Text style={[tw`text-white text-lg`]}>{`Your ride is ${ selectedRide === null ? '...' : selectedRide}`}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RideOptions
