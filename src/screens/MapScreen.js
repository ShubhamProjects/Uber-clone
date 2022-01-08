import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import CongatulationsRideBooked from './CongatulationsRideBooked';
import Map from '../components/Map';
import NavigateCard from './NavigateCard';
import RideOptions from './RideOptions';

const MapScreen = () =>
{
    const Stack = createNativeStackNavigator();

    return (
        <View>

            <View style={[tw`h-1/2`]}>
                <Map/>
            </View>

            <View style={[tw`h-1/2`]}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="RideOptions"
                        component={RideOptions}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="CongratulationScreen"
                        component={CongatulationsRideBooked}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen
