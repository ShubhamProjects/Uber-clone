import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { setDestination } from '../core/navSlice';

const NavigateCard = ({ navigation }) =>
{
    const dispatch = useDispatch();

    const onRideOptionsClick = () =>
    {
        dispatch(setDestination({
            "lat": 26.4773635,
            "lng": 90.5353109,
            "desc": "New Bongaigaon BG colony",
        }));
        navigation.navigate('RideOptions');
    }

    return (
        <View>
            <TouchableOpacity onPress={() => onRideOptionsClick()}>
                <Text>Dispatch</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavigateCard
