import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { setDestination } from '../core/navSlice';
import { styles } from '../styles';

const NavigateCard = ({ navigation }) =>
{
    const dispatch = useDispatch();

    const [latitudeValue, setLatitudeValue] = useState(null);
    const [longitudeValue, setLongitudeValue] = useState(null);

    const onRideOptionsClick = () =>
    {
        dispatch(setDestination({
            "lat": parseFloat(latitudeValue),
            "lng": parseFloat(longitudeValue),
            "desc": "Your destination!",
        }));
        navigation.navigate('RideOptions');
        setLatitudeValue(null);
        setLongitudeValue(null);
    }

    const enteredLatitude = (latitude) =>
    {
        setLatitudeValue(latitude);
    };

    const enteredLongitude = (longitude) =>
    {
        setLongitudeValue(longitude);
    };
    
    return (
        <View style={[styles.flx1, styles.bgWhite]}>
            <View style={[styles.jcfe, styles.flx0_2, styles.aic]}>
                <Text style={[tw`text-2xl`]}>Where to go?</Text>
            </View>

            <View style={[styles.jcse, styles.aic, styles.flx1]}>
                <TextInput
                    placeholder='Enter latitude'
                    style={[tw`text-lg h-12 w-10/12 ml-12 mr-12 bg-gray-50`]}
                    keyboardType='numeric'
                    value={latitudeValue}
                    onChangeText={(latitude) => enteredLatitude(latitude)}
                />
                <TextInput
                    placeholder='Enter longitude'
                    style={[tw`text-lg h-12 w-10/12 ml-12 mr-12 bg-gray-50`]}
                    keyboardType='numeric'
                    value={longitudeValue}
                    onChangeText={(longitude) => enteredLongitude(longitude)}
                />
                <TouchableOpacity disabled={((latitudeValue === null || latitudeValue === '') || (longitudeValue === null || longitudeValue === ''))} onPress={() => onRideOptionsClick()}
                style={[tw`h-16 w-10/12 rounded-md ${((latitudeValue === null || latitudeValue === '') || (longitudeValue === null || longitudeValue === '')) ? "bg-gray-300" : "bg-black"}`, styles.aic, styles.jcc]}>
                    <Text style={[tw`text-white text-xl font-bold`]}>Lets Go!</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default NavigateCard
