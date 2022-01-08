import React, { useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { selectDestination, selectOrigin } from '../core/navSlice';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import { styles } from '../styles'
import { Icon } from 'react-native-elements';
import { fareCalculator, distanceCalculator, amountBalanceFormat } from '../../Utility/CommonFunctions';

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

const RideOptions = ({navigation}) =>
{
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);


    const [selectedRide, setSelectedRide] = useState(null);

    const congratulationScreen = () =>
    {
        navigation.navigate('CongratulationScreen');
    }
    
    return (
        <View style={[styles.flx1, styles.bgWhite]}>
            <View style={[styles.m6]}>
                <View style={[tw`w-2/3`, styles.flxr, styles.aic, styles.jcsb]}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon style={[tw`w-10 mt-3 mb-4`]}
                            name="arrowleft" color="black" type="antdesign" />
                    </TouchableOpacity>
                    <Text style={[tw`text-xl`]}>Select a Ride</Text>
                </View>
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
                        <Text>{`${distanceCalculator(origin, destination)} km away`}</Text>
                        <Text>{`₹ ${amountBalanceFormat(fareCalculator(item, origin, destination))}`}</Text>
                    </TouchableOpacity>
                )}
                />
            </View>
            
            <TouchableOpacity disabled={!selectedRide} onPress={() => congratulationScreen()} style={[tw`rounded-md ${!selectedRide ? 'bg-gray-300' : 'bg-black'}`, styles.aic, styles.flx0_2, styles.jcc, styles.m10]}>
                <Text style={[tw`text-white text-lg`]}>{`Your ride is ${ selectedRide === null ? '...' : selectedRide}`}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RideOptions
